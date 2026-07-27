import { Router, Request, Response } from "express";
import { prisma } from "../infrastructure/database.js";

const router = Router();

// ─── Validate UUID helper ────────────────────────────────────────────────────
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const isValidUUID = (id: string) => UUID_REGEX.test(id);

// ─── POST /api/v1/devices/register ───────────────────────────────────────────
// Đăng ký hoặc cập nhật device token của user
router.post("/register", async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId as string;
    const token = req.body.token as string;
    const deviceType = req.body.deviceType as string;

    if (!userId || !token) {
      res.status(400).json({ error: "Missing required fields: userId, token" });
      return;
    }
    if (!isValidUUID(userId)) {
      res.status(400).json({ error: "Invalid userId format (must be UUID)" });
      return;
    }

    const deviceToken = await prisma.deviceToken.upsert({
      where: { token },
      update: {
        userId,
        deviceType: deviceType || null,
        isActive: true,
        lastUsedAt: new Date(),
      },
      create: {
        userId,
        token,
        deviceType: deviceType || null,
        isActive: true,
        lastUsedAt: new Date(),
      },
    });

    res.status(200).json({ message: "Device token registered successfully", deviceToken });
  } catch (error: any) {
    console.error("[DeviceRouter] Registration error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─── POST /api/v1/devices/unregister ─────────────────────────────────────────
// Hủy đăng ký (xóa) device token theo token string
router.post("/unregister", async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token) {
      res.status(400).json({ error: "Missing required field: token" });
      return;
    }

    await prisma.deviceToken.deleteMany({ where: { token } });
    res.status(200).json({ message: "Device token unregistered successfully" });
  } catch (error: any) {
    console.error("[DeviceRouter] Unregistration error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─── GET /api/v1/devices/user/:userId ────────────────────────────────────────
// Lấy tất cả device token của 1 user
router.get("/user/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;
    if (!isValidUUID(userId)) {
      res.status(400).json({ error: "Invalid userId format (must be UUID)" });
      return;
    }

    const onlyActive = req.query.active !== "false"; // mặc định chỉ lấy active
    const tokens = await prisma.deviceToken.findMany({
      where: { userId, ...(onlyActive ? { isActive: true } : {}) },
      orderBy: { lastUsedAt: "desc" },
    });

    res.json(tokens);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ─── PATCH /api/v1/devices/:id/deactivate ────────────────────────────────────
// Vô hiệu hóa 1 device token (không xóa, chỉ tắt)
router.patch("/:id/deactivate", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!isValidUUID(id)) {
      res.status(400).json({ error: "Invalid device token id format (must be UUID)" });
      return;
    }

    const existing = await prisma.deviceToken.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ error: "Device token not found" });
      return;
    }

    const updated = await prisma.deviceToken.update({
      where: { id },
      data: { isActive: false },
    });

    res.json({ message: "Device token deactivated", deviceToken: updated });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ─── DELETE /api/v1/devices/:id ──────────────────────────────────────────────
// Xóa 1 device token theo ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!isValidUUID(id)) {
      res.status(400).json({ error: "Invalid device token id format (must be UUID)" });
      return;
    }

    const existing = await prisma.deviceToken.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ error: "Device token not found" });
      return;
    }

    await prisma.deviceToken.delete({ where: { id } });
    res.json({ message: "Device token deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
