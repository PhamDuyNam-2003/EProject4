import Redis from "ioredis";
import logger from "@/utils/logger";
import { env } from "@/config/env";
const REDIS_HOST = env.REDIS_HOST;
const REDIS_PORT = env.REDIS_PORT;
export class RedisConnection {
    client;
    constructor() {
        this.client = new Redis({
            host: REDIS_HOST || "127.0.0.1",
            port: REDIS_PORT || 6379,
        });
        this.client.on("connect", () => {
            logger.info("[Redis] Kết nối thành công tới Redis server");
        });
        this.client.on("error", (error) => {
            logger.error("[Redis] Lỗi kết nối Redis:", error);
        });
    }
    getClient() {
        return this.client;
    }
    async disconnect() {
        await this.client.quit();
        logger.info("[Redis] Đã đóng kết nối Redis");
    }
}
export const redisConnection = new RedisConnection();
export const redisClient = redisConnection.getClient();
