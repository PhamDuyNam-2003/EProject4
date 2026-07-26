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
    const hotels = await this.hotelRepository.findAll(filters);
    return HotelMapper.toResponseList(hotels);
  }

  async deleteHotel(id: string) {
    return await this.hotelRepository.softDelete(id);
  }
}
