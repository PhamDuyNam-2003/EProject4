import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

export const env = {
  PORT: parseInt(process.env.PORT || "3006", 10),
  MONGO_URI: process.env.MONGO_URI || "mongodb://admin:adminpassword@mongodb:27017/operation_db?authSource=admin",
};

if (!env.MONGO_URI) {
  console.warn("[Config] WARNING: MONGO_URI is not set.");
}
