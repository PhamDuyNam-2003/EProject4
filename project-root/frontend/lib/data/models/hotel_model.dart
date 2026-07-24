class HotelModel {
  final String id;
  final String name;
  final String address;
  final String? description;
  final double rating;
  final double priceFrom;
  final DateTime? createdAt;
  final DateTime? updatedAt;
  final List<String> images;
  final double? latitude;
  final double? longitude;
  final List<String> amenities;
  final List<String> policies;
  final double distanceToCenter;

  HotelModel({
    required this.id,
    required this.name,
    required this.address,
    this.description,
    this.rating = 5.0,
    required this.priceFrom,
    this.createdAt,
    this.updatedAt,
    this.images = const [],
    this.latitude,
    this.longitude,
    this.amenities = const [],
    this.policies = const [],
    this.distanceToCenter = 0.0,
  });

  static double _parseDouble(dynamic value) {
    if (value == null) return 0.0;
    if (value is num) return value.toDouble();
    return double.tryParse(value.toString()) ?? 0.0;
  }

  factory HotelModel.fromJson(Map<String, dynamic> json) {
    return HotelModel(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      address: json['address'] ?? '',
      description: json['description'],
      rating: _parseDouble(json['rating']),
      priceFrom: _parseDouble(json['priceFrom'] ?? json['price_from'] ?? json['price']),
      createdAt: json['createdAt'] != null ? DateTime.parse(json['createdAt']) : null,
      updatedAt: json['updatedAt'] != null ? DateTime.parse(json['updatedAt']) : null,
      images: json['images'] != null ? List<String>.from(json['images']) : [],
      latitude: json['latitude'] != null ? _parseDouble(json['latitude']) : null,
      longitude: json['longitude'] != null ? _parseDouble(json['longitude']) : null,
      amenities: json['amenities'] != null ? List<String>.from(json['amenities']) : [],
      policies: json['policies'] != null ? List<String>.from(json['policies']) : [],
      distanceToCenter: _parseDouble(json['distanceToCenter'] ?? 2.5),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'address': address,
      'description': description,
      'rating': rating,
      'priceFrom': priceFrom,
      'createdAt': createdAt?.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
      'images': images,
      'latitude': latitude,
      'longitude': longitude,
      'amenities': amenities,
      'policies': policies,
      'distanceToCenter': distanceToCenter,
    };
  }
}
