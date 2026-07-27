import { PrismaClient } from "@prisma/client";
import { IHotelRepository } from "../interfaces/hotel.repository.interface.js";

export class HotelRepository implements IHotelRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: any) {
    return await this.prisma.hotel.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.hotel.findUnique({
      where: { id },
      include: {
        images: true,
        roomTypes: true,
        rooms: true,
      },
    });
  }

  async findAll(filters: any) {
    const where: any = { deletedAt: null };
    if (filters.city) where.city = filters.city;
    if (filters.propertyType) where.propertyType = filters.propertyType;
    if (filters.status) where.status = filters.status;
    if (filters.ownerId) where.ownerId = filters.ownerId;

    return await this.prisma.hotel.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
  }

  async update(id: string, data: any) {
    return await this.prisma.hotel.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: string) {
    return await this.prisma.hotel.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
