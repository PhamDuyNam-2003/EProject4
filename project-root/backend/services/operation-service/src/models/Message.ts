import mongoose, { Schema, Document } from "mongoose";

export interface IAttachment {
  fileUrl: string;
  fileType: string;
  fileName: string;
  fileSize: number;
}

export interface IMessage extends Document {
  conversationId: mongoose.Types.ObjectId;
  senderId: string;
  text?: string;
  type: "text" | "attachment";
  attachments: IAttachment[];
  readBy: string[]; // User IDs (UUIDs) who have read the message (DoD 8)
  createdAt: Date;
  updatedAt: Date;
}

const AttachmentSchema = new Schema({
  fileUrl: { type: String, required: true },
  fileType: { type: String, required: true },
  fileName: { type: String, required: true },
  fileSize: { type: Number, required: true },
});

const MessageSchema: Schema = new Schema(
  {
    conversationId: { type: Schema.Types.ObjectId, ref: "Conversation", required: true },
    senderId: { type: String, required: true },
    text: { type: String },
    type: { type: String, enum: ["text", "attachment"], default: "text" },
    attachments: { type: [AttachmentSchema], default: [] },
    readBy: { type: [String], default: [] },
  },
  { timestamps: true }
);

MessageSchema.index({ conversationId: 1, createdAt: 1 });

export const Message = mongoose.model<IMessage>("Message", MessageSchema);
export default Message;
