import { HotelMapper } from './mappers/hotel.mapper.js';
export class HotelService {
    hotelRepository;
    constructor(hotelRepository) {
        this.hotelRepository = hotelRepository;
    }
    async createHotel(data) {
        const hotel = await this.hotelRepository.create(data);
        return HotelMapper.toResponse(hotel);
    }
    async updateHotel(id, data) {
        const hotel = await this.hotelRepository.update(id, data);
        return HotelMapper.toResponse(hotel);
    }
    async getHotelById(id) {
        const hotel = await this.hotelRepository.findById(id);
        return HotelMapper.toResponse(hotel);
    }
    async getAllHotels(filters) {
        const hotels = await this.hotelRepository.findAll(filters);
        return HotelMapper.toResponseList(hotels);
    }
    async deleteHotel(id) {
        return await this.hotelRepository.softDelete(id);
    }
}
