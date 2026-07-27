import mongoose, { Schema, Document } from "mongoose";

export interface IConversation extends Document {
  participants: string[]; // User IDs (UUIDs)
  type: "direct" | "department";
  department?: string; // "receptionist" | "cskh" (DoD 9)
  lastMessage?: string; // Message ID
  createdAt: Date;
  updatedAt: Date;
}

const ConversationSchema: Schema = new Schema(
  {
    participants: { type: [String], required: true },
    type: { type: String, enum: ["direct", "department"], default: "direct" },
    department: { type: String },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" },
  },
  { timestamps: true }
);

// Index participants for fast query
ConversationSchema.index({ participants: 1 });

export const Conversation = mongoose.model<IConversation>("Conversation", ConversationSchema);
export default Conversation;
