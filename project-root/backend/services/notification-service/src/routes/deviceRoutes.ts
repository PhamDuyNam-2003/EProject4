import { Router, Request, Response } from "express";
import { prisma } from "../infrastructure/database.js";

const router = Router();

// POST /api/v1/devices/register
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { userId, token, deviceType } = req.body;

    if (!userId || !token) {
      res.status(400).json({ error: "Missing required fields: userId, token" });
      return;
    }

    const deviceToken = await prisma.deviceToken.upsert({
      where: { token },
      update: {
        userId,
        deviceType: deviceType || null,
      },
      create: {
        userId,
        token,
        deviceType: deviceType || null,
      },
    });

    res.status(200).json({ message: "Device token registered successfully", deviceToken });
  } catch (error: any) {
    console.error("[DeviceRouter] Registration error:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST /api/v1/devices/unregister
router.post("/unregister", async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token) {
      res.status(400).json({ error: "Missing required field: token" });
      return;
    }

    await prisma.deviceToken.deleteMany({
      where: { token },
    });

    res.status(200).json({ message: "Device token unregistered successfully" });
  } catch (error: any) {
    console.error("[DeviceRouter] Unregistration error:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/v1/devices/user/:userId
router.get("/user/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const tokens = await prisma.deviceToken.findMany({
      where: { userId },
    });
    res.json(tokens);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
