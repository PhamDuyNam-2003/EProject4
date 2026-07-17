import 'dart:io' show Platform;
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';

class AppConstants {

  static String get baseUrl {
    if (kIsWeb) return 'https://localhost:7247/api/v1'; 
    if (Platform.isAndroid) return 'https://10.0.2.2:7247/api/v1';
    return 'https://localhost:7247/api/v1';
  }

  static const Color primaryColor = Color(0xFF6C63FF);
  static const Color secondaryColor = Color(0xFFF85F6A);
  static const Color backgroundColor = Color(0xFF1E1E2C);
  static const Color cardColor = Color(0xFF2D2D44);
  static const Color textColor = Colors.white;
}
