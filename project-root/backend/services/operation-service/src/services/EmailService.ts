import nodemailer from "nodemailer";

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER || "trollmlbbtop@gmail.com",
        pass: process.env.SMTP_PASSWORD || "tyvancwfjjzzpexv",
      },
    });
  }

  public async sendBookingConfirmation(email: string, bookingData: any) {
    const mailOptions = {
      from: `"Luxury Hotel" <${process.env.SMTP_USER || "trollmlbbtop@gmail.com"}>`,
      to: email,
      subject: "Xác nhận Đặt phòng thành công - Luxury Hotel",
      html: `
        <h2>Xin chào ${bookingData.guestName || "Quý khách"},</h2>
        <p>Cảm ơn bạn đã đặt phòng tại Luxury Hotel.</p>
        <p><strong>Mã đơn hàng:</strong> ${bookingData.bookingCode || bookingData.bookingId}</p>
        <p><strong>Số lượng phòng:</strong> ${bookingData.totalRequested || 1}</p>
        <p>Vui lòng thanh toán sớm nếu bạn chưa hoàn tất việc thanh toán để giữ chỗ.</p>
        <br/>
        <p>Trân trọng,</p>
        <p><strong>Luxury Hotel Team</strong></p>
      `,
    };

    try {
      // Bỏ comment dòng dưới để gửi email thực sự khi có account
      await this.transporter.sendMail(mailOptions);
      console.log(`[EmailService] Sent confirmation email to ${email}`);
    } catch (error) {
      console.error("[EmailService] Failed to send email:", error);
    }
  }

  public async sendPaymentSuccess(email: string, bookingData: any) {
    const mailOptions = {
      from: `"Luxury Hotel" <${process.env.SMTP_USER || "trollmlbbtop@gmail.com"}>`,
      to: email,
      subject: "Thanh toán thành công - Luxury Hotel",
      html: `
        <h2>Xin chào,</h2>
        <p>Chúng tôi đã nhận được khoản thanh toán cho đơn hàng <strong>${bookingData.bookingId}</strong>.</p>
        <p>Hóa đơn của bạn đã được xuất trên hệ thống.</p>
        <p>Chúc bạn một kỳ nghỉ tuyệt vời!</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`[EmailService] Sent payment success email to ${email}`);
    } catch (error) {
      console.error("[EmailService] Failed to send email:", error);
    }
  }
}

export const emailService = new EmailService();
