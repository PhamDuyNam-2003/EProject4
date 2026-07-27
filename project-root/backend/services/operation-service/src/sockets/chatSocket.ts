import { Server, Socket } from "socket.io";
import ChatParticipant from "../models/ChatParticipant.js";
import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";

export const setupChatSocket = (io: Server) => {
  io.on("connection", async (socket: Socket) => {
    const userId = socket.handshake.query.userId as string;

    if (!userId) {
      console.warn(`[Socket] Connection rejected: Missing userId in handshake`);
      socket.disconnect(true);
      return;
    }

    console.log(`[Socket] Client connected: socketId=${socket.id}, userId=${userId}`);

    try {
      await ChatParticipant.findOneAndUpdate(
        { userId },
        {
          $addToSet: { socketIds: socket.id },
          $set: { isOnline: true, lastActive: new Date() },
        },
        { upsert: true, new: true }
      );
      
      socket.broadcast.emit("user_status", { userId, isOnline: true });
    } catch (err) {
      console.error(`[Socket] Error updating participant status for ${userId}:`, err);
    }

    socket.join(`user:${userId}`);

    socket.on("join_conversation", (conversationId: string) => {
      socket.join(`room:${conversationId}`);
      console.log(`[Socket] User ${userId} joined room:${conversationId}`);
    });

    socket.on("leave_conversation", (conversationId: string) => {
      socket.leave(`room:${conversationId}`);
      console.log(`[Socket] User ${userId} left room:${conversationId}`);
    });

    socket.on("send_message", async (data: {
      conversationId: string;
      text?: string;
      type?: "text" | "attachment";
      attachments?: any[];
    }) => {
      const { conversationId, text, type, attachments } = data;

      try {
        const message = await Message.create({
          conversationId,
          senderId: userId,
          text,
          type: type || "text",
          attachments: attachments || [],
          readBy: [userId],
        });

        await Conversation.findByIdAndUpdate(conversationId, {
          lastMessage: message._id,
        });

        io.to(`room:${conversationId}`).emit("new_message", message);
        console.log(`[Socket] Message from ${userId} sent to room:${conversationId}`);
      } catch (err) {
        console.error(`[Socket] Error processing send_message:`, err);
        socket.emit("send_message_error", { error: "Failed to send message" });
      }
    });

    socket.on("read_message", async (data: { messageId: string; conversationId: string }) => {
      const { messageId, conversationId } = data;

      try {
        const message = await Message.findByIdAndUpdate(
          messageId,
          { $addToSet: { readBy: userId } },
          { new: true }
        );

        if (message) {
          io.to(`room:${conversationId}`).emit("message_read_status", {
            messageId,
            userId,
            readBy: message.readBy,
          });
        }
      } catch (err) {
        console.error(`[Socket] Error marking message ${messageId} as read:`, err);
      }
    });

    socket.on("typing", (data: { conversationId: string; isTyping: boolean }) => {
      const { conversationId, isTyping } = data;
      socket.to(`room:${conversationId}`).emit("typing_status", {
        conversationId,
        userId,
        isTyping,
      });
    });

    socket.on("disconnect", async () => {
      console.log(`[Socket] Client disconnected: socketId=${socket.id}, userId=${userId}`);

      try {
        const participant = await ChatParticipant.findOneAndUpdate(
          { userId },
          { $pull: { socketIds: socket.id } },
          { new: true }
        );

        if (participant && participant.socketIds.length === 0) {
          await ChatParticipant.updateOne(
            { userId },
            { $set: { isOnline: false, lastActive: new Date() } }
          );
          
          socket.broadcast.emit("user_status", { userId, isOnline: false });
          console.log(`[Socket] User ${userId} is now offline`);
        }
      } catch (err) {
        console.error(`[Socket] Error handling disconnect for ${userId}:`, err);
      }
    });
  });
};
