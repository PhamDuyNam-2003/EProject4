import { PrismaClient } from "@prisma/client";
import { IRoomTypeRepository } from "../interfaces/room-type.repository.interface.js";

export class RoomTypeRepository implements IRoomTypeRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: any) {
    return await this.prisma.roomType.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.roomType.findUnique({
      where: { id },
      include: {
        images: true,
        rooms: true,
      },
    });
  }

  async findByHotelId(hotelId: string) {
    return await this.prisma.roomType.findMany({
      where: { hotelId, isActive: true },
      orderBy: { price: "asc" },
    });
  }

  async update(id: string, data: any) {
    return await this.prisma.roomType.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: string) {
    return await this.prisma.roomType.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
