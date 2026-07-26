export class RoomMapper {
  static toResponse(room: any) {
    if (!room) return null;
    
    return {
      id: room.id,
      hotelId: room.hotelId,
      roomTypeId: room.roomTypeId,
      roomNumber: room.roomNumber,
      floor: room.floor,
      status: room.status,
      note: room.note,
      isActive: room.isActive,
      createdAt: room.createdAt,
      updatedAt: room.updatedAt
    };
  }

  static toResponseList(rooms: any[]) {
    return rooms.map(room => this.toResponse(room));
  }
}
