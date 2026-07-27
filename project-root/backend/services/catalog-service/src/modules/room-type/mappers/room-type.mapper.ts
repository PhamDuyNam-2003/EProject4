export class RoomTypeMapper {
  static toResponse(roomType: any) {
    if (!roomType) return null;
    
    return {
      id: roomType.id,
      hotelId: roomType.hotelId,
      name: roomType.name,
      description: roomType.description,
      price: roomType.price,
      capacity: {
        maxGuests: roomType.maxGuests,
        maxAdults: roomType.maxAdults,
        maxChildren: roomType.maxChildren,
      },
      bed: {
        type: roomType.bedType,
        count: roomType.bedCount,
      },
      area: roomType.area,
      thumbnail: roomType.thumbnail,
      images: roomType.images?.map((img: any) => img.imageUrl) || [],
      amenities: roomType.amenities,
      isActive: roomType.isActive,
      createdAt: roomType.createdAt,
      updatedAt: roomType.updatedAt
    };
  }

  static toResponseList(roomTypes: any[]) {
    return roomTypes.map(rt => this.toResponse(rt));
  }
}
