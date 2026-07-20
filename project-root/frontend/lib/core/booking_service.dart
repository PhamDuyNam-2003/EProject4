import 'package:dio/dio.dart';
import '../config/constants.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class BookingService {
  static final BookingService instance = BookingService._internal();

  BookingService._internal() {
    _dio = Dio(BaseOptions(
      baseUrl: AppConstants.baseUrl,
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10),
    ));

    // Thêm interceptor để lấy token (tương tự AuthService)
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

  late Dio _dio;
  final FlutterSecureStorage _storage = const FlutterSecureStorage();

  Future<String> createBooking({
    required String hotelId,
    required DateTime checkInDate,
    required DateTime checkOutDate,
    required int rooms,
    required int adults,
    required int children,
    required double totalPrice,
  }) async {
    try {
      final payload = {
        'hotelId': hotelId,
        'checkInDate': checkInDate.toIso8601String(),
        'checkOutDate': checkOutDate.toIso8601String(),
        'rooms': rooms,
        'guestInfo': {
          'adults': adults,
          'children': children,
        },
        'totalPrice': totalPrice,
      };

      final response = await _dio.post('/bookings', data: payload);
      final data = response.data;
      
      if (response.statusCode != 200 && response.statusCode != 201) {
        throw Exception(data['message'] ?? 'Đặt phòng thất bại');
      }
      
      return data['data']['id'] ?? data['data']['bookingId'] ?? '';
    } catch (e) {
      if (e is DioException && e.response != null) {
        throw Exception(e.response?.data['message'] ?? 'Lỗi đặt phòng');
      }
      throw Exception('Lỗi hệ thống: ${e.toString()}');
    }
  }

  Future<String> createPaymentUrl(String bookingId) async {
    try {
      final response = await _dio.post('/payment/vnpay/create-url', data: {
        'bookingId': bookingId,
      });
      final data = response.data;
      
      if (response.statusCode == 200 && data['success'] == true) {
        return data['data']['paymentUrl'];
      }
      throw Exception(data['message'] ?? 'Không thể tạo link thanh toán');
    } catch (e) {
      if (e is DioException && e.response != null) {
        throw Exception(e.response?.data['message'] ?? 'Lỗi tạo link thanh toán');
      }
      throw Exception('Lỗi hệ thống: ${e.toString()}');
    }
  }
}
