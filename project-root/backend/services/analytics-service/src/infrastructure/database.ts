import { PrismaClient } from "../../generated/prisma/index.js";

export const prisma = new PrismaClient({
  log: ["info", "warn", "error"],
});

export default prisma;
