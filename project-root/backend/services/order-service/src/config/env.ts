import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev",
});

export const env = {
  DATABASE_URL: process.env.DATABASE_URL!,
};