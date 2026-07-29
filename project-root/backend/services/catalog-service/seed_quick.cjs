const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const hotelId = "00000000-0000-0000-0000-000000000001";
  const ownerId = "11111111-1111-1111-1111-111111111111";

  await prisma.hotel.upsert({
    where: { id: hotelId },
    update: {},
    create: {
      id: hotelId,
      ownerId: ownerId,
      name: "Luxury Palace Hotel",
      slug: "luxury-palace-hotel",
      address: "123 Nguyen Hue, District 1, HCMC",
      city: "Ho Chi Minh City",
      latitude: 10.7743,
      longitude: 106.7044,
      thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      status: "ACTIVE",
    }
  });

  const roomTypeId = "00000000-0000-0000-0000-000000000002";
  await prisma.roomType.upsert({
    where: { id: roomTypeId },
    update: {},
    create: {
      id: roomTypeId,
      hotelId: hotelId,
      name: "Deluxe King Room",
      price: 150.0,
      maxGuests: 2,
      maxAdults: 2,
      maxChildren: 0,
      bedType: "KING",
      bedCount: 1
    }
  });

  await prisma.room.upsert({
    where: { id: "00000000-0000-0000-0000-000000000003" },
    update: {},
    create: {
      id: "00000000-0000-0000-0000-000000000003",
      hotelId: hotelId,
      roomTypeId: roomTypeId,
      roomNumber: "101",
      status: "AVAILABLE"
    }
  });

  console.log("Seeded 1 hotel");
}

main().catch(console.error).finally(() => prisma.$disconnect());
