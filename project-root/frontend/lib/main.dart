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
              seedColor: const Color(0xFF1E3A8A),
              primary: const Color(0xFF1E3A8A),
              secondary: const Color(0xFFF59E0B),
              background: const Color(0xFFF3F4F6),
              surface: Colors.white,
            ),
            textTheme: GoogleFonts.plusJakartaSansTextTheme(),
            useMaterial3: true,
          ),
          darkTheme: ThemeData(
            colorScheme: ColorScheme.fromSeed(
              brightness: Brightness.dark,
              seedColor: const Color(0xFF1E3A8A),
              primary: const Color(0xFF3B82F6),
              secondary: const Color(0xFFFBBF24),
              background: const Color(0xFF111827),
              surface: const Color(0xFF1F2937),
            ),
            textTheme: GoogleFonts.plusJakartaSansTextTheme(
              ThemeData(brightness: Brightness.dark).textTheme,
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
                return const ResponsiveWrapper(child: MainNavigationScreen());
              }
              return const ResponsiveWrapper(child: LoginScreen());
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
        body: _screens[_currentIndex],
        bottomNavigationBar: NavigationBar(
          selectedIndex: _currentIndex,
          onDestinationSelected: (index) => setState(() => _currentIndex = index),
          backgroundColor: Theme.of(context).colorScheme.surface,
          destinations: [
            NavigationDestination(icon: const Icon(Icons.home_outlined), selectedIcon: const Icon(Icons.home), label: tr('Home')),
            NavigationDestination(icon: const Icon(Icons.favorite_outline), selectedIcon: const Icon(Icons.favorite), label: tr('Saved')),
            NavigationDestination(icon: const Icon(Icons.receipt_long_outlined), selectedIcon: const Icon(Icons.receipt_long), label: tr('Bookings')),
            NavigationDestination(icon: const Icon(Icons.person_outline), selectedIcon: const Icon(Icons.person), label: tr('Profile')),
          ],
        ),
      ),
    );
  }
}
