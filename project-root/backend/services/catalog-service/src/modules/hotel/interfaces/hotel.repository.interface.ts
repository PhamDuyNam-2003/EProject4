export interface IHotelRepository {
  create(data: any): Promise<any>;
  findById(id: string): Promise<any | null>;
  findAll(filters: any, skip?: number, take?: number): Promise<any[]>;
  update(id: string, data: any): Promise<any>;
  softDelete(id: string): Promise<any>;
}
