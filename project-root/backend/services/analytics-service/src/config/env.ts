import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

export const env = {
  PORT: parseInt(process.env.PORT || "3005", 10),
  DATABASE_URL: process.env.DATABASE_URL || "",
  RABBITMQ_URL: process.env.RABBITMQ_URL || "amqp://guest:guest@localhost:5672",

  // Cron schedules
  CRON_DAILY_REVENUE:   process.env.CRON_DAILY_REVENUE   || "0 2 * * *",
  CRON_MONTHLY_REVENUE: process.env.CRON_MONTHLY_REVENUE || "0 3 1 * *",
  CRON_YEARLY_REVENUE:  process.env.CRON_YEARLY_REVENUE  || "0 4 1 1 *",
  CRON_TIMEZONE:        process.env.CRON_TIMEZONE         || "Asia/Ho_Chi_Minh",
};

if (!env.DATABASE_URL) {
  console.warn("[Config] WARNING: DATABASE_URL is not set.");
}
