export class RoomRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.room.create({ data });
    }
    async findById(id) {
        return await this.prisma.room.findUnique({
            where: { id },
        });
    }
    async findByRoomTypeId(roomTypeId) {
        return await this.prisma.room.findMany({
            where: { roomTypeId, isActive: true },
            orderBy: { roomNumber: "asc" },
        });
    }
    async findByHotelIdAndRoomNumber(hotelId, roomNumber) {
        return await this.prisma.room.findFirst({
            where: {
                hotelId,
                roomNumber,
                isActive: true,
            },
        });
    }
    async update(id, data) {
        return await this.prisma.room.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        return await this.prisma.room.update({
            where: { id },
            data: { isActive: false },
        });
    }
}
