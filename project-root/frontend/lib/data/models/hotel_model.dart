enum HotelStatus { PENDING, ACTIVE, INACTIVE, REJECTED }
enum RoomStatus { AVAILABLE, BOOKED, OCCUPIED, MAINTENANCE }
enum BedType { SINGLE, DOUBLE, QUEEN, KING, TWIN, BUNK }

class RoomTypeModel {
  final String id;
  final String hotelId;
  final String name;
  final String? description;
  final double price;
  final int maxGuests;
  final int maxAdults;
  final int maxChildren;
  final BedType bedType;
  final int bedCount;
  final double? area;
  final String? thumbnail;

  RoomTypeModel({
    required this.id,
    required this.hotelId,
    required this.name,
    this.description,
    required this.price,
    required this.maxGuests,
    required this.maxAdults,
    required this.maxChildren,
    required this.bedType,
    required this.bedCount,
    this.area,
    this.thumbnail,
  });

  factory RoomTypeModel.fromJson(Map<String, dynamic> json) {
    return RoomTypeModel(
      id: json['id'],
      hotelId: json['hotelId'] ?? json['hotel_id'],
      name: json['name'],
      description: json['description'],
      price: (json['price'] ?? 0).toDouble(),
      maxGuests: json['maxGuests'] ?? json['max_guests'] ?? 2,
      maxAdults: json['maxAdults'] ?? json['max_adults'] ?? 2,
      maxChildren: json['maxChildren'] ?? json['max_children'] ?? 0,
      bedType: BedType.values.firstWhere(
        (e) => e.toString() == 'BedType.${json['bedType'] ?? json['bed_type']}',
        orElse: () => BedType.DOUBLE,
      ),
      bedCount: json['bedCount'] ?? json['bed_count'] ?? 1,
      area: json['area']?.toDouble(),
      thumbnail: json['thumbnail'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'hotelId': hotelId,
      'name': name,
      'description': description,
      'price': price,
      'maxGuests': maxGuests,
      'maxAdults': maxAdults,
      'maxChildren': maxChildren,
      'bedType': bedType.toString().split('.').last,
      'bedCount': bedCount,
      'area': area,
      'thumbnail': thumbnail,
    };
  }
}

class RoomModel {
  final String id;
  final String hotelId;
  final String roomTypeId;
  final String roomNumber;
  final int? floor;
  final RoomStatus status;
  final String? note;
  final bool isActive;

  RoomModel({
    required this.id,
    required this.hotelId,
    required this.roomTypeId,
    required this.roomNumber,
    this.floor,
    required this.status,
    this.note,
    required this.isActive,
  });

  factory RoomModel.fromJson(Map<String, dynamic> json) {
    return RoomModel(
      id: json['id'],
      hotelId: json['hotelId'] ?? json['hotel_id'],
      roomTypeId: json['roomTypeId'] ?? json['room_type_id'],
      roomNumber: json['roomNumber'] ?? json['room_number'],
      floor: json['floor'],
      status: RoomStatus.values.firstWhere(
        (e) => e.toString() == 'RoomStatus.${json['status']}',
        orElse: () => RoomStatus.AVAILABLE,
      ),
      note: json['note'],
      isActive: json['isActive'] ?? json['is_active'] ?? true,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'hotelId': hotelId,
      'roomTypeId': roomTypeId,
      'roomNumber': roomNumber,
      'floor': floor,
      'status': status.toString().split('.').last,
      'note': note,
      'isActive': isActive,
    };
  }
}

class HotelModel {
  final String id;
  final String ownerId;
  final String name;
  final String slug;
  final String? description;
  final String address;
  final String district;
  final String city;
  final String country;
  final double? latitude;
  final double? longitude;
  final String? phone;
  final String? email;
  final String? thumbnail;
  final double rating;
  final double price;
  final String category;
  final HotelStatus status;
  final bool isSaved;
  
  // Relations
  final List<RoomTypeModel>? roomTypes;
  final List<RoomModel>? rooms;

