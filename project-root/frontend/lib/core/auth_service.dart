import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:dio/dio.dart';
import '../data/models/user_model.dart';
import '../config/constants.dart';

class AuthService {
  static final AuthService instance = AuthService._internal();
  AuthService._internal() {
    _dio = Dio(BaseOptions(
      baseUrl: AppConstants.baseUrl,
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
          // Ngăn chặn infinite loop nếu chính request refresh bị lỗi 401
          if (e.requestOptions.path.contains('/auth/refresh')) {
             return handler.next(e);
          }

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
  Dio get dio => _dio;
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
      if (response.statusCode == 200 && response.data['success'] == true) {
        final data = response.data;
        final newAccessToken = data['data']['tokens']['accessToken'];
        final newRefreshToken = data['data']['tokens']['refreshToken'];
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
      final response = await _dio.post('/auth/login', data: {'email': email, 'password': password});
      final data = response.data;
      
      if (data['success'] == true) {
        final accessToken = data['data']['tokens']['accessToken'];
        final refreshToken = data['data']['tokens']['refreshToken'];
        final user = data['data']['user'];
        
        await _storage.write(key: 'access_token', value: accessToken);
        await _storage.write(key: 'refresh_token', value: refreshToken);
        
        _currentUser = UserModel.fromJson(user);
      } else {
        throw Exception(data['message'] ?? 'Đăng nhập thất bại');
      }
    } catch (e) {
      if (e is DioException && e.response != null) {
         throw Exception(e.response?.data['message'] ?? 'Lỗi đăng nhập');
      }
      throw Exception('Lỗi đăng nhập: ${e.toString()}');
    }
  }

  Future<void> updateAvatar(String userId, dynamic fileBytes, String fileName) async {
    try {
      final formData = FormData.fromMap({
        'avatar': MultipartFile.fromBytes(fileBytes, filename: fileName),
      });

      final response = await _dio.post(
        '/users/$userId/avatar',
        data: formData,
      );

      final data = response.data;
      if (data['success'] == true) {
        // Cập nhật URL mới vào local user profile bằng cách tạo instance mới
        if (_currentUser != null && _currentUser!.profile != null) {
          final updatedProfile = UserProfile(
            userId: _currentUser!.profile!.userId,
            fullName: _currentUser!.profile!.fullName,
            phoneNumber: _currentUser!.profile!.phoneNumber,
            address: _currentUser!.profile!.address,
            avatarUrl: data['data']['profile']['avatarUrl'],
          );
          
          _currentUser = UserModel(
            id: _currentUser!.id,
            email: _currentUser!.email,
            role: _currentUser!.role,
            status: _currentUser!.status,
            loginAttempts: _currentUser!.loginAttempts,
            createdAt: _currentUser!.createdAt,
            agentProfile: _currentUser!.agentProfile,
            profile: updatedProfile,
          );
        }
      } else {
        throw Exception(data['message'] ?? 'Lỗi upload ảnh');
      }
    } catch (e) {
      if (e is DioException && e.response != null) {
         throw Exception(e.response?.data['message'] ?? 'Lỗi upload ảnh');
      }
      throw Exception('Lỗi upload ảnh: ${e.toString()}');
    }
  }

  Future<void> sendOtp(String email) async {
    try {
      final response = await _dio.post('/auth/send-otp', data: {'email': email});
      final data = response.data;
      if (data['success'] != true) {
         throw Exception(data['message'] ?? 'Gửi OTP thất bại');
      }
    } catch (e) {
      if (e is DioException && e.response != null) {
         throw Exception(e.response?.data['message'] ?? 'Lỗi gửi OTP');
      }
      throw Exception('Lỗi gửi OTP: ${e.toString()}');
    }
  }

  Future<void> verifyOtp(String email, String otp) async {
    try {
      final response = await _dio.post('/auth/verify-otp', data: {'email': email, 'otp': otp});
      final data = response.data;
      
      if (data['success'] == true) {
        final accessToken = data['data']['tokens']['accessToken'];
        final refreshToken = data['data']['tokens']['refreshToken'];
        final user = data['data']['user'];
        
        await _storage.write(key: 'access_token', value: accessToken);
        await _storage.write(key: 'refresh_token', value: refreshToken);
        _currentUser = UserModel.fromJson(user);
      } else {
        throw Exception(data['message'] ?? 'Xác thực OTP thất bại');
      }
    } catch (e) {
      if (e is DioException && e.response != null) {
         throw Exception(e.response?.data['message'] ?? 'Lỗi xác thực OTP');
      }
      throw Exception('Lỗi xác thực OTP: ${e.toString()}');
    }
  }

  Future<void> setPassword(String newPassword) async {
    try {
      final response = await _dio.post('/auth/change-password', data: {'newPassword': newPassword});
      final data = response.data;
      if (data['success'] != true) {
         throw Exception(data['message'] ?? 'Lỗi tạo mật khẩu');
      }
    } catch (e) {
      if (e is DioException && e.response != null) {
         throw Exception(e.response?.data['message'] ?? 'Lỗi tạo mật khẩu');
      }
      throw Exception('Lỗi tạo mật khẩu: ${e.toString()}');
    }
  }

  Future<void> resetPassword({
    required String email,
    required String otp,
    required String newPassword,
  }) async {
    try {
      final response = await _dio.post('/auth/reset-password', data: {
        'email': email,
        'otp': otp,
        'newPassword': newPassword,
      });
      final data = response.data;
      if (data['success'] != true) {
         throw Exception(data['message'] ?? 'Đặt lại mật khẩu thất bại');
      }
    } catch (e) {
      if (e is DioException && e.response != null) {
         throw Exception(e.response?.data['message'] ?? 'Lỗi đặt lại mật khẩu');
      }
      throw Exception('Lỗi đặt lại mật khẩu: ${e.toString()}');
    }
  }

  Future<void> logout() async {
    await _storage.delete(key: 'access_token');
    await _storage.delete(key: 'refresh_token');
    _currentUser = null;
  }
}
