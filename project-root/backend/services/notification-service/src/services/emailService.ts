import nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail";
import { env } from "../config/env.js";
import { prisma } from "../infrastructure/database.js";

export class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private isSendGridInitialized = false;

  private async getTransporter(): Promise<nodemailer.Transporter> {
    if (this.transporter) return this.transporter;

    if (env.EMAIL_PROVIDER === "mailgun") {
      console.log("[EmailService] Configuring Mailgun SMTP transport...");
      this.transporter = nodemailer.createTransport({
        host: "smtp.mailgun.org",
        port: 587,
        secure: false,
        auth: {
          user: env.SMTP_USER || `postmaster@${env.MAILGUN_DOMAIN}`,
          pass: env.MAILGUN_API_KEY || env.SMTP_PASS,
        },
      });
      return this.transporter;
    }

    // Default or fallback SMTP setup
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

  private initSendGrid(): void {
    if (this.isSendGridInitialized) return;
    if (!env.SENDGRID_API_KEY) {
      console.warn("WARNING: SendGrid selected as email provider but SENDGRID_API_KEY is missing. Falling back to SMTP.");
      env.EMAIL_PROVIDER = "smtp";
      return;
    }
    sgMail.setApiKey(env.SENDGRID_API_KEY);
    this.isSendGridInitialized = true;
    console.log("[EmailService] SendGrid initialized successfully.");
  }

  async sendEmail(to: string, subject: string, htmlContent: string): Promise<void> {
    if (env.EMAIL_PROVIDER === "sendgrid") {
      this.initSendGrid();
      // Only proceed with SendGrid if it initialized successfully, otherwise env.EMAIL_PROVIDER will have fallen back to "smtp"
      if (env.EMAIL_PROVIDER === "sendgrid") {
        try {
          console.log(`[EmailService] Sending email to ${to} via SendGrid...`);
          await sgMail.send({
            to,
            from: env.EMAIL_FROM,
            subject,
            html: htmlContent,
          });
          console.log(`[EmailService] Email sent via SendGrid successfully.`);
          return;
        } catch (error: any) {
          console.error("[EmailService] SendGrid delivery failed. Falling back to SMTP...", error?.response?.body || error);
        }
      }
    }

    // SMTP / Mailgun / Fallback Ethereal
    console.log(`[EmailService] Sending email to ${to} via SMTP/Nodemailer...`);
    const transporter = await this.getTransporter();
    const info = await transporter.sendMail({
      from: env.EMAIL_FROM,
      to,
      subject,
      html: htmlContent,
    });

    console.log(`[EmailService] Email sent successfully! MessageId: ${info.messageId}`);
    
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

    // Inject general params
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
