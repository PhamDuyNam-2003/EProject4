import { Router } from "express";
import { paymentController } from "./PaymentController.js";

const router = Router();

router.post("/vnpay/create-url", paymentController.createPaymentUrl);
router.get("/vnpay/return", paymentController.vnpayReturn);

export default router;
