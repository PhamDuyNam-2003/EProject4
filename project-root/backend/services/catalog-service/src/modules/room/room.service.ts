import { IRoomRepository } from './interfaces/room.repository.interface.js';
import { RoomMapper } from './mappers/room.mapper.js';

export class RoomService {
  constructor(private readonly roomRepository: IRoomRepository) {}

  async createRoom(hotelId: string, roomTypeId: string, data: any) {
    const existingRoom = await this.roomRepository.findByHotelIdAndRoomNumber(hotelId, data.roomNumber);
    if (existingRoom) {
      throw Object.assign(new Error('Room number already exists in this hotel'), { status: 400 });
    }

    const room = await this.roomRepository.create({
      ...data,
      hotelId,
      roomTypeId,
    });
    return RoomMapper.toResponse(room);
  }

  async updateRoom(id: string, data: any) {
    const room = await this.roomRepository.findById(id);
    if (!room) throw Object.assign(new Error('Room not found'), { status: 404 });

    if (data.roomNumber && data.roomNumber !== room.roomNumber) {
      const existingRoom = await this.roomRepository.findByHotelIdAndRoomNumber(room.hotelId, data.roomNumber);
      if (existingRoom && existingRoom.id !== id) {
        throw Object.assign(new Error('Room number already exists in this hotel'), { status: 400 });
      }
    }

    const updatedRoom = await this.roomRepository.update(id, data);
    return RoomMapper.toResponse(updatedRoom);
  }

  async getRoomsByRoomType(roomTypeId: string) {
    const rooms = await this.roomRepository.findByRoomTypeId(roomTypeId);
    return RoomMapper.toResponseList(rooms);
  }

  async deleteRoom(id: string) {
    return await this.roomRepository.softDelete(id);
  }
}
