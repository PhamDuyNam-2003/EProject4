import { prisma } from "@/config/prisma.js";
import { hotelAdapter } from "../hotel-adapter/HotelMockAdapter.js";
import { BadRequestError } from "@/utils/errors/errorCustomize.js";
import { rabbitMQ } from "@/infrastructure/rabbitmq/index.js";

export class BookingService {
  /**
   * Khởi tạo đơn đặt phòng
   */
  public async createBooking(data: {
    userId: string;
    hotelId: string;
    checkInDate: string;
    checkOutDate: string;
    rooms: { roomId: string; quantity: number }[];
    guestInfo: { fullName: string; email: string; phone: string; specialRequests?: string };
  }) {
    const checkIn = new Date(data.checkInDate);
    const checkOut = new Date(data.checkOutDate);

    if (checkIn >= checkOut) {
      throw new BadRequestError("Check-out date must be after check-in date");
    }

    const totalNights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

    let totalRoomPrice = 0;
    const roomSnapshots: any[] = [];

    // 1. Validate & Lấy Snapshot giá phòng từ HotelMockAdapter
    for (const roomReq of data.rooms) {
      const isAvailable = await hotelAdapter.checkAvailability(roomReq.roomId, checkIn, checkOut);
      if (!isAvailable) {
        throw new BadRequestError(`Room ${roomReq.roomId} is not available for the selected dates`);
      }

      const roomDetails = await hotelAdapter.getRoomDetails(roomReq.roomId);
      if (!roomDetails || roomDetails.hotelId !== data.hotelId) {
        throw new BadRequestError(`Invalid room ${roomReq.roomId} for hotel ${data.hotelId}`);
      }

      const roomPrice = roomDetails.pricePerNight * roomReq.quantity * totalNights;
      totalRoomPrice += roomPrice;

      roomSnapshots.push({
        roomId: roomReq.roomId,
        roomName: roomDetails.name,
        pricePerNight: roomDetails.pricePerNight,
        quantity: roomReq.quantity
      });
    }

    // 2. Tính tiền (Thuế 10%)
    const taxAmount = totalRoomPrice * 0.1;
    const discountAmount = 0; // Chưa áp dụng promotion
    const finalAmount = totalRoomPrice + taxAmount - discountAmount;

    // 3. Lưu vào Database (Sử dụng Transaction để đảm bảo tính ACID)
    const booking = await prisma.$transaction(async (tx) => {
      // 3.1. Tạo Booking
      const newBooking = await tx.booking.create({
        data: {
          bookingCode: `BKG${Date.now()}`,
          userId: data.userId,
          hotelId: data.hotelId,
          checkInDate: checkIn,
          checkOutDate: checkOut,
          totalNights,
          roomPrice: totalRoomPrice,
          taxAmount,
          discountAmount,
          finalAmount,
          status: "PENDING",
          paymentStatus: "UNPAID",
        }
      });

      // 3.2. Tạo BookingRooms
      await tx.bookingRoom.createMany({
        data: roomSnapshots.map(rs => ({
          bookingId: newBooking.id,
          roomId: rs.roomId,
          roomName: rs.roomName,
          pricePerNight: rs.pricePerNight,
          quantity: rs.quantity
        }))
      });

      // 3.3. Tạo GuestInfo
      await tx.guestInfo.create({
        data: {
          bookingId: newBooking.id,
          fullName: data.guestInfo.fullName,
          email: data.guestInfo.email,
          phoneNumber: data.guestInfo.phone,
          specialRequests: data.guestInfo.specialRequests
        }
      });

      // 3.4. Ghi Audit Log
      await tx.bookingHistory.create({
        data: {
          bookingId: newBooking.id,
          action: "CREATED",
          note: "Khởi tạo đơn đặt phòng",
          createdBy: data.userId
        }
      });

      return newBooking;
    });

    // 4. Publish event to RabbitMQ (RoomHold)
    await rabbitMQ.publishEvent("booking.events", "booking.created", {
      bookingId: booking.id,
      hotelId: booking.hotelId,
      rooms: roomSnapshots
    });

    return booking;
  }
}

export const bookingService = new BookingService();
