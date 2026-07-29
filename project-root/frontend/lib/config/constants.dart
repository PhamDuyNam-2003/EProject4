import 'dart:io' show Platform;
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';

class AppConstants {

  static String get baseUrl {
    if (kIsWeb) return 'http://192.168.1.10:8080/api'; 
    if (Platform.isAndroid) return 'http://192.168.1.10:8080/api';
    return 'http://192.168.1.10:8080/api';
  }

  static const Color primaryColor = Color(0xFFD4AF37); // Champagne Gold
  static const Color secondaryColor = Color(0xFFF1F5F9); // Slate 100
  static const Color backgroundColor = Color(0xFF0F172A); // Deep Navy
  static const Color cardColor = Color(0xFF1E293B); // Slate 800
  static const Color textColor = Colors.white;
}
