import { IOtpService } from "@/modules/auth/interfaces/IOtpService";
import { env } from "@/config/env";
const OTP_TTL = Number(env.OTP_TTL);

import { REDIS_KEYS, redisClient } from "@/infrastructure/redis";
import { EmailService } from "@/modules/auth/services/emailService";
import { Transporter } from "@/config/transporter";
import crypto from "crypto";
import logger from "@/utils/logger";

if (Number.isNaN(OTP_TTL)) {
  throw new Error("OTP_TTL không hợp lệ");
}

export class OtpService implements IOtpService {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService(Transporter.transporter);
  }

  private generateOtp(): string {
    return crypto.randomInt(100000, 1000000).toString();
  }

  async generateAndSendOtp(email: string): Promise<void> {
    const otp = this.generateOtp();

    await redisClient.setex(REDIS_KEYS.OTP(email), OTP_TTL, otp);

    this.emailService.sendOtpEmail(email, otp).catch((err) => {
      logger.error(`Lỗi gửi email bất đồng bộ tới ${email}:`, err);
    });
  }

  async verifyOtp(email: string, otp: string): Promise<boolean> {
    const key = REDIS_KEYS.OTP(email);

    const storedOtp = await redisClient.get(key);

    if (!storedOtp) {
      return false;
    }

    if (storedOtp !== otp) {
      return false;
    }
    await redisClient.del(key);

    return true;
  }
}
