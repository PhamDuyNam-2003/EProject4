import { prisma } from '../../../config/prisma.js';
export const getAllHotels = async (search, category, page = 1, limit = 10, filters) => {
    const where = {};
    if (search) {
        where.OR = [
            { name: { contains: search, mode: 'insensitive' } },
            { address: { contains: search, mode: 'insensitive' } },
            { city: { contains: search, mode: 'insensitive' } },
            { district: { contains: search, mode: 'insensitive' } }
        ];
    }
    if (category && category !== 'All') {
        where.category = category;
    }
    if (filters) {
        if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
            where.price = {};
            if (filters.minPrice !== undefined)
                where.price.gte = Number(filters.minPrice);
            if (filters.maxPrice !== undefined)
                where.price.lte = Number(filters.maxPrice);
        }
        if (filters.rating !== undefined) {
            where.rating = { gte: Number(filters.rating) };
        }
        if (filters.petFriendly === 'true') {
            where.petFriendly = true;
        }
        if (filters.amenities) {
            const ams = Array.isArray(filters.amenities) ? filters.amenities : filters.amenities.split(',');
            where.amenities = { hasEvery: ams };
        }
    }
    const skip = (page - 1) * limit;
    const data = await prisma.hotel.findMany({
        where: Object.keys(where).length > 0 ? where : undefined,
        skip,
        take: limit,
    });
    const total = await prisma.hotel.count({
        where: Object.keys(where).length > 0 ? where : undefined,
    });
    return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
    };
};
export const getHotelById = async (id) => {
    return await prisma.hotel.findUnique({ where: { id } });
};
export const createHotel = async (data) => {
    return await prisma.hotel.create({ data });
};
export const getRoomTypesByHotelId = async (hotelId) => {
    return await prisma.roomType.findMany({ where: { hotelId } });
};
export const getReviewsByHotelId = async (hotelId) => {
    return await prisma.review.findMany({
        where: { hotelId },
        orderBy: { createdAt: 'desc' },
        include: { replies: true }
    });
};
export const lockRoom = async (roomTypeId, quantity, checkIn, checkOut) => {
    // Simplistic lock logic: check if there's enough inventory
    const roomType = await prisma.roomType.findUnique({ where: { id: roomTypeId } });
    if (!roomType || roomType.totalInventory < quantity) {
        throw new Error('Not enough rooms available');
    }
    // In a real scenario, we would decrement a RoomAvailability table for each date
    // or use Redis to set a TTL lock. For now, just simulate success.
    return { success: true, message: 'Room locked successfully', lockedUntil: new Date(Date.now() + 15 * 60000) };
};
