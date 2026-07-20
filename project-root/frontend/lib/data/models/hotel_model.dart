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
  });

  factory HotelModel.fromJson(Map<String, dynamic> json) {
    return HotelModel(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      address: json['address'] ?? '',
      description: json['description'],
      rating: json['rating']?.toDouble() ?? 5.0,
      priceFrom: json['priceFrom']?.toDouble() ?? json['price_from']?.toDouble() ?? json['price']?.toDouble() ?? 0.0,
      createdAt: json['createdAt'] != null ? DateTime.parse(json['createdAt']) : null,
      updatedAt: json['updatedAt'] != null ? DateTime.parse(json['updatedAt']) : null,
      images: json['images'] != null ? List<String>.from(json['images']) : [],
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
    };
  }
}
