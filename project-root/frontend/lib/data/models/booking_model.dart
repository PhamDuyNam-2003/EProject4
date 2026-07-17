import 'hotel_model.dart';
import 'user_model.dart';

enum BookingStatus { PENDING, CONFIRMED, CANCELLED }
enum PaymentStatus { UNPAID, PAID, REFUNDED }

class BookingModel {
  final String id;
  final String userId;
  final String hotelId;
  final DateTime checkInDate;
  final DateTime checkOutDate;
  final double totalPrice;
  final BookingStatus status;
  final PaymentStatus paymentStatus;
  final DateTime createdAt;
  
  final UserModel? user;
  final HotelModel? hotel;

  BookingModel({
    required this.id,
    required this.userId,
    required this.hotelId,
    required this.checkInDate,
    required this.checkOutDate,
    required this.totalPrice,
    required this.status,
    required this.paymentStatus,
    required this.createdAt,
    this.user,
    this.hotel,
  });

  factory BookingModel.fromJson(Map<String, dynamic> json) {
    return BookingModel(
      id: json['id'],
      userId: json['userId'] ?? json['user_id'],
      hotelId: json['hotelId'] ?? json['hotel_id'],
      checkInDate: DateTime.parse(json['checkInDate'] ?? json['check_in_date']),
      checkOutDate: DateTime.parse(json['checkOutDate'] ?? json['check_out_date']),
      totalPrice: (json['totalPrice'] ?? json['total_price']).toDouble(),
      status: BookingStatus.values.firstWhere(
        (e) => e.toString() == 'BookingStatus.${json['status']}',
        orElse: () => BookingStatus.PENDING,
      ),
      paymentStatus: PaymentStatus.values.firstWhere(
        (e) => e.toString() == 'PaymentStatus.${json['paymentStatus'] ?? json['payment_status']}',
        orElse: () => PaymentStatus.UNPAID,
      ),
      createdAt: DateTime.parse(json['createdAt'] ?? json['created_at']),
      user: json['user'] != null ? UserModel.fromJson(json['user']) : null,
      hotel: json['hotel'] != null ? HotelModel.fromJson(json['hotel']) : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'userId': userId,
      'hotelId': hotelId,
      'checkInDate': checkInDate.toIso8601String(),
      'checkOutDate': checkOutDate.toIso8601String(),
      'totalPrice': totalPrice,
      'status': status.toString().split('.').last,
      'paymentStatus': paymentStatus.toString().split('.').last,
      'createdAt': createdAt.toIso8601String(),
    };
  }
}
