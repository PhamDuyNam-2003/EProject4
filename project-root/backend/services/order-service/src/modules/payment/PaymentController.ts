import { Request, Response } from "express";
import { asyncHandler } from "@/utils/asyncHandler.js";
import { paymentService } from "./PaymentService.js";
import { successResponse } from "@/utils/response.js";
import { env } from "@/config/env.js";

export class PaymentController {
  public createPaymentUrl = asyncHandler(async (req: Request, res: Response) => {
    const { bookingId } = req.body;
    
    // Fallback if IP address is not available
    const ipAddr = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "127.0.0.1";
    
    const url = await paymentService.createVNPayUrl(bookingId, ipAddr as string);

    successResponse(res, 200, "Payment URL generated", { paymentUrl: url });
  });

  public vnpayReturn = asyncHandler(async (req: Request, res: Response) => {
    const result = await paymentService.handleVNPayReturn(req.query);

    // Ở môi trường thực tế, sau khi xử lý return, chúng ta thường redirect về trang Frontend.
    // Tạm thời trả về JSON
    successResponse(res, 200, "Payment return processed", result);
  });
}

export const paymentController = new PaymentController();
