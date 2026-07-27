import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:dio/dio.dart';
import '../config/constants.dart';

import 'auth_service.dart';

class AnalyticsService {
  static final AnalyticsService instance = AnalyticsService._internal();

  AnalyticsService._internal();

  Dio get _dio => AuthService.instance.dio;

  Future<Map<String, dynamic>> getRevenue({String? hotelId}) async {
    try {
      final queryParams = <String, dynamic>{};
      if (hotelId != null) queryParams['hotelId'] = hotelId;
      final response = await _dio.get('/analytics/revenue', queryParameters: queryParams);
      return response.data;
    } catch (e) {
      if (e is DioException && e.response != null) {
        throw Exception(e.response?.data['message'] ?? 'Failed to load revenue');
      }
      throw Exception('Failed to load revenue: $e');
    }
  }

  Future<Map<String, dynamic>> getRevenueHistory({String? hotelId, int days = 7}) async {
    try {
      final queryParams = <String, dynamic>{'days': days};
      if (hotelId != null) queryParams['hotelId'] = hotelId;
      final response = await _dio.get('/analytics/revenue/history', queryParameters: queryParams);
      return response.data;
    } catch (e) {
      if (e is DioException && e.response != null) {
        throw Exception(e.response?.data['message'] ?? 'Failed to load revenue history');
      }
      throw Exception('Failed to load revenue history: $e');
    }
  }
}
