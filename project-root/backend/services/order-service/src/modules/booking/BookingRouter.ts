import { Router } from "express";
import { bookingController } from "./BookingController.js";

const router = Router();

router.post("/", bookingController.createBooking);

export default router;
