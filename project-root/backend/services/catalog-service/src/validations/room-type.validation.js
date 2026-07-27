import { z } from 'zod';
export const createRoomTypeSchema = z.object({
    body: z.object({
        name: z.string().min(1).max(150),
        description: z.string().optional(),
        price: z.number().min(0),
        maxGuests: z.number().int().min(1),
        maxAdults: z.number().int().min(1),
        maxChildren: z.number().int().min(0),
        bedType: z.enum(['SINGLE', 'DOUBLE', 'QUEEN', 'KING', 'TWIN', 'BUNK']),
        bedCount: z.number().int().min(1),
        area: z.number().optional(),
        thumbnail: z.string().url().optional(),
        amenities: z.array(z.string()).optional(),
    }),
    params: z.object({
        hotelId: z.string().uuid(),
    })
});
export const updateRoomTypeSchema = z.object({
    body: z.object({
        name: z.string().min(1).max(150).optional(),
        description: z.string().optional(),
        price: z.number().min(0).optional(),
        maxGuests: z.number().int().min(1).optional(),
        maxAdults: z.number().int().min(1).optional(),
        maxChildren: z.number().int().min(0).optional(),
        bedType: z.enum(['SINGLE', 'DOUBLE', 'QUEEN', 'KING', 'TWIN', 'BUNK']).optional(),
        bedCount: z.number().int().min(1).optional(),
        area: z.number().optional(),
        thumbnail: z.string().url().optional(),
        amenities: z.array(z.string()).optional(),
        isActive: z.boolean().optional(),
    }),
    params: z.object({
        id: z.string().uuid(),
    })
});
export const getRoomTypeSchema = z.object({
    params: z.object({
        id: z.string().uuid(),
    })
});
export const getRoomTypesByHotelSchema = z.object({
    params: z.object({
        hotelId: z.string().uuid(),
    })
});
