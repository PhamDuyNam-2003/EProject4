export class HotelRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.hotel.create({ data });
    }
    async findById(id) {
        return await this.prisma.hotel.findUnique({
            where: { id },
            include: {
                images: true,
                roomTypes: true,
                rooms: true,
            },
        });
    }
    async findAll(filters) {
        const where = { deletedAt: null };
        if (filters.city)
            where.city = filters.city;
        if (filters.propertyType)
            where.propertyType = filters.propertyType;
        if (filters.status)
            where.status = filters.status;
        if (filters.ownerId)
            where.ownerId = filters.ownerId;
        return await this.prisma.hotel.findMany({
            where,
            orderBy: { createdAt: "desc" },
        });
    }
    async update(id, data) {
        return await this.prisma.hotel.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        return await this.prisma.hotel.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
}
