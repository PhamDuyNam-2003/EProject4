import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

export const env = {
  PORT: parseInt(process.env.PORT || "3004", 10),
  DATABASE_URL: process.env.DATABASE_URL || "",
  RABBITMQ_URL: process.env.RABBITMQ_URL || "amqp://guest:guest@localhost:5672",
  
  // Email config
  EMAIL_PROVIDER: (process.env.EMAIL_PROVIDER || "smtp").toLowerCase(),
  SMTP_HOST: process.env.SMTP_HOST || "smtp.ethereal.email",
  SMTP_PORT: parseInt(process.env.SMTP_PORT || "587", 10),
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASS: process.env.SMTP_PASS || "",
  EMAIL_FROM: process.env.EMAIL_FROM || "NestBooking <noreply@nestbooking.com>",
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || "",
  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY || "",
  MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN || "",

  // SMS config
  SMS_PROVIDER: (process.env.SMS_PROVIDER || "mock").toLowerCase(),
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || "",
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || "",
  TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER || "",

  // Push Notifications config
  FIREBASE_CREDENTIALS_PATH: process.env.FIREBASE_CREDENTIALS_PATH || "firebase-service-account.json",
};

if (!env.DATABASE_URL) {
  console.warn("WARNING: DATABASE_URL is not set. Database operations will fail.");
}
