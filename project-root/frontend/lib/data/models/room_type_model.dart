class RoomTypeModel {
  final String id;
  final String hotelId;
  final String name;
  final String description;
  final double basePrice;
  final int maxAdults;
  final int maxKids;
  final int bedrooms;
  final List<String> beds;
  final List<String> amenities;
  final List<String> images;
  final int totalInventory;

  RoomTypeModel({
    required this.id,
    required this.hotelId,
    required this.name,
    this.description = '',
    required this.basePrice,
    required this.maxAdults,
    required this.maxKids,
    required this.bedrooms,
    this.beds = const [],
    this.amenities = const [],
    this.images = const [],
    required this.totalInventory,
  });

  factory RoomTypeModel.fromJson(Map<String, dynamic> json) {
    return RoomTypeModel(
      id: json['id'] ?? '',
      hotelId: json['hotelId'] ?? '',
      name: json['name'] ?? '',
      description: json['description'] ?? '',
      basePrice: (json['basePrice'] ?? 0).toDouble(),
      maxAdults: json['maxAdults'] ?? 2,
      maxKids: json['maxKids'] ?? 0,
      bedrooms: json['bedrooms'] ?? 1,
      beds: List<String>.from(json['beds'] ?? []),
      amenities: List<String>.from(json['amenities'] ?? []),
      images: List<String>.from(json['images'] ?? []),
      totalInventory: json['totalInventory'] ?? 1,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'hotelId': hotelId,
      'name': name,
      'description': description,
      'basePrice': basePrice,
      'maxAdults': maxAdults,
      'maxKids': maxKids,
      'bedrooms': bedrooms,
      'beds': beds,
      'amenities': amenities,
      'images': images,
      'totalInventory': totalInventory,
    };
  }
}
