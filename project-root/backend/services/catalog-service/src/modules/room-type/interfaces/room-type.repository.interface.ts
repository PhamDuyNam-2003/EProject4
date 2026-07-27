export interface IRoomTypeRepository {
  create(data: any): Promise<any>;
  findById(id: string): Promise<any | null>;
  findByHotelId(hotelId: string): Promise<any[]>;
  update(id: string, data: any): Promise<any>;
  softDelete(id: string): Promise<any>;
}
