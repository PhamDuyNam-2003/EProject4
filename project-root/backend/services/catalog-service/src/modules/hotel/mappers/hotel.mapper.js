export class HotelMapper {
    static toResponse(hotel) {
        if (!hotel)
            return null;
        return {
            id: hotel.id,
            name: hotel.name,
            slug: hotel.slug,
            description: hotel.description,
            location: {
                address: hotel.address,
                city: hotel.city,
                country: hotel.country,
                lat: hotel.latitude,
                lng: hotel.longitude,
            },
            contact: {
                phone: hotel.phone,
                email: hotel.email,
            },
            thumbnail: hotel.thumbnail,
            images: hotel.images?.map((img) => img.imageUrl) || [],
            amenities: hotel.amenities,
            rating: hotel.rating,
            checkInTime: hotel.checkInTime,
            checkOutTime: hotel.checkOutTime,
            status: hotel.status,
            propertyType: hotel.propertyType,
            createdAt: hotel.createdAt,
            updatedAt: hotel.updatedAt
        };
    }
    static toResponseList(hotels) {
        return hotels.map(hotel => this.toResponse(hotel));
    }
}
