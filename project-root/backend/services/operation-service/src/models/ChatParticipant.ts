import mongoose, { Schema, Document } from "mongoose";

export interface IChatParticipant extends Document {
  userId: string; // User ID (UUID)
  isOnline: boolean;
  lastActive: Date;
  socketIds: string[]; // Active socket connections
  createdAt: Date;
  updatedAt: Date;
}

const ChatParticipantSchema: Schema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    isOnline: { type: Boolean, default: false },
    lastActive: { type: Date, default: Date.now },
    socketIds: { type: [String], default: [] },
  },
  { timestamps: true }
);

ChatParticipantSchema.index({ isOnline: 1 });

export const ChatParticipant = mongoose.model<IChatParticipant>("ChatParticipant", ChatParticipantSchema);
export default ChatParticipant;
