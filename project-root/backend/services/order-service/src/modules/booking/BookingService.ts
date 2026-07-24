import { prisma } from "@/config/prisma.js";
import { BadRequestError } from "@/utils/errors/errorCustomize.js";
import { rabbitMQ } from "@/infrastructure/rabbitmq/index.js";
import { env } from "@/config/env.js";

const CATALOG_URL = process.env.CATALOG_SERVICE_URL ?? "http://localhost:3005";

async function fetchHotel(hotelId: string) {
  const res = await fetch(`${CATALOG_URL}/api/hotels/${hotelId}`);
  if (!res.ok) throw new BadRequestError(`Hotel ${hotelId} not found`);
  const json = await res.json() as { data: { id: string; name: string; price: number; availableRooms: number } };
  return json.data;
}

async function fetchRoomTypes(hotelId: string) {
  const res = await fetch(`${CATALOG_URL}/api/hotels/${hotelId}/room-types`);
  if (!res.ok) throw new BadRequestError(`Room types for hotel ${hotelId} not found`);
  const json = await res.json() as { data: { id: string; name: string; totalInventory: number }[] };
  return json.data;
}

export class BookingService {
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

    const totalNights = Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );

    const hotel = await fetchHotel(data.hotelId);

    const roomTypes = await fetchRoomTypes(data.hotelId);

    const overlappingBookings = await prisma.booking.findMany({
      where: {
        hotelId: data.hotelId,
        status: { not: "CANCELLED" },
        checkInDate: { lt: checkOut },
        checkOutDate: { gt: checkIn }
      },
      include: { rooms: true }
    });

    const bookedRoomsMap: Record<string, number> = {};
    for (const b of overlappingBookings) {
      for (const r of b.rooms) {
        bookedRoomsMap[r.roomId] = (bookedRoomsMap[r.roomId] || 0) + r.quantity;
      }
    }

    for (const reqRoom of data.rooms) {
      const rt = roomTypes.find(t => t.id === reqRoom.roomId);
      if (!rt) throw new BadRequestError(`Loại phòng ${reqRoom.roomId} không tồn tại`);
      const currentlyBooked = bookedRoomsMap[reqRoom.roomId] || 0;
      if (reqRoom.quantity + currentlyBooked > rt.totalInventory) {
        throw new BadRequestError(`Không còn đủ phòng trống cho loại phòng ${rt.name} vào ngày bạn chọn`);
      }
    }

    const totalRequested = data.rooms.reduce((sum, r) => sum + r.quantity, 0);
    const pricePerNight = hotel.price;
    const totalRoomPrice = pricePerNight * totalNights * totalRequested;
    const taxAmount = totalRoomPrice * 0.1;
    const finalAmount = totalRoomPrice + taxAmount;

    const roomSnapshots = data.rooms.map((r) => ({
      roomId: r.roomId,
      roomName: `Phòng tại ${hotel.name}`,
      pricePerNight,
      quantity: r.quantity,
    }));

    const booking = await prisma.$transaction(async (tx) => {
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
          discountAmount: 0,
          finalAmount,
          status: "PENDING",
          paymentStatus: "UNPAID",
        },
      });

      await tx.bookingRoom.createMany({
        data: roomSnapshots.map((rs) => ({
          bookingId: newBooking.id,
          roomId: rs.roomId,
          roomName: rs.roomName,
          pricePerNight: rs.pricePerNight,
          quantity: rs.quantity,
        })),
      });

      await tx.guestInfo.create({
        data: {
          bookingId: newBooking.id,
          fullName: data.guestInfo.fullName,
          email: data.guestInfo.email,
          phoneNumber: data.guestInfo.phone,
          specialRequests: data.guestInfo.specialRequests,
        },
      });

      await tx.bookingHistory.create({
        data: {
          bookingId: newBooking.id,
          action: "CREATED",
          note: "Khởi tạo đơn đặt phòng",
          createdBy: data.userId,
        },
      });

      return newBooking;
    });

    await rabbitMQ.publishEvent("booking.events", "booking.created", {
      bookingId: booking.id,
      hotelId: booking.hotelId,
      totalRequested,
      rooms: roomSnapshots,
    });

    return booking;
  }

  public async getMyBookings(userId: string) {
    const bookings = await prisma.booking.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        rooms: true,
        guestInfo: true,
        paymentTransaction: true
      }
    });

    // Bổ sung thông tin khách sạn từ catalog-service
    // Trong môi trường vi dịch vụ thực tế, có thể query mẻ (batch)
    const result = [];
    for (const b of bookings) {
      try {
        const res = await fetch(`${CATALOG_URL}/api/hotels/${b.hotelId}`);
        if (res.ok) {
          const json = await res.json() as any;
          result.push({ ...b, hotel: json.data });
        } else {
          result.push({ ...b, hotel: null });
        }
      } catch (e) {
        result.push({ ...b, hotel: null });
      }
    }

    return result;
  }

  public async getBookingById(bookingId: string, userId: string) {
    const booking = await prisma.booking.findFirst({
      where: { id: bookingId, userId },
      include: {
        rooms: true,
        guestInfo: true,
        paymentTransaction: true,
        histories: {
          orderBy: { createdAt: 'desc' }
        }
      }
    });

    if (!booking) {
      throw new BadRequestError("Booking not found");
    }

    try {
      const res = await fetch(`${CATALOG_URL}/api/hotels/${booking.hotelId}`);
      if (res.ok) {
        const json = await res.json() as any;
        return { ...booking, hotel: json.data };
      }
    } catch (e) {
      // ignore
    }

    return { ...booking, hotel: null };
  }

  public async cancelBookingRequest(bookingId: string, userId: string, refundInfo: { bankName: string; accountNumber: string; reason: string; imageBase64?: string }) {
    const booking = await prisma.booking.findFirst({
      where: { id: bookingId, userId },
    });

    if (!booking) {
      throw new BadRequestError("Booking not found");
    }

    if (booking.status === "CANCELLED") {
      throw new BadRequestError("Booking is already cancelled");
    }

    const updatedBooking = await prisma.$transaction(async (tx) => {
      const b = await tx.booking.update({
        where: { id: bookingId },
        data: {
          status: "CANCELLED",
          paymentStatus: booking.paymentStatus === "PAID" ? "REFUNDING" : "UNPAID",
        },
      });

      await tx.bookingHistory.create({
        data: {
          bookingId,
          action: "CANCELLED_REQUEST",
          note: `Khách yêu cầu hủy đơn. Lý do: ${refundInfo.reason}. Ngân hàng: ${refundInfo.bankName} - ${refundInfo.accountNumber}`,
          createdBy: userId,
        },
      });

      return b;
    });

    await rabbitMQ.publishEvent("booking.events", "booking.cancelled", {
      bookingId: updatedBooking.id,
      hotelId: updatedBooking.hotelId,
    });

    return updatedBooking;
  }

  public async processRefund(bookingId: string, status: "APPROVED" | "REJECTED", adminUserId?: string) {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId }
    });

    if (!booking) throw new BadRequestError("Booking not found");
    if (booking.paymentStatus !== "REFUNDING") throw new BadRequestError("Booking is not in REFUNDING state");

    const updatedBooking = await prisma.$transaction(async (tx) => {
      const b = await tx.booking.update({
        where: { id: bookingId },
        data: {
          paymentStatus: status === "APPROVED" ? "REFUNDED" : "PAID",
        }
      });

      await tx.bookingHistory.create({
        data: {
          bookingId,
          action: `REFUND_${status}`,
          note: `Admin ${status} refund request`,
          createdBy: adminUserId || "SYSTEM",
        }
      });

      return b;
    });

    return updatedBooking;
  }

  public async getInvoiceByBookingId(bookingId: string, userId: string) {
    const booking = await prisma.booking.findFirst({
      where: { id: bookingId, userId },
      include: { invoice: true, guestInfo: true, rooms: true }
    });

    if (!booking) throw new BadRequestError("Booking not found");
    if (!booking.invoice) throw new BadRequestError("Invoice not available yet");

    return booking;
  }

  public async getHotelAvailability(hotelId: string, month: number, year: number) {
    const hotel = await fetchHotel(hotelId);
    const roomTypes = await fetchRoomTypes(hotelId);
    
    const startDate = new Date(Date.UTC(year, month - 1, 1));
    const endDate = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));

    const bookings = await prisma.booking.findMany({
      where: {
        hotelId,
        status: { not: "CANCELLED" },
        checkInDate: { lt: endDate },
        checkOutDate: { gt: startDate }
      },
      include: { rooms: true }
    });

    const availability: Record<string, Record<string, { totalRequested: number, inventory: number, isAvailable: boolean }>> = {};
    const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
    
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      availability[dateStr] = {};
      for (const rt of roomTypes) {
        availability[dateStr][rt.id] = { totalRequested: 0, inventory: rt.totalInventory, isAvailable: true };
      }
    }

    for (const b of bookings) {
      const bStart = new Date(b.checkInDate);
      bStart.setUTCHours(0, 0, 0, 0);
      
      const bEnd = new Date(b.checkOutDate);
      bEnd.setUTCHours(0, 0, 0, 0);

      // They don't stay the night of checkOutDate, so bEnd - 1 day
      bEnd.setUTCDate(bEnd.getUTCDate() - 1);

      for (let d = new Date(bStart); d <= bEnd; d.setUTCDate(d.getUTCDate() + 1)) {
        if (d.getUTCMonth() + 1 === month && d.getUTCFullYear() === year) {
          const dStr = `${year}-${String(month).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
          if (availability[dStr]) {
            for (const r of b.rooms) {
              if (availability[dStr][r.roomId]) {
                availability[dStr][r.roomId].totalRequested += r.quantity;
                if (availability[dStr][r.roomId].totalRequested >= availability[dStr][r.roomId].inventory) {
                  availability[dStr][r.roomId].isAvailable = false;
                }
              }
            }
          }
        }
      }
    }
    return availability;
  }
}

export const bookingService = new BookingService();