  // Các trường mới cho bộ lọc chuyên sâu
  final double reviewScore; // Điểm đánh giá /10
  final double distanceToCenter; // Khoảng cách trung tâm (km)
  final bool nearPublicTransport; // Gần phương tiện công cộng
  final List<String> amenities; // Tiện nghi nổi bật: Free Breakfast, Pool, Gym, Spa...
  final List<String> roomFeatures; // Tiện nghi phòng: AC, Balcony...
  final List<String> policies; // Chính sách: Free Cancel, No Credit Card, Pay at Hotel
  final int maxGuests;
  final int maxAdults;
  final int maxKids;
  final int bedrooms;
  final bool petFriendly;

  HotelModel({
    required this.id,
    required this.ownerId,
    required this.name,
    required this.slug,
    this.description,
    required this.address,
    this.district = '',
    required this.city,
    this.country = 'Vietnam',
    this.latitude,
    this.longitude,
    this.phone,
    this.email,
    this.thumbnail,
    this.rating = 0.0,
    this.price = 0.0,
    this.category = 'Hotel',
    this.status = HotelStatus.PENDING,
    this.isSaved = false,
    this.roomTypes,
    this.rooms,
    this.reviewScore = 0.0,
    this.distanceToCenter = 0.0,
    this.nearPublicTransport = false,
    this.amenities = const [],
    this.roomFeatures = const [],
    this.policies = const [],
    this.maxGuests = 2,
    this.maxAdults = 2,
    this.maxKids = 0,
    this.bedrooms = 1,
    this.petFriendly = false,
  });

  factory HotelModel.fromJson(Map<String, dynamic> json) {
    return HotelModel(
      id: json['id'],
      ownerId: json['owner_id'] ?? json['ownerId'] ?? '',
      name: json['name'],
      slug: json['slug'] ?? '',
      description: json['description'],
      address: json['address'],
      district: json['district'] ?? '',
      city: json['city'],
      country: json['country'] ?? 'Vietnam',
      latitude: json['latitude']?.toDouble(),
      longitude: json['longitude']?.toDouble(),
      phone: json['phone'],
      email: json['email'],
      thumbnail: json['thumbnail'],
      rating: json['rating']?.toDouble() ?? 0.0,
      price: json['price']?.toDouble() ?? 200.0,
      category: json['category'] ?? 'Hotel',
      status: HotelStatus.values.firstWhere(
        (e) => e.toString() == 'HotelStatus.${json['status']}',
        orElse: () => HotelStatus.ACTIVE,
      ),
      isSaved: json['is_saved'] ?? json['isSaved'] ?? false,
      roomTypes: json['roomTypes'] != null
          ? (json['roomTypes'] as List).map((i) => RoomTypeModel.fromJson(i)).toList()
          : null,
      rooms: json['rooms'] != null
          ? (json['rooms'] as List).map((i) => RoomModel.fromJson(i)).toList()
          : null,
      reviewScore: json['reviewScore']?.toDouble() ?? json['review_score']?.toDouble() ?? 8.0,
      distanceToCenter: json['distanceToCenter']?.toDouble() ?? json['distance_to_center']?.toDouble() ?? 2.0,
      nearPublicTransport: json['nearPublicTransport'] ?? json['near_public_transport'] ?? false,
      amenities: json['amenities'] != null ? List<String>.from(json['amenities']) : [],
      roomFeatures: json['roomFeatures'] != null ? List<String>.from(json['roomFeatures']) : [],
      policies: json['policies'] != null ? List<String>.from(json['policies']) : [],
      maxGuests: json['maxGuests'] ?? json['max_guests'] ?? 2,
      maxAdults: json['maxAdults'] ?? json['max_adults'] ?? 2,
      maxKids: json['maxKids'] ?? json['max_kids'] ?? 0,
      bedrooms: json['bedrooms'] ?? 1,
      petFriendly: json['petFriendly'] ?? json['pet_friendly'] ?? false,
    );
  }
}
