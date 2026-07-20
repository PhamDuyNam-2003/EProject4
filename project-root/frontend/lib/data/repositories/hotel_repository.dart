import '../models/hotel_model.dart';
import '../models/filter_criteria.dart';
import '../mock/mock_database.dart';
import 'package:dio/dio.dart';
import '../../core/app_settings.dart';
import '../../core/app_constants.dart';

abstract class HotelRepository {
  Future<List<HotelModel>> getPopularHotels(FilterCriteria criteria);
  Future<HotelModel?> getHotelById(String id);
}

class MockHotelRepository implements HotelRepository {
  @override
  Future<HotelModel?> getHotelById(String id) async {
    await Future.delayed(const Duration(milliseconds: 300));
    final hotelMap = MockDatabase.hotels.cast<Map<String, dynamic>>().firstWhere(
      (h) => h['id'] == id,
      orElse: () => <String, dynamic>{},
    );
    if (hotelMap.isEmpty) return null;
    return HotelModel.fromJson(hotelMap);
  }

  @override
  Future<List<HotelModel>> getPopularHotels(FilterCriteria criteria) async {
    // Giả lập delay mạng
    await Future.delayed(const Duration(milliseconds: 500));

    var results = MockDatabase.hotels.map((e) => HotelModel.fromJson(e)).toList();

    // 1. Text Search (Tên, Địa chỉ, Thành phố)
    if (criteria.query.trim().isNotEmpty) {
      final q = criteria.query.toLowerCase();
      results = results.where((h) => 
        h.name.toLowerCase().contains(q) || 
        h.city.toLowerCase().contains(q) ||
        h.district.toLowerCase().contains(q)
      ).toList();
    }

    // 2. Category (Loại chỗ ở)
    if (criteria.category != 'All') {
      results = results.where((h) => h.category == criteria.category).toList();
    }

    // 3. Price & Ratings (Thông tin cơ bản)
    results = results.where((h) => 
      h.price >= criteria.minPrice && 
      h.price <= criteria.maxPrice &&
      h.rating >= criteria.minRating &&
      h.reviewScore >= criteria.minReviewScore
    ).toList();

    // 4. Location & Distance
    results = results.where((h) => h.distanceToCenter <= criteria.maxDistance).toList();
    if (criteria.nearPublicTransport) {
      results = results.where((h) => h.nearPublicTransport == true).toList();
    }

    // 5. Amenities & Features & Policies
    if (criteria.amenities.isNotEmpty) {
      results = results.where((h) => 
        criteria.amenities.every((a) => h.amenities.contains(a))
      ).toList();
    }
    if (criteria.roomFeatures.isNotEmpty) {
      results = results.where((h) => 
        criteria.roomFeatures.every((f) => h.roomFeatures.contains(f))
      ).toList();
    }
    if (criteria.policies.isNotEmpty) {
      results = results.where((h) => 
        criteria.policies.every((p) => h.policies.contains(p))
      ).toList();
    }

    // 6. Guests & Rooms
    results = results.where((h) => 
      h.maxAdults >= criteria.adults &&
      h.maxKids >= criteria.kids &&
      h.bedrooms >= criteria.bedrooms
    ).toList();
    
    if (criteria.petFriendly) {
      results = results.where((h) => h.petFriendly == true).toList();
    }

    // 7. Sort Order
    if (criteria.sortOrder == 'price_asc') {
      results.sort((a, b) => a.price.compareTo(b.price));
    } else if (criteria.sortOrder == 'price_desc') {
      results.sort((a, b) => b.price.compareTo(a.price));
    }

    return results;
  }
}

class ApiHotelRepository implements HotelRepository {
  final Dio _dio;

  ApiHotelRepository() : _dio = Dio(BaseOptions(
    baseUrl: AppConstants.baseUrl,
    connectTimeout: const Duration(seconds: 10),
    receiveTimeout: const Duration(seconds: 10),
  ));

  @override
  Future<HotelModel?> getHotelById(String id) async {
    try {
      final response = await _dio.get('/hotels/$id');
      if (response.statusCode == 200 && response.data['success']) {
        return HotelModel.fromJson(response.data['data']);
      }
      return null;
    } catch (e) {
      print('Error fetching hotel by id: $e');
      return null;
    }
  }

  @override
  Future<List<HotelModel>> getPopularHotels(FilterCriteria criteria) async {
    try {
      final response = await _dio.get('/hotels', queryParameters: {
        if (criteria.query.isNotEmpty) 'search': criteria.query,
      });
      
      if (response.statusCode == 200 && response.data['success']) {
        final List<dynamic> data = response.data['data'];
        return data.map((json) => HotelModel.fromJson(json)).toList();
      }
      return [];
    } catch (e) {
      print('Error fetching hotels: $e');
      return [];
    }
  }
}
