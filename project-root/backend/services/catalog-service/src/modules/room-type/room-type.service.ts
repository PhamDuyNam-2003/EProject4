import { IRoomTypeRepository } from './interfaces/room-type.repository.interface.js';
import { RoomTypeMapper } from './mappers/room-type.mapper.js';

export class RoomTypeService {
  constructor(private readonly roomTypeRepository: IRoomTypeRepository) {}

  async createRoomType(hotelId: string, data: any) {
    const roomType = await this.roomTypeRepository.create({
      ...data,
      hotelId,
    });
    return RoomTypeMapper.toResponse(roomType);
  }

  async updateRoomType(id: string, data: any) {
    const roomType = await this.roomTypeRepository.update(id, data);
    return RoomTypeMapper.toResponse(roomType);
  }

  async getRoomTypeById(id: string) {
    const roomType = await this.roomTypeRepository.findById(id);
    return RoomTypeMapper.toResponse(roomType);
  }

  async getRoomTypesByHotel(hotelId: string) {
    const roomTypes = await this.roomTypeRepository.findByHotelId(hotelId);
    return RoomTypeMapper.toResponseList(roomTypes);
  }

  async deleteRoomType(id: string) {
    return await this.roomTypeRepository.softDelete(id);
  }
}
