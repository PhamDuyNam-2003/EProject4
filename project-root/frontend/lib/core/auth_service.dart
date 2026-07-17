import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:dio/dio.dart';
import 'dart:convert';
import '../data/models/user_model.dart';

class AuthService {
  static final AuthService instance = AuthService._internal();
  AuthService._internal() {
    _dio = Dio(BaseOptions(
      baseUrl: 'http://localhost:3000/api/v1',
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10),
    ));

    // Interceptor tự động gắn token
    _dio.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) async {
        final token = await _storage.read(key: 'access_token');
        if (token != null) {
          options.headers['Authorization'] = 'Bearer $token';
        }
        return handler.next(options);
      },
      onError: (DioException e, handler) async {
        // Tự động renew token nếu hết hạn (401)
        if (e.response?.statusCode == 401) {
          bool renewed = await _renewToken();
          if (renewed) {
            final token = await _storage.read(key: 'access_token');
            e.requestOptions.headers['Authorization'] = 'Bearer $token';
            // Gọi lại request bị lỗi
            try {
              final response = await _dio.fetch(e.requestOptions);
              return handler.resolve(response);
            } catch (retryError) {
              return handler.next(e);
            }
          }
        }
        return handler.next(e);
      },
    ));
  }

  final FlutterSecureStorage _storage = const FlutterSecureStorage();
  late Dio _dio;
  UserModel? _currentUser;

  UserModel? get currentUser => _currentUser;
  bool get isLoggedIn => _currentUser != null;

  Future<bool> hasValidToken() async {
    final token = await _storage.read(key: 'access_token');
    return token != null;
  }

  Future<bool> _renewToken() async {
    final refreshToken = await _storage.read(key: 'refresh_token');
    if (refreshToken == null) return false;

    try {
      final response = await _dio.post('/auth/refresh', data: {'refreshToken': refreshToken});
      if (response.statusCode == 200) {
        final newAccessToken = response.data['accessToken'];
        final newRefreshToken = response.data['refreshToken'];
        await _storage.write(key: 'access_token', value: newAccessToken);
        await _storage.write(key: 'refresh_token', value: newRefreshToken);
        return true;
      }
    } catch (e) {
      await logout();
    }
    return false;
  }

  Future<void> login(String email, String password) async {
    try {
      // Gọi API đăng nhập (Giả lập nếu BE chưa sẵn sàng)
      // final response = await _dio.post('/auth/login', data: {'email': email, 'password': password});
      // final data = response.data;
      
      // Giả lập Dữ liệu
      await Future.delayed(const Duration(seconds: 2));
      if (email == 'admin@gmail.com' && password == '123456') {
        await _storage.write(key: 'access_token', value: 'fake_access_token');
        await _storage.write(key: 'refresh_token', value: 'fake_refresh_token');
        
        _currentUser = UserModel(
          id: '123',
          email: email,
          role: Role.USER,
          status: UserStatus.ACTIVE,
          loginAttempts: 0,
          createdAt: DateTime.now(),
        );
      } else {
        throw Exception('Sai email hoặc mật khẩu');
      }
    } catch (e) {
      throw Exception('Lỗi đăng nhập: ${e.toString()}');
    }
  }

  Future<void> register(String name, String email, String password) async {
    try {
      await Future.delayed(const Duration(seconds: 2));
      // Tương lai kết nối API:
      // await _dio.post('/auth/register', data: {'name': name, 'email': email, 'password': password});
    } catch (e) {
      throw Exception('Lỗi đăng ký: ${e.toString()}');
    }
  }

  Future<void> logout() async {
    await _storage.delete(key: 'access_token');
    await _storage.delete(key: 'refresh_token');
    _currentUser = null;
  }
}
