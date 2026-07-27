class FilterCriteria {
  final String query;
  final String category;
  final double minPrice;
  final double maxPrice;
  final int minRating;
  final double minReviewScore;
  
  // Location
  final double maxDistance; // bán kính
  final bool nearPublicTransport;
  
  // Amenities & Features & Policies
  final List<String> amenities;
  final List<String> roomFeatures;
  final List<String> policies;
  
  // Guests & Rooms
  final int adults;
  final int kids;
  final int bedrooms;
  final bool petFriendly;
  
  // Sort
  final String sortOrder;

  const FilterCriteria({
    this.query = '',
    this.category = 'All',
    this.minPrice = 0.0,
    this.maxPrice = 2000.0,
    this.minRating = 0,
    this.minReviewScore = 0.0,
    this.maxDistance = 50.0, // Mặc định 50km
    this.nearPublicTransport = false,
    this.amenities = const [],
    this.roomFeatures = const [],
    this.policies = const [],
    this.adults = 1,
    this.kids = 0,
    this.bedrooms = 1,
    this.petFriendly = false,
    this.sortOrder = 'none',
  });

  FilterCriteria copyWith({
    String? query,
    String? category,
    double? minPrice,
    double? maxPrice,
    int? minRating,
    double? minReviewScore,
    double? maxDistance,
    bool? nearPublicTransport,
    List<String>? amenities,
    List<String>? roomFeatures,
    List<String>? policies,
    int? adults,
    int? kids,
    int? bedrooms,
    bool? petFriendly,
    String? sortOrder,
  }) {
    return FilterCriteria(
      query: query ?? this.query,
      category: category ?? this.category,
      minPrice: minPrice ?? this.minPrice,
      maxPrice: maxPrice ?? this.maxPrice,
      minRating: minRating ?? this.minRating,
      minReviewScore: minReviewScore ?? this.minReviewScore,
      maxDistance: maxDistance ?? this.maxDistance,
      nearPublicTransport: nearPublicTransport ?? this.nearPublicTransport,
      amenities: amenities ?? this.amenities,
      roomFeatures: roomFeatures ?? this.roomFeatures,
      policies: policies ?? this.policies,
      adults: adults ?? this.adults,
      kids: kids ?? this.kids,
      bedrooms: bedrooms ?? this.bedrooms,
      petFriendly: petFriendly ?? this.petFriendly,
      sortOrder: sortOrder ?? this.sortOrder,
    );
  }
}
