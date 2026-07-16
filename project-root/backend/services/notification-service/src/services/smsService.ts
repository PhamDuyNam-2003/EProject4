import twilio from "twilio";
import { env } from "../config/env.js";

export class SmsService {
  private twilioClient: twilio.Twilio | null = null;

  private getTwilioClient(): twilio.Twilio | null {
    if (this.twilioClient) return this.twilioClient;

    if (!env.TWILIO_ACCOUNT_SID || !env.TWILIO_AUTH_TOKEN || !env.TWILIO_PHONE_NUMBER) {
      console.warn("WARNING: Twilio credentials or phone number missing. SMS will fall back to Mock mode.");
      return null;
    }

    try {
      this.twilioClient = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);
      console.log("[SmsService] Twilio client initialized successfully.");
      return this.twilioClient;
    } catch (error) {
      console.error("[SmsService] Failed to initialize Twilio client:", error);
      return null;
    }
  }

  async sendSms(to: string, message: string): Promise<void> {
    console.log(`[SmsService] Initiating SMS delivery to: ${to}`);

    if (env.SMS_PROVIDER === "twilio") {
      const client = this.getTwilioClient();
      if (client) {
        try {
          const result = await client.messages.create({
            body: message,
            from: env.TWILIO_PHONE_NUMBER,
            to,
          });
          console.log(`[SmsService] Twilio SMS sent successfully! SID: ${result.sid}`);
          return;
        } catch (error) {
          console.error(`[SmsService] Twilio delivery failed to ${to}:`, error);
          console.log("[SmsService] Falling back to Mock mode...");
        }
      }
    }

    // Mock Delivery (Console Log)
    console.log("=========================================");
    console.log("           MOCK SMS LOG                 ");
    console.log(`To:      ${to}`);
    console.log(`Message: ${message}`);
    console.log("=========================================");
  }
}

export const smsService = new SmsService();
export default smsService;
