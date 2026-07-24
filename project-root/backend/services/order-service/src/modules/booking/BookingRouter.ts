import { Router } from "express";
import { bookingController } from "./BookingController.js";
import { authMiddleware } from "@/middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, bookingController.createBooking);
router.get("/", authMiddleware, bookingController.getMyBookings);
router.get("/:id", authMiddleware, bookingController.getBookingById);
router.post("/:id/cancel-request", authMiddleware, bookingController.cancelBookingRequest);
router.post("/:id/process-refund", authMiddleware, bookingController.processRefund);
router.get("/:id/invoice", authMiddleware, bookingController.getInvoice);

// This does not require authMiddleware so anyone can see availability
router.get("/hotel/:hotelId/availability", bookingController.getHotelAvailability);

export default router;
