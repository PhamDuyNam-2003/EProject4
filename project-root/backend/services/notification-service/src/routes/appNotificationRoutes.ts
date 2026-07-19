import { Router, Request, Response } from "express";
import { prisma } from "../infrastructure/database.js";

const router = Router();

// ─── Validate UUID helper ────────────────────────────────────────────────────
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const isValidUUID = (id: string) => UUID_REGEX.test(id);

// ─── GET /api/v1/app-notifications/user/:userId ──────────────────────────────
// Lấy danh sách thông báo trong app của 1 user (có phân trang)
router.get("/user/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;
    if (!isValidUUID(userId)) {
      res.status(400).json({ error: "Invalid userId format (must be UUID)" });
      return;
    }

    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
    const skip = (page - 1) * limit;
    const onlyUnread = req.query.unread === "true";

    const where = {
      userId,
      ...(onlyUnread ? { isRead: false } : {}),
    };

    const [notifications, total] = await Promise.all([
      prisma.appNotification.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.appNotification.count({ where }),
    ]);

    res.json({
      data: notifications,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error("[AppNotification] Error fetching notifications:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─── GET /api/v1/app-notifications/user/:userId/unread-count ─────────────────
// Đếm số thông báo chưa đọc của 1 user
router.get("/user/:userId/unread-count", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;
    if (!isValidUUID(userId)) {
      res.status(400).json({ error: "Invalid userId format (must be UUID)" });
      return;
    }

    const count = await prisma.appNotification.count({
      where: { userId, isRead: false },
    });

    res.json({ userId, unreadCount: count });
  } catch (error: any) {
    console.error("[AppNotification] Error counting unread:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─── PATCH /api/v1/app-notifications/:id/read ────────────────────────────────
// Đánh dấu 1 thông báo đã đọc
router.patch("/:id/read", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!isValidUUID(id)) {
      res.status(400).json({ error: "Invalid notification id format (must be UUID)" });
      return;
    }

    const notification = await prisma.appNotification.findUnique({ where: { id } });
    if (!notification) {
      res.status(404).json({ error: "Notification not found" });
      return;
    }

    const updated = await prisma.appNotification.update({
      where: { id },
      data: { isRead: true },
    });

    res.json({ message: "Notification marked as read", notification: updated });
  } catch (error: any) {
    console.error("[AppNotification] Error marking as read:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─── PATCH /api/v1/app-notifications/read-all ────────────────────────────────
// Đánh dấu tất cả thông báo của 1 user là đã đọc
router.patch("/read-all", async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId as string;
    if (!userId) {
      res.status(400).json({ error: "Missing required field: userId" });
      return;
    }
    if (!isValidUUID(userId)) {
      res.status(400).json({ error: "Invalid userId format (must be UUID)" });
      return;
    }

    const result = await prisma.appNotification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });

    res.json({ message: `Marked ${result.count} notifications as read`, count: result.count });
  } catch (error: any) {
    console.error("[AppNotification] Error marking all as read:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─── DELETE /api/v1/app-notifications/:id ────────────────────────────────────
// Xóa 1 thông báo theo ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!isValidUUID(id)) {
      res.status(400).json({ error: "Invalid notification id format (must be UUID)" });
      return;
    }

    const notification = await prisma.appNotification.findUnique({ where: { id } });
    if (!notification) {
      res.status(404).json({ error: "Notification not found" });
      return;
    }

    await prisma.appNotification.delete({ where: { id } });
    res.json({ message: "Notification deleted successfully" });
  } catch (error: any) {
    console.error("[AppNotification] Error deleting notification:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─── DELETE /api/v1/app-notifications/user/:userId ───────────────────────────
// Xóa tất cả thông báo của 1 user
router.delete("/user/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;
    if (!isValidUUID(userId)) {
      res.status(400).json({ error: "Invalid userId format (must be UUID)" });
      return;
    }

    const result = await prisma.appNotification.deleteMany({ where: { userId } });
    res.json({ message: `Deleted ${result.count} notifications for user ${userId}`, count: result.count });
  } catch (error: any) {
    console.error("[AppNotification] Error deleting all notifications for user:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
