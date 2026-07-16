import { Request, Response } from "express";
import { asyncHandler } from "@/utils/asyncHandler.js";
import { bookingService } from "./BookingService.js";
import { successResponse } from "@/utils/response.js";

export class BookingController {
  public createBooking = asyncHandler(async (req: Request, res: Response) => {
    // In a real app, userId should come from req.user (after auth middleware)
    const userId = req.user?.id || "00000000-0000-0000-0000-000000000000"; 
    const { hotelId, checkInDate, checkOutDate, rooms, guestInfo } = req.body;

    const booking = await bookingService.createBooking({
      userId,
      hotelId,
      checkInDate,
      checkOutDate,
      rooms,
      guestInfo
    });

    successResponse(res, 201, "Booking created successfully", booking);
  });
}

export const bookingController = new BookingController();
