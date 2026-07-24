import crypto from "crypto";
import qs from "qs";
import moment from "moment";
import { env } from "@/config/env.js";
import { prisma } from "@/config/prisma.js";
import { BadRequestError, NotFoundError } from "@/utils/errors/errorCustomize.js";
import { rabbitMQ } from "@/infrastructure/rabbitmq/index.js";

export class PaymentService {
  /**
   * Tạo URL thanh toán VNPay
   */
  public async createVNPayUrl(bookingId: string, ipAddr: string): Promise<string> {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId }
    });

    if (!booking) throw new NotFoundError("Booking not found");
    if (booking.paymentStatus === "PAID") throw new BadRequestError("Booking already paid");

    const tmnCode = env.VNPAY_TMN_CODE || "TMNCODE";
    const secretKey = env.VNPAY_HASH_SECRET || "SECRET";
    const vnpUrl = env.VNPAY_URL || "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
    const returnUrl = env.VNPAY_RETURN_URL || "http://localhost:3002/api/payment/vnpay/return";

    const date = new Date();
    const createDate = moment(date).format("YYYYMMDDHHmmss");
    const orderId = moment(date).format("DDHHmmss");
    // Tỷ giá giả định 1 USD = 25,000 VND. VNPay yêu cầu nhân thêm 100.
    const finalAmountNum = typeof booking.finalAmount === 'number' ? booking.finalAmount : Number(booking.finalAmount.toString());
    const amount = Math.round(finalAmountNum * 25000 * 100);

    let vnp_Params: Record<string, string | number> = {
      vnp_Version: "2.1.0",
      vnp_Command: "pay",
      vnp_TmnCode: tmnCode,
      vnp_Locale: "vn",
      vnp_CurrCode: "VND",
      vnp_TxnRef: orderId,
      vnp_OrderInfo: `Thanh toan don dat phong ${booking.bookingCode}`,
      vnp_OrderType: "other",
      vnp_Amount: amount,
      vnp_ReturnUrl: returnUrl,
      vnp_IpAddr: ipAddr,
      vnp_CreateDate: createDate,
    };

    vnp_Params = this.sortObject(vnp_Params);

    const signData = qs.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");
    vnp_Params.vnp_SecureHash = signed;

    const paymentUrl = vnpUrl + "?" + qs.stringify(vnp_Params, { encode: false });

    // Lưu transaction pending
    await prisma.paymentTransaction.upsert({
      where: { bookingId: booking.id },
      update: {
        transactionId: orderId,
        provider: "VNPAY",
        amount: booking.finalAmount,
        status: "PENDING"
      },
      create: {
        bookingId: booking.id,
        transactionId: orderId, // Lưu mã giao dịch gốc
        provider: "VNPAY",
        amount: booking.finalAmount,
        status: "PENDING"
      }
    });

    return paymentUrl;
  }

  /**
   * Xử lý VNPay Return
   */
  public async handleVNPayReturn(vnp_Params: any) {
    const secureHash = vnp_Params.vnp_SecureHash;
    delete vnp_Params.vnp_SecureHash;
    delete vnp_Params.vnp_SecureHashType;

    vnp_Params = this.sortObject(vnp_Params);

    const secretKey = env.VNPAY_HASH_SECRET || "SECRET";
    const signData = qs.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");

    if (secureHash !== signed) {
      throw new BadRequestError("Invalid signature");
    }

    const orderId = vnp_Params.vnp_TxnRef;
    const responseCode = vnp_Params.vnp_ResponseCode;

    const transaction = await prisma.paymentTransaction.findFirst({
      where: { transactionId: orderId, provider: "VNPAY" },
      include: { booking: true }
    });

    if (!transaction) throw new NotFoundError("Transaction not found");

    if (responseCode === "00") {
      // Cập nhật thành công
      await prisma.$transaction(async (tx) => {
        await tx.paymentTransaction.update({
          where: { id: transaction.id },
          data: { status: "SUCCESS", rawData: vnp_Params }
        });

        await tx.booking.update({
          where: { id: transaction.bookingId },
          data: {
            paymentStatus: "PAID",
            status: "CONFIRMED"
          }
        });

        await tx.bookingHistory.create({
          data: {
            bookingId: transaction.bookingId,
            action: "PAYMENT_SUCCESS",
            note: "Thanh toán VNPay thành công"
          }
        });

        // Tự động tạo Invoice
        await tx.invoice.create({
          data: {
            bookingId: transaction.bookingId,
            invoiceNumber: `INV${Date.now()}`,
          }
        });
      });

      // 4. Publish event PaymentSuccess to RabbitMQ
      await rabbitMQ.publishEvent("booking.events", "booking.paid", {
        bookingId: transaction.bookingId,
        transactionId: transaction.id
      });

      return { success: true, bookingId: transaction.bookingId };
    } else {
      // Cập nhật thất bại
      await prisma.$transaction(async (tx) => {
        await tx.paymentTransaction.update({
          where: { id: transaction.id },
          data: { status: "FAILED", rawData: vnp_Params }
        });

        await tx.booking.update({
          where: { id: transaction.bookingId },
          data: { status: "CANCELLED" }
        });
      });
      
      return { success: false, bookingId: transaction.bookingId };
    }
  }

  private sortObject(obj: Record<string, any>) {
    const sorted: Record<string, any> = {};
    const keys = Object.keys(obj).sort();
    for (const key of keys) {
      sorted[key] = encodeURIComponent(String(obj[key])).replace(/%20/g, "+");
    }
    return sorted;
  }
}

export const paymentService = new PaymentService();
