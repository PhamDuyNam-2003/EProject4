import { env } from "@/config/env.js";
import app from "@/app.js";
import logger from "@/utils/logger.js";

const PORT = env.PORT;
const NODE_ENV = env.NODE_ENV;

const startServer = async () => {
  try {
    const server = app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT} env ${NODE_ENV}`);
    });

    process.on("SIGINT", async () => {
      logger.info("Đang tắt Server...");

      try {
        server.close(async () => {
          logger.info("HTTP Server đã đóng.");
          process.exit(0);
        });
      } catch (error) {
        logger.error("Lỗi khi shutdown:", error);
        process.exit(1);
      }
    });
  } catch (error) {
    logger.error("Lỗi khởi động Server:", error);
    process.exit(1);
  }
};


void startServer();
