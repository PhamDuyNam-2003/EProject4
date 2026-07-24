import { Request, Response } from "express";
import { asyncHandler } from "@/utils/asyncHandler.js";
import { bookingService } from "./BookingService.js";
import { successResponse } from "@/utils/response.js";
import { UnauthorizedError } from "@/utils/errors/errorCustomize.js";

export class BookingController {
  public createBooking = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user?.userId) {
      throw new UnauthorizedError("Bạn chưa đăng nhập");
    }
    const userId = req.user.userId;
    const { hotelId, checkInDate, checkOutDate, rooms, guestInfo } = req.body;

    try {
      const booking = await bookingService.createBooking({
        userId,
        hotelId,
        checkInDate,
        checkOutDate,
        rooms,
        guestInfo
      });

      successResponse(res, 201, "Booking created successfully", booking);
    } catch (error) {
      console.error("CREATE BOOKING ERROR:", error);
      throw error;
    }
  });
  public getMyBookings = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user?.userId) throw new UnauthorizedError("Bạn chưa đăng nhập");
    const bookings = await bookingService.getMyBookings(req.user.userId);
    successResponse(res, 200, "Lấy danh sách đơn thành công", bookings);
  });

  public getBookingById = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user?.userId) throw new UnauthorizedError("Bạn chưa đăng nhập");
    const booking = await bookingService.getBookingById(req.params.id, req.user.userId);
    successResponse(res, 200, "Lấy chi tiết đơn thành công", booking);
  });

  public cancelBookingRequest = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user?.userId) throw new UnauthorizedError("Bạn chưa đăng nhập");
    const { bankName, accountNumber, reason, imageBase64 } = req.body;
    const booking = await bookingService.cancelBookingRequest(req.params.id, req.user.userId, {
      bankName,
      accountNumber,
      reason,
      imageBase64
    });
    successResponse(res, 200, "Yêu cầu hủy đơn thành công", booking);
  });

  public processRefund = asyncHandler(async (req: Request, res: Response) => {
    // In real app, check if req.user is ADMIN
    const { status } = req.body; // APPROVED or REJECTED
    const booking = await bookingService.processRefund(req.params.id, status, req.user?.userId);
    successResponse(res, 200, `Đã xử lý hoàn tiền: ${status}`, booking);
  });

  public getInvoice = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user?.userId) throw new UnauthorizedError("Bạn chưa đăng nhập");
    const bookingWithInvoice = await bookingService.getInvoiceByBookingId(req.params.id, req.user.userId);
    successResponse(res, 200, "Lấy hóa đơn thành công", bookingWithInvoice);
  });

  public getHotelAvailability = asyncHandler(async (req: Request, res: Response) => {
    const hotelId = req.params.hotelId;
    const month = parseInt(req.query.month as string) || new Date().getMonth() + 1;
    const year = parseInt(req.query.year as string) || new Date().getFullYear();
    
    const availability = await bookingService.getHotelAvailability(hotelId, month, year);
    successResponse(res, 200, "Lấy trạng thái phòng thành công", availability);
  });
}

export const bookingController = new BookingController();
