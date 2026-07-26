import { z } from 'zod';

export const createHotelSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(255),
    slug: z.string().min(1).max(255),
    description: z.string().optional(),
    address: z.string().min(1),
    city: z.string().max(100),
    country: z.string().max(100).optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    phone: z.string().max(20).optional(),
    email: z.string().email().optional(),
    thumbnail: z.string().url().optional(),
    amenities: z.array(z.string()).optional(),
    rating: z.number().min(0).max(5).optional(),
    checkInTime: z.string().max(10).optional(),
    checkOutTime: z.string().max(10).optional(),
    status: z.enum(['PENDING', 'ACTIVE', 'INACTIVE', 'REJECTED']).optional(),
    propertyType: z.enum(['HOTEL', 'RESORT', 'VILLA', 'APARTMENT', 'HOMESTAY', 'GUESTHOUSE', 'MOTEL', 'CAMPING', 'GLAMPING', 'CRUISE', 'ENTIRE_HOUSE']).optional(),
  })
});

export const updateHotelSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(255).optional(),
    description: z.string().optional(),
    address: z.string().min(1).optional(),
    city: z.string().max(100).optional(),
    country: z.string().max(100).optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    phone: z.string().max(20).optional(),
    email: z.string().email().optional(),
    thumbnail: z.string().url().optional(),
    amenities: z.array(z.string()).optional(),
    rating: z.number().min(0).max(5).optional(),
    checkInTime: z.string().max(10).optional(),
    checkOutTime: z.string().max(10).optional(),
    status: z.enum(['PENDING', 'ACTIVE', 'INACTIVE', 'REJECTED']).optional(),
    propertyType: z.enum(['HOTEL', 'RESORT', 'VILLA', 'APARTMENT', 'HOMESTAY', 'GUESTHOUSE', 'MOTEL', 'CAMPING', 'GLAMPING', 'CRUISE', 'ENTIRE_HOUSE']).optional(),
  }),
  params: z.object({
    id: z.string().uuid(),
  })
});

export const getHotelSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  })
});
