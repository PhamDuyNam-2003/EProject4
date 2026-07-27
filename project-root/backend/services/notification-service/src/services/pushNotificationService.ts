import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { env } from "../config/env.js";
import { prisma } from "../infrastructure/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class PushNotificationService {
  private isFirebaseInitialized = false;

  private initializeFirebase(): boolean {
    if (this.isFirebaseInitialized) return true;

    // Check if service account JSON exists
    const certPath = path.isAbsolute(env.FIREBASE_CREDENTIALS_PATH)
      ? env.FIREBASE_CREDENTIALS_PATH
      : path.join(__dirname, "..", "..", env.FIREBASE_CREDENTIALS_PATH);

    if (!fs.existsSync(certPath)) {
      console.warn(`WARNING: Firebase credentials file not found at: ${certPath}. Push notifications will fall back to Mock mode.`);
      return false;
    }

    try {
      const serviceAccount = JSON.parse(fs.readFileSync(certPath, "utf8"));
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      this.isFirebaseInitialized = true;
      console.log("[PushNotificationService] Firebase Admin SDK initialized successfully.");
      return true;
    } catch (error) {
      console.error("[PushNotificationService] Failed to initialize Firebase Admin SDK:", error);
      return false;
    }
  }

  async sendPushNotification(
    tokens: string[],
    title: string,
    body: string,
    data?: Record<string, string>
  ): Promise<void> {
    if (!tokens || tokens.length === 0) {
      console.log("[PushNotificationService] No tokens provided. Skipping push notification.");
      return;
    }

    console.log(`[PushNotificationService] Initiating push notification to ${tokens.length} devices.`);

    const isInitialized = this.initializeFirebase();
    if (isInitialized) {
      try {
        const message: admin.messaging.MulticastMessage = {
          tokens,
          notification: { title, body },
          data,
        };

        const response = await admin.messaging().sendEachForMulticast(message);
        console.log(`[PushNotificationService] Push notification processed. Success: ${response.successCount}, Failure: ${response.failureCount}`);
        
        // Optionally cleanup invalid tokens
        if (response.failureCount > 0) {
          const tokensToRemove: string[] = [];
          response.responses.forEach((resp, idx) => {
            if (!resp.success && resp.error) {
              const code = resp.error.code;
              // Clean up tokens that are no longer registered or valid
              if (
                code === "messaging/invalid-registration-token" ||
                code === "messaging/registration-token-not-registered"
              ) {
                tokensToRemove.push(tokens[idx]);
              }
            }
          });

          if (tokensToRemove.length > 0) {
            console.log(`[PushNotificationService] Cleaning up ${tokensToRemove.length} inactive device tokens from database...`);
            await prisma.deviceToken.deleteMany({
              where: { token: { in: tokensToRemove } },
            });
          }
        }
        return;
      } catch (error) {
        console.error("[PushNotificationService] Firebase push delivery failed:", error);
        console.log("[PushNotificationService] Falling back to Mock mode...");
      }
    }

    // Mock Delivery (Console Log)
    console.log("=========================================");
    console.log("       MOCK PUSH NOTIFICATION LOG       ");
    console.log(`Title:   ${title}`);
    console.log(`Body:    ${body}`);
    console.log(`Data:    ${JSON.stringify(data || {})}`);
    console.log(`Tokens (${tokens.length}):`);
    tokens.forEach((token, index) => console.log(`  [${index}] ${token}`));
    console.log("=========================================");
  }

  async sendPushToUser(
    userId: string,
    title: string,
    body: string,
    data?: Record<string, string>
  ): Promise<void> {
    console.log(`[PushNotificationService] Fetching device tokens for user: ${userId}`);

    const deviceTokens = await prisma.deviceToken.findMany({
      where: { userId },
      select: { token: true },
    });

    const tokens = deviceTokens.map((dt) => dt.token);
    if (tokens.length === 0) {
      console.log(`[PushNotificationService] User ${userId} has no registered device tokens. Push skipped.`);
      return;
    }

    await this.sendPushNotification(tokens, title, body, data);
  }
}

export const pushNotificationService = new PushNotificationService();
export default pushNotificationService;
