import 'dart:ui' as dart_ui;
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'core/app_settings.dart';
import 'core/responsive_wrapper.dart';
import 'features/home/screens/home_screen.dart';
import 'features/auth/screens/login_screen.dart';
import 'core/auth_service.dart';
import 'features/booking/screens/bookings_list_screen.dart';
import 'features/profile/screens/saved_screen.dart';
import 'features/profile/screens/profile_screen.dart';

void main() {
  runApp(const HotelBookingApp());
}

class HotelBookingApp extends StatelessWidget {
  const HotelBookingApp({super.key});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: AppSettings.instance,
      builder: (context, child) {
        return MaterialApp(
          title: 'Luxury Hotel Booking',
          debugShowCheckedModeBanner: false,
          themeMode: AppSettings.instance.isDarkMode ? ThemeMode.dark : ThemeMode.light,
          theme: ThemeData(
            colorScheme: ColorScheme.fromSeed(
              seedColor: const Color(0xFF0F172A), // Deep Navy
              primary: const Color(0xFF0F172A), // Deep Navy
              secondary: const Color(0xFFD4AF37), // Champagne Gold
              background: const Color(0xFFF9FAFB), // Pearl White
              surface: Colors.white,
            ),
            textTheme: GoogleFonts.plusJakartaSansTextTheme().copyWith(
              displayLarge: GoogleFonts.playfairDisplay(color: const Color(0xFF0F172A), fontWeight: FontWeight.w700),
              displayMedium: GoogleFonts.playfairDisplay(color: const Color(0xFF0F172A), fontWeight: FontWeight.w700),
              displaySmall: GoogleFonts.playfairDisplay(color: const Color(0xFF0F172A), fontWeight: FontWeight.w700),
              headlineLarge: GoogleFonts.playfairDisplay(color: const Color(0xFF0F172A), fontWeight: FontWeight.w700),
              headlineMedium: GoogleFonts.playfairDisplay(color: const Color(0xFF0F172A), fontWeight: FontWeight.w600),
              headlineSmall: GoogleFonts.playfairDisplay(color: const Color(0xFF0F172A), fontWeight: FontWeight.w600),
              titleLarge: GoogleFonts.playfairDisplay(color: const Color(0xFF0F172A), fontWeight: FontWeight.w600),
            ),
            useMaterial3: true,
          ),
          darkTheme: ThemeData(
            colorScheme: ColorScheme.fromSeed(
              brightness: Brightness.dark,
              seedColor: const Color(0xFF0F172A),
              primary: const Color(0xFFE2E8F0),
              secondary: const Color(0xFFD4AF37),
              background: const Color(0xFF000000), // True Black
              surface: const Color(0xFF121212), // Deep Charcoal
            ),
            textTheme: GoogleFonts.plusJakartaSansTextTheme(
              ThemeData(brightness: Brightness.dark).textTheme,
            ).copyWith(
              displayLarge: GoogleFonts.playfairDisplay(color: Colors.white, fontWeight: FontWeight.w700),
              displayMedium: GoogleFonts.playfairDisplay(color: Colors.white, fontWeight: FontWeight.w700),
              displaySmall: GoogleFonts.playfairDisplay(color: Colors.white, fontWeight: FontWeight.w700),
              headlineLarge: GoogleFonts.playfairDisplay(color: Colors.white, fontWeight: FontWeight.w700),
              headlineMedium: GoogleFonts.playfairDisplay(color: Colors.white, fontWeight: FontWeight.w600),
              headlineSmall: GoogleFonts.playfairDisplay(color: Colors.white, fontWeight: FontWeight.w600),
              titleLarge: GoogleFonts.playfairDisplay(color: Colors.white, fontWeight: FontWeight.w600),
            ),
            useMaterial3: true,
          ),
          home: FutureBuilder<bool>(
            future: AuthService.instance.hasValidToken(),
            builder: (context, snapshot) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return const Scaffold(body: Center(child: CircularProgressIndicator()));
              }
              if (snapshot.data == true) {
                return ResponsiveWrapper(child: MainNavigationScreen());
              }
              return ResponsiveWrapper(child: LoginScreen());
            },
          ),
        );
      },
    );
  }
}

class MainNavigationScreen extends StatefulWidget {
  final int initialIndex;
  
  const MainNavigationScreen({super.key, this.initialIndex = 0});

  @override
  State<MainNavigationScreen> createState() => _MainNavigationScreenState();
}

class _MainNavigationScreenState extends State<MainNavigationScreen> {
  late int _currentIndex;

  @override
  void initState() {
    super.initState();
    _currentIndex = widget.initialIndex;
  }

  final List<Widget> _screens = [
    const HomeScreen(),
    const SavedScreen(),
    const BookingsListScreen(),
    const ProfileScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return ResponsiveWrapper(
      child: Scaffold(
        body: Stack(
          children: [
            _screens[_currentIndex],
            Positioned(
              bottom: 24,
              left: 24,
              right: 24,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(30),
                child: BackdropFilter(
                  filter: _getBlurFilter(),
                  child: Container(
                    height: 70,
                    decoration: BoxDecoration(
                      color: Theme.of(context).colorScheme.surface.withOpacity(0.85),
                      borderRadius: BorderRadius.circular(30),
                      border: Border.all(color: Colors.white.withOpacity(0.2), width: 1.5),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.1),
                          blurRadius: 30,
                          offset: const Offset(0, 10),
                        ),
                      ],
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        _buildNavItem(Icons.home_outlined, Icons.home, tr('Home'), 0),
                        _buildNavItem(Icons.favorite_outline, Icons.favorite, tr('Saved'), 1),
                        _buildNavItem(Icons.receipt_long_outlined, Icons.receipt_long, tr('Bookings'), 2),
                        _buildNavItem(Icons.person_outline, Icons.person, tr('Profile'), 3),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  // Import dart:ui at the top to use ImageFilter
  dynamic _getBlurFilter() {
    return dart_ui.ImageFilter.blur(sigmaX: 10.0, sigmaY: 10.0);
  }

  Widget _buildNavItem(IconData icon, IconData activeIcon, String label, int index) {
    final isSelected = _currentIndex == index;
    final colorScheme = Theme.of(context).colorScheme;
    return GestureDetector(
      onTap: () => setState(() => _currentIndex = index),
      behavior: HitTestBehavior.opaque,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          color: isSelected ? colorScheme.primary.withOpacity(0.1) : Colors.transparent,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              isSelected ? activeIcon : icon,
              color: isSelected ? colorScheme.primary : Colors.grey.shade500,
              size: 24,
            ),
            if (isSelected) ...[
              const SizedBox(height: 4),
              Container(
                width: 4,
                height: 4,
                decoration: BoxDecoration(
                  color: colorScheme.secondary,
                  shape: BoxShape.circle,
                ),
              ),
            ]
          ],
        ),
      ),
    );
  }
}
