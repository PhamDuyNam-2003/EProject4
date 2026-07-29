import { IHotelRepository } from './interfaces/hotel.repository.interface.js';
import { HotelMapper } from './mappers/hotel.mapper.js';

export class HotelService {
  constructor(private readonly hotelRepository: IHotelRepository) {}

  async createHotel(data: any) {
    const hotel = await this.hotelRepository.create(data);
    return HotelMapper.toResponse(hotel);
  }

  async updateHotel(id: string, data: any) {
    const hotel = await this.hotelRepository.update(id, data);
    return HotelMapper.toResponse(hotel);
  }

  async getHotelById(id: string) {
    const hotel = await this.hotelRepository.findById(id);
    return HotelMapper.toResponse(hotel);
  }

  async getAllHotels(filters: any) {
    const page = parseInt(filters.page as string) || 1;
    const limit = parseInt(filters.limit as string) || 10;
    const skip = (page - 1) * limit;
    const hotels = await this.hotelRepository.findAll(filters, skip, limit);
    return HotelMapper.toResponseList(hotels);
  }

  async deleteHotel(id: string) {
    return await this.hotelRepository.softDelete(id);
  }
}
