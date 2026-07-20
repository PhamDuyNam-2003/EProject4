import app from "./app.js";
import { env } from "./config/env.js";
import { prisma } from "./config/prisma.js";

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Connected to Database (Catalog Service)");

    app.listen(env.PORT, () => {
      console.log(`🚀 Catalog Service running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start Catalog Service:", error);
    process.exit(1);
  }
};

startServer();
