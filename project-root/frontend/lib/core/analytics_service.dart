import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:dio/dio.dart';
import '../config/constants.dart';

class AnalyticsService {
  static final AnalyticsService instance = AnalyticsService._internal();
  final FlutterSecureStorage _storage = const FlutterSecureStorage();
  late Dio _dio;

  AnalyticsService._internal() {
    _dio = Dio(BaseOptions(
      baseUrl: AppConstants.baseUrl,
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10),
    ));

    _dio.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) async {
        final token = await _storage.read(key: 'access_token');
        if (token != null) {
          options.headers['Authorization'] = 'Bearer $token';
        }
        return handler.next(options);
      },
    ));
  }

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
