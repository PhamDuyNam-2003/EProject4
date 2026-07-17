import bcrypt from "bcrypt";
import { prisma } from "../src/config/prisma";

async function main() {
  console.log("🌱 Bắt đầu đổ mồi dữ liệu (Theo Schema gốc của Team)...");

  // 1. Tạo Users (Agent & Admin)
  const passwordHash = await bcrypt.hash("123456", 10);
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@hotel.com" },
    update: {},
    create: {
      email: "admin@hotel.com",
      passwordHash,
      role: "ADMIN",
      status: "ACTIVE",
      profile: {
        create: { fullName: "Super Admin", phoneNumber: "0999999999" }
      }
    }
  });

  const agent = await prisma.user.upsert({
    where: { email: "agent@hotel.com" },
    update: {},
    create: {
      email: "agent@hotel.com",
      passwordHash,
      role: "AGENT",
      status: "ACTIVE",
      profile: {
        create: { fullName: "Vinpearl Agent", phoneNumber: "0888888888" }
      },
      agentProfile: {
        create: { businessName: "Vinpearl Group", approvalStatus: "ACTIVE" }
      }
    }
  });

  const guestUser = await prisma.user.upsert({
    where: { email: "guest@gmail.com" },
    update: {},
    create: {
      email: "guest@gmail.com",
      passwordHash,
      role: "USER",
      status: "ACTIVE",
      profile: {
        create: { fullName: "Nguyễn Văn Khách", phoneNumber: "0777777777" }
      }
    }
  });
  console.log("✅ Đã tạo Users (Admin, Agent, Guest)");

  // 2. Tạo Hotel
  const hotel = await prisma.hotel.upsert({
    where: { slug: "vinpearl-landmark-81" },
    update: {},
    create: {
      ownerId: agent.id,
      name: "Vinpearl Landmark 81",
      slug: "vinpearl-landmark-81",
      description: "Khách sạn cao nhất Đông Nam Á",
      address: "208 Nguyễn Hữu Cảnh",
      city: "Hồ Chí Minh",
      status: "ACTIVE",
      rating: 5.0,
    }
  });

  const roomType = await prisma.roomType.upsert({
    where: {
      hotelId_name: {
        hotelId: hotel.id,
        name: "Phòng Tổng Thống"
      }
    },
    update: {},
    create: {
      hotelId: hotel.id,
      name: "Phòng Tổng Thống",
      price: 5000000,
      maxGuests: 4,
      maxAdults: 2,
      maxChildren: 2,
      bedType: "KING",
      bedCount: 1,
    }
  });

  // Xóa các room cũ nếu chạy lại seed
  await prisma.room.deleteMany({ where: { hotelId: hotel.id } });
  await prisma.room.createMany({
    data: [
      { hotelId: hotel.id, roomTypeId: roomType.id, roomNumber: "P-8101" },
      { hotelId: hotel.id, roomTypeId: roomType.id, roomNumber: "P-8102" }
    ]
  });

  console.log("✅ Đã tạo Khách sạn, Căn phòng (Catalog Service)");

  // 3. Tạo Booking, Payment, Inventory, Review
  // Xóa bookings cũ để tránh duplicate lỗi
  await prisma.booking.deleteMany({ where: { userId: guestUser.id } });
  
  const booking = await prisma.booking.create({
    data: {
      userId: guestUser.id,
      hotelId: hotel.id,
      checkInDate: new Date("2026-08-01"),
      checkOutDate: new Date("2026-08-05"),
      totalPrice: 20000000,
      status: "CONFIRMED",
      paymentStatus: "PAID",
      details: {
        create: {
          roomTypeId: roomType.id,
          quantity: 1,
          unitPrice: 5000000
        }
      },
      guests: {
        create: {
          fullName: "Nguyễn Văn Khách",
          idCard: "079099999999"
        }
      }
    }
  });
  console.log("✅ Đã tạo Đơn đặt phòng (Booking Service)");

  // 4. Tạo Payment (Transaction & Invoice)
  await prisma.invoice.create({
    data: {
      bookingId: booking.id,
      taxAmount: 2000000, // 10% VAT
    }
  });
  await prisma.transaction.create({
    data: {
      bookingId: booking.id,
      gateway: "VNPay",
      amount: 22000000, // Tổng + VAT
    }
  });
  console.log("✅ Đã tạo Hóa đơn và Giao dịch (Payment Service)");

  // 5. Tạo Operation (Room Inventory)
  await prisma.roomInventory.upsert({
    where: {
      hotelId_roomTypeId_date: {
        hotelId: hotel.id,
        roomTypeId: roomType.id,
        date: new Date("2026-08-01"),
      }
    },
    update: {},
    create: {
      hotelId: hotel.id,
      roomTypeId: roomType.id,
      date: new Date("2026-08-01"),
      totalRooms: 2,
      bookedRooms: 1,
    }
  });
  console.log("✅ Đã tạo Quản lý Kho phòng (Operation Service)");

  // 6. Tạo Review
  await prisma.review.create({
    data: {
      bookingId: booking.id,
      userId: guestUser.id,
      rating: 5,
      comment: "Phòng tổng thống tuyệt vời, view triệu đô!",
    }
  });
  console.log("✅ Đã tạo Đánh giá (Review Service)");

  console.log("🌱 Seeding toàn bộ Dữ liệu thành công!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
