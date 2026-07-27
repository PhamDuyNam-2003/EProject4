import { RoomTypeMapper } from './mappers/room-type.mapper.js';
export class RoomTypeService {
    roomTypeRepository;
    constructor(roomTypeRepository) {
        this.roomTypeRepository = roomTypeRepository;
    }
    async createRoomType(hotelId, data) {
        const roomType = await this.roomTypeRepository.create({
            ...data,
            hotelId,
        });
        return RoomTypeMapper.toResponse(roomType);
    }
    async updateRoomType(id, data) {
        const roomType = await this.roomTypeRepository.update(id, data);
        return RoomTypeMapper.toResponse(roomType);
    }
    async getRoomTypeById(id) {
        const roomType = await this.roomTypeRepository.findById(id);
        return RoomTypeMapper.toResponse(roomType);
    }
    async getRoomTypesByHotel(hotelId) {
        const roomTypes = await this.roomTypeRepository.findByHotelId(hotelId);
        return RoomTypeMapper.toResponseList(roomTypes);
    }
    async deleteRoomType(id) {
        return await this.roomTypeRepository.softDelete(id);
    }
}
