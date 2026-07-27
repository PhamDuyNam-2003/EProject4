import { Router, Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Message from "../models/Message.js";

const router = Router();

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

router.get("/:conversationId/messages", async (req: Request, res: Response) => {
  try {
    const { conversationId } = req.params;
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 30));
    const skip = (page - 1) * limit;

    const [messages, total] = await Promise.all([
      Message.find({ conversationId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Message.countDocuments({ conversationId }),
    ]);

    res.json({
      data: messages.reverse(),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/upload", upload.single("file"), async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    const fileUrl = `/uploads/${file.filename}`;

    res.status(201).json({
      fileUrl,
      fileType: file.mimetype,
      fileName: file.originalname,
      fileSize: file.size,
    });
  } catch (error: any) {
    console.error("[MessageRoutes] Upload error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
