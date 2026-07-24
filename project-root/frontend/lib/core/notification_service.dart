import 'package:dio/dio.dart';
import '../data/models/notification_model.dart';
import '../config/constants.dart';
import 'auth_service.dart';

class NotificationService {
  static final NotificationService instance = NotificationService._internal();
  NotificationService._internal();

  Dio get _dio => AuthService.instance.dio;

  Future<List<AppNotificationModel>> getUserNotifications({int page = 1, int limit = 20}) async {
    final user = AuthService.instance.currentUser;
    if (user == null) return [];

    try {
      final response = await _dio.get('/v1/app-notifications/user/${user.id}', queryParameters: {
        'page': page,
        'limit': limit,
      });

      if (response.statusCode == 200 && response.data['data'] != null) {
        final List<dynamic> data = response.data['data'];
        return data.map((json) => AppNotificationModel.fromJson(json)).toList();
      }
      return [];
    } catch (e) {
      print('Error fetching notifications: $e');
      return [];
    }
  }

  Future<int> getUnreadCount() async {
    final user = AuthService.instance.currentUser;
    if (user == null) return 0;

    try {
      final response = await _dio.get('/v1/app-notifications/user/${user.id}/unread-count');
      if (response.statusCode == 200) {
        return response.data['unreadCount'] ?? 0;
      }
      return 0;
    } catch (e) {
      print('Error fetching unread count: $e');
      return 0;
    }
  }

  Future<bool> markAsRead(String notificationId) async {
    try {
      final response = await _dio.patch('/v1/app-notifications/$notificationId/read');
      return response.statusCode == 200;
    } catch (e) {
      print('Error marking notification as read: $e');
      return false;
    }
  }

  Future<bool> markAllAsRead() async {
    final user = AuthService.instance.currentUser;
    if (user == null) return false;

    try {
      final response = await _dio.patch('/v1/app-notifications/read-all', data: {
        'userId': user.id,
      });
      return response.statusCode == 200;
    } catch (e) {
      print('Error marking all as read: $e');
      return false;
    }
  }

  Future<bool> deleteNotification(String notificationId) async {
    try {
      final response = await _dio.delete('/v1/app-notifications/$notificationId');
      return response.statusCode == 200;
    } catch (e) {
      print('Error deleting notification: $e');
      return false;
    }
  }
}
