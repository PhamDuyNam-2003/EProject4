import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllHotels = async (search?: string) => {
  
  return await (prisma as any).hotel.findMany({
    where: search ? {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { address: { contains: search, mode: 'insensitive' } }
      ]
    } : undefined
  });
};

export const getHotelById = async (id: string) => {
  return await (prisma as any).hotel.findUnique({ where: { id } });
};

export const createHotel = async (data: any) => {
  return await (prisma as any).hotel.create({ data });
};
