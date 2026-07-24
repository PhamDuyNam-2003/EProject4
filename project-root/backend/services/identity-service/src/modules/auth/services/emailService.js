import { BadRequestError } from "@/utils/errors/errorCustomize";
import logger from "@/utils/logger";
import { getOtpEmailTemplate } from "@/modules/auth/templates/otpTemplate";
import { emailConfig } from "@/config/email";
export class EmailService {
    transporter;
    constructor(transporter) {
        this.transporter = transporter;
    }
    async sendEmail(to, subject, htmlContent) {
        try {
            await this.transporter.sendMail({
                from: emailConfig.defaultSender,
                to,
                subject,
                html: htmlContent,
            });
            logger.info(`Đã gửi email tới ${to}`);
        }
        catch (error) {
            logger.error(`Lỗi khi gửi email tới ${to}:`, error);
            throw new BadRequestError("Không thể gửi email lúc này vui lòng kiểm tra lại cấu hình SMTP");
        }
    }
    async sendOtpEmail(to, otpCode) {
        const subject = "Mã xác thực OTP - NestBooking";
        const htmlContent = getOtpEmailTemplate(otpCode);
        await this.sendEmail(to, subject, htmlContent);
    }
}
