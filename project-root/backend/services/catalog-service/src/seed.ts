import { prisma } from "./config/prisma.js";

const mockHotels = [
  {
    id: "h1",
    name: "Luxury Palace Hotel",
    city: "Ho Chi Minh City",
    district: "District 1",
    address: "123 Nguyen Hue, District 1, HCMC",
    description: "Experience the ultimate luxury in the heart of the city.",
    price: 150.0,
    rating: 4.8,
    reviewScore: 9.2,
    reviewCount: 1250,
    category: "Luxury",
    distanceToCenter: 0.5,
    nearPublicTransport: true,
    petFriendly: false,
    maxAdults: 2,
    maxKids: 1,
    bedrooms: 1,
    amenities: ["Pool", "Spa", "Gym", "Restaurant", "Bar", "Free WiFi"],
    roomFeatures: ["Air Conditioning", "Balcony", "Bathtub", "Mini Bar"],
    policies: ["Non-smoking", "No pets allowed", "Check-in from 14:00", "Check-out until 12:00"],
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"]
  },
  {
    id: "h2",
    name: "Cozy Boutique Stay",
    city: "Da Lat",
    district: "Ward 3",
    address: "45 Ba Trieu, Ward 3, Da Lat",
    description: "A charming boutique hotel surrounded by pine trees.",
    price: 45.0,
    rating: 4.5,
    reviewScore: 8.8,
    reviewCount: 420,
    category: "Boutique",
    distanceToCenter: 1.2,
    nearPublicTransport: false,
    petFriendly: true,
    maxAdults: 4,
    maxKids: 2,
    bedrooms: 2,
    amenities: ["Free Breakfast", "Garden", "Fireplace", "Free WiFi"],
    roomFeatures: ["Mountain View", "Heater", "Private Bathroom"],
    policies: ["Pet friendly", "Smoking allowed in designated areas"],
    images: ["https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"]
  }
];

async function main() {
  console.log("Start seeding...");
  for (const hotel of mockHotels) {
    await prisma.hotel.upsert({
      where: { id: hotel.id },
      update: hotel,
      create: hotel,
    });
  }
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
