export interface IRoomRepository {
  create(data: any): Promise<any>;
  findById(id: string): Promise<any | null>;
  findByRoomTypeId(roomTypeId: string): Promise<any[]>;
  findByHotelIdAndRoomNumber(hotelId: string, roomNumber: string): Promise<any | null>;
  update(id: string, data: any): Promise<any>;
  softDelete(id: string): Promise<any>;
}
