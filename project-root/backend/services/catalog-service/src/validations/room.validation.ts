import { z } from 'zod';

export const createRoomSchema = z.object({
  body: z.object({
    roomNumber: z.string().min(1).max(30),
    floor: z.number().int().optional(),
    status: z.enum(['AVAILABLE', 'BOOKED', 'OCCUPIED', 'MAINTENANCE']).optional(),
    note: z.string().optional(),
  }),
  params: z.object({
    hotelId: z.string().uuid(),
    roomTypeId: z.string().uuid(),
  })
});

export const updateRoomSchema = z.object({
  body: z.object({
    roomNumber: z.string().min(1).max(30).optional(),
    floor: z.number().int().optional(),
    status: z.enum(['AVAILABLE', 'BOOKED', 'OCCUPIED', 'MAINTENANCE']).optional(),
    note: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
  params: z.object({
    id: z.string().uuid(),
  })
});

export const getRoomSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  })
});

export const getRoomsByRoomTypeSchema = z.object({
  params: z.object({
    roomTypeId: z.string().uuid(),
  })
});
