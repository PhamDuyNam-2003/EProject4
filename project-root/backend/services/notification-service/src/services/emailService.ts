import nodemailer from "nodemailer";
import { env } from "../config/env.js";
import { prisma } from "../infrastructure/database.js";

export class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  private async getTransporter(): Promise<nodemailer.Transporter> {
    if (this.transporter) return this.transporter;

    // If SMTP credentials are not fully configured, auto-generate Ethereal Email test credentials
    if (!env.SMTP_USER || !env.SMTP_PASS) {
      console.log("[EmailService] SMTP credentials not provided. Generating Ethereal test account...");
      try {
        const testAccount = await nodemailer.createTestAccount();
        this.transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });
        console.log(`[EmailService] Ethereal account generated: User: ${testAccount.user}`);
      } catch (error) {
        console.error("[EmailService] Failed to generate Ethereal test account, falling back to mock transporter", error);
        // Fallback mock transporter that logs instead of throwing
        this.transporter = {
          sendMail: async (options: any) => {
            console.log("=== MOCK EMAIL SENT ===");
            console.log(`To: ${options.to}`);
            console.log(`Subject: ${options.subject}`);
            console.log(`Body Length: ${options.html.length} chars`);
            console.log("=======================");
            return { messageId: "mock-id" };
          }
        } as any;
      }
    } else {
      this.transporter = nodemailer.createTransport({
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        secure: env.SMTP_PORT === 465,
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASS,
        },
      });
    }

    return this.transporter!;
  }

  async sendEmail(to: string, subject: string, htmlContent: string): Promise<void> {
    const transporter = await this.getTransporter();
    const info = await transporter.sendMail({
      from: env.EMAIL_FROM,
      to,
      subject,
      html: htmlContent,
    });

    console.log(`[EmailService] Email sent successfully! MessageId: ${info.messageId}`);
    
    // Log the Ethereal URL if using a test account so developers can preview it
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`[EmailService] Preview URL: ${previewUrl}`);
    }
  }

  async sendTemplateEmail(
    to: string,
    templateCode: string,
    params: Record<string, string>
  ): Promise<void> {
    console.log(`[EmailService] Processing template email for code: ${templateCode}`);
    
    const template = await prisma.notificationTemplate.findUnique({
      where: { code: templateCode },
    });

    if (!template) {
      throw new Error(`Notification template for code '${templateCode}' not found in database.`);
    }

    // Compile template by replacing {{variable}} placeholders in subject and body
    let subject = template.subject;
    let body = template.body;

    for (const [key, value] of Object.entries(params)) {
      const placeholder = new RegExp(`{{${key}}}`, "g");
      subject = subject.replace(placeholder, value || "");
      body = body.replace(placeholder, value || "");
    }

    // Also inject some general params if they aren't provided
    const generalParams = {
      bookingUrl: params.bookingUrl || `http://localhost:3000/bookings/${params.bookingId || ""}`,
    };

    for (const [key, value] of Object.entries(generalParams)) {
      const placeholder = new RegExp(`{{${key}}}`, "g");
      body = body.replace(placeholder, value);
    }

    await this.sendEmail(to, subject, body);
  }
}

export const emailService = new EmailService();
export default emailService;
