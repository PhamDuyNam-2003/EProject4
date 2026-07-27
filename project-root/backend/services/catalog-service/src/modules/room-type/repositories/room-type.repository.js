export class RoomTypeRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.roomType.create({ data });
    }
    async findById(id) {
        return await this.prisma.roomType.findUnique({
            where: { id },
            include: {
                images: true,
                rooms: true,
            },
        });
    }
    async findByHotelId(hotelId) {
        return await this.prisma.roomType.findMany({
            where: { hotelId, isActive: true },
            orderBy: { price: "asc" },
        });
    }
    async update(id, data) {
        return await this.prisma.roomType.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        return await this.prisma.roomType.update({
            where: { id },
            data: { isActive: false },
        });
    }
}
