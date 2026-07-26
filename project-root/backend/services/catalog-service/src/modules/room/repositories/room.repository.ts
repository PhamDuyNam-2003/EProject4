import { PrismaClient } from "@prisma/client";
import { IRoomRepository } from "../interfaces/room.repository.interface.js";

export class RoomRepository implements IRoomRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: any) {
    return await this.prisma.room.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.room.findUnique({
      where: { id },
    });
  }

  async findByRoomTypeId(roomTypeId: string) {
    return await this.prisma.room.findMany({
      where: { roomTypeId, isActive: true },
      orderBy: { roomNumber: "asc" },
    });
  }

  async findByHotelIdAndRoomNumber(hotelId: string, roomNumber: string) {
    return await this.prisma.room.findFirst({
      where: {
        hotelId,
        roomNumber,
        isActive: true,
      },
    });
  }

  async update(id: string, data: any) {
    return await this.prisma.room.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: string) {
    return await this.prisma.room.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
