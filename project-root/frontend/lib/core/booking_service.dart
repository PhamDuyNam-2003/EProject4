import 'package:dio/dio.dart';
import '../config/constants.dart';
import 'auth_service.dart';

class BookingService {
  static final BookingService instance = BookingService._internal();

  BookingService._internal();

  Dio get _dio => AuthService.instance.dio;

  Future<String> createBooking({
    required String hotelId,
    required DateTime checkInDate,
    required DateTime checkOutDate,
    String? roomTypeId,
    required int rooms,
    required int adults,
    required int children,
    required double totalPrice,
    String? guestFullName,
    String? guestEmail,
    String? guestPhone,
    String? specialRequests,
  }) async {
    try {
      final payload = {
        'hotelId': hotelId,
        'checkInDate': checkInDate.toIso8601String(),
        'checkOutDate': checkOutDate.toIso8601String(),
        'rooms': [
          {'roomId': roomTypeId ?? hotelId, 'quantity': rooms}
        ],
        'guestInfo': {
          'fullName': guestFullName ?? 'Guest',
          'email': guestEmail ?? 'guest@example.com',
          'phone': guestPhone ?? '0000000000',
          'specialRequests': specialRequests ?? 'Adults: $adults, Children: $children',
        },
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

  Future<List<dynamic>> getMyBookings() async {
    try {
      final response = await _dio.get('/bookings');
      if (response.statusCode == 200) {
        return response.data['data'] as List<dynamic>;
      }
      return [];
    } catch (e) {
      if (e is DioException && e.response != null) {
        throw Exception(e.response?.data['message'] ?? 'Lỗi lấy danh sách đơn');
      }
      throw Exception('Lỗi hệ thống: ${e.toString()}');
    }
  }

  Future<void> cancelBookingRequest({
    required String bookingId,
    required String bankName,
    required String accountNumber,
    required String reason,
    String? imageBase64,
  }) async {
    try {
      final response = await _dio.post(
        '/bookings/$bookingId/cancel-request', 
        data: {
          'bankName': bankName,
          'accountNumber': accountNumber,
          'reason': reason,
          'imageBase64': imageBase64,
        },
        options: Options(
          receiveTimeout: const Duration(seconds: 10),
          sendTimeout: const Duration(seconds: 10),
        )
      );

      if (response.statusCode != 200) {
        throw Exception(response.data['message'] ?? 'Lỗi yêu cầu hủy đơn');
      }
    } catch (e) {
      if (e is DioException && e.response != null) {
        throw Exception(e.response?.data['message'] ?? 'Lỗi yêu cầu hủy đơn');
      }
      throw Exception('Lỗi hệ thống: ${e.toString()}');
    }
  }

  Future<Map<String, dynamic>> getInvoice(String bookingId) async {
    try {
      final response = await _dio.get('/bookings/$bookingId/invoice');
      if (response.statusCode == 200 && response.data['success'] == true) {
        return response.data['data'] as Map<String, dynamic>;
      }
      throw Exception(response.data['message'] ?? 'Không thể tải hóa đơn');
    } catch (e) {
      if (e is DioException && e.response != null) {
        throw Exception(e.response?.data['message'] ?? 'Lỗi tải hóa đơn');
      }
      throw Exception('Lỗi hệ thống: ${e.toString()}');
    }
  }

  Future<Map<String, dynamic>> getHotelAvailability(String hotelId, int month, int year) async {
    try {
      final response = await _dio.get('/bookings/hotel/$hotelId/availability', queryParameters: {
        'month': month,
        'year': year,
      });
      if (response.statusCode == 200 && response.data['success'] == true) {
        return response.data['data'] as Map<String, dynamic>;
      }
      throw Exception(response.data['message'] ?? 'Lỗi lấy trạng thái phòng');
    } catch (e) {
      if (e is DioException && e.response != null) {
        throw Exception(e.response?.data['message'] ?? 'Lỗi lấy trạng thái phòng');
      }
      throw Exception('Lỗi hệ thống: ${e.toString()}');
    }
  }
}
