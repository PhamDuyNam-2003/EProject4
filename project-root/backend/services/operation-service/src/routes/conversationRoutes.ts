import { Router, Request, Response } from "express";
import Conversation from "../models/Conversation.js";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { participants, type, department } = req.body;

    if (!participants || !Array.isArray(participants) || participants.length === 0) {
      res.status(400).json({ error: "Participants array is required" });
      return;
    }

    if (type !== "department") {
      const existing = await Conversation.findOne({
        type: "direct",
        participants: { $all: participants, $size: participants.length },
      }).populate("lastMessage");

      if (existing) {
        res.json(existing);
        return;
      }
    } else {
      if (!department) {
        res.status(400).json({ error: "Department is required for department-scoped chats" });
        return;
      }
      const existing = await Conversation.findOne({
        type: "department",
        department,
        participants: { $in: participants },
      }).populate("lastMessage");

      if (existing) {
        res.json(existing);
        return;
      }
    }

    const conversation = await Conversation.create({
      participants,
      type: type || "direct",
      department: type === "department" ? department : undefined,
    });

    res.status(201).json(conversation);
  } catch (error: any) {
    console.error("[ConversationRoutes] Create error:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/user/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const conversations = await Conversation.find({
      participants: userId,
    })
      .populate("lastMessage")
      .sort({ updatedAt: -1 });

    res.json(conversations);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
