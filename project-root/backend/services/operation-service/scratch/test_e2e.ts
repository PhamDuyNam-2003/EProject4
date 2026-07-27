import { io as ClientIO } from "socket.io-client";
import mongoose from "mongoose";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";

const MONGO_URI = "mongodb://admin:adminpassword@localhost:27017/operation_db?authSource=admin";
const SOCKET_URL = "http://localhost:3006";
const API_URL = "http://localhost:3006/api/v1";

const userA = "a7b3c9d2-e5f8-4b2a-ae7b-ff23456789ab";
const userB = "b7b3c9d2-e5f8-4b2a-ae7b-ff23456789ab";

async function main() {
  console.log("=== STARTING REAL-TIME CHAT INTEGRATION TEST ===");

  // 1. Connect MongoDB directly for validation
  console.log(`[Test] Connecting MongoDB: ${MONGO_URI}`);
  await mongoose.connect(MONGO_URI);
  console.log("[Test] MongoDB connected successfully.");

  // 2. Connect User A via WebSocket
  console.log(`[Test] Connecting User A via Socket.io...`);
  const socketA = ClientIO(SOCKET_URL, {
    query: { userId: userA },
    transports: ["websocket"],
  });

  await new Promise<void>((resolve, reject) => {
    socketA.on("connect", () => {
      console.log(`[Test] User A connected via WebSocket. SocketID: ${socketA.id}`);
      resolve();
    });
    socketA.on("connect_error", (err) => {
      reject(err);
    });
  });

  // Chờ database cập nhật trạng thái
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Verify User A online status in MongoDB
  const participantA = await mongoose.connection.db?.collection("chatparticipants").findOne({ userId: userA });
  console.log(`[Test] ChatParticipant A in DB:`, participantA);

  if (!participantA || !participantA.isOnline) {
    throw new Error("User A should be marked online in database!");
  }
  console.log("[Test] DoD 7 (Online status) -> PASSED ✅");

  // 3. Create a conversation via REST API
  console.log(`[Test] Creating conversation between User A and User B...`);
  const convRes = await axios.post(`${API_URL}/conversations`, {
    participants: [userA, userB],
    type: "direct",
  });
  const conversation = convRes.data;
  console.log(`[Test] Conversation created:`, conversation);

  const conversationId = conversation._id;

  // 4. User A joins the conversation room
  console.log(`[Test] User A joining conversation room:${conversationId}`);
  socketA.emit("join_conversation", conversationId);

  // 5. Send message via socket and listen for real-time delivery (DoD 4)
  console.log(`[Test] User A sending a test message...`);
  const testMessageText = "Hello from User A! Real-time testing.";
  
  const messagePromise = new Promise<any>((resolve) => {
    socketA.on("new_message", (message) => {
      console.log(`[Test] Received real-time new_message:`, message);
      resolve(message);
    });
  });

  socketA.emit("send_message", {
    conversationId,
    text: testMessageText,
    type: "text",
  });

  const receivedMessage = await messagePromise;
  if (receivedMessage.text !== testMessageText || receivedMessage.senderId !== userA) {
    throw new Error("Message validation failed!");
  }
  console.log("[Test] DoD 4 (Real-time message & persistence) -> PASSED ✅");

  // 6. Test Read Receipts (DoD 8)
  console.log(`[Test] User A marking message ${receivedMessage._id} as read...`);
  const readPromise = new Promise<any>((resolve) => {
    socketA.on("message_read_status", (status) => {
      console.log(`[Test] Received message_read_status event:`, status);
      resolve(status);
    });
  });

  socketA.emit("read_message", {
    messageId: receivedMessage._id,
    conversationId,
  });

  const readStatus = await readPromise;
  if (!readStatus.readBy.includes(userA)) {
    throw new Error("Read Receipt status does not include User A!");
  }
  console.log("[Test] DoD 8 (Read Receipt) -> PASSED ✅");

  // 7. Test Message Attachments Upload (DoD 6)
  console.log(`[Test] Uploading mock attachment file...`);
  const tempFilePath = "./temp_test_image.png";
  fs.writeFileSync(tempFilePath, "fake png image content");

  const form = new FormData();
  form.append("file", fs.createReadStream(tempFilePath), {
    filename: "test_image.png",
    contentType: "image/png",
  });

  const uploadRes = await axios.post(`${SOCKET_URL}/api/v1/conversations/upload`, form, {
    headers: form.getHeaders(),
  });
  console.log(`[Test] Upload response:`, uploadRes.data);

  fs.unlinkSync(tempFilePath); // Cleanup temp file

  if (!uploadRes.data.fileUrl || uploadRes.data.fileName !== "test_image.png") {
    throw new Error("File upload failed!");
  }
  console.log("[Test] DoD 6 (File Attachment upload) -> PASSED ✅");

  // Cleanup connections
  socketA.disconnect();
  await mongoose.disconnect();

  console.log("\n=== ALL REAL-TIME CHAT INTEGRATION TESTS PASSED SUCCESSFULLY! 🚀 ===");
}

main().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
