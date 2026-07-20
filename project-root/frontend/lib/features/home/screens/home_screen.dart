import 'package:flutter/material.dart';
import '../../../data/models/hotel_model.dart';
import '../../../data/repositories/hotel_repository.dart';
import '../../../data/models/filter_criteria.dart';
import '../widgets/hotel_card.dart';
import 'filter_full_screen.dart';
import 'map_screen.dart';
import '../../../core/app_settings.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final HotelRepository _hotelRepo = ApiHotelRepository();
  
  FilterCriteria _currentCriteria = const FilterCriteria();
  late Future<List<HotelModel>> _popularHotelsFuture;

  @override
  void initState() {
    super.initState();
    _fetchHotels();
  }

  void _fetchHotels() {
    setState(() {
      _popularHotelsFuture = _hotelRepo.getPopularHotels(_currentCriteria);
    });
  }

  void _openFilterSheet() async {
    final result = await Navigator.push<FilterCriteria>(
      context,
      MaterialPageRoute(
        fullscreenDialog: true,
        builder: (context) => FilterFullScreen(initialCriteria: _currentCriteria),
      ),
    );

    if (result != null) {
      setState(() {
        _currentCriteria = result;
      });
      _fetchHotels();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () async {
          final hotels = await _popularHotelsFuture;
          if (mounted) {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => MapScreen(hotels: hotels)),
            );
          }
        },
        backgroundColor: Theme.of(context).colorScheme.primary,
        icon: const Icon(Icons.map_outlined, color: Colors.white),
        label: const Text('Map View', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, letterSpacing: 0.5)),
        elevation: 8,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildHeader(context),
              const SizedBox(height: 32),
              _buildSearchBar(context),
              const SizedBox(height: 32),
              _buildCategories(context),
              const SizedBox(height: 40),
              _buildSectionTitle(context, 'Curated for you', 'See all'),
              const SizedBox(height: 20),
              _buildPopularHotels(context),
              const SizedBox(height: 80),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeader(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(24, 24, 24, 0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                tr('Discover'),
                style: Theme.of(context).textTheme.displaySmall?.copyWith(
                  fontWeight: FontWeight.bold,
                  letterSpacing: -0.5,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                tr('Luxurious stays await you'),
                style: TextStyle(
                  fontSize: 15,
                  color: Colors.grey.shade500,
                  letterSpacing: 0.2,
                ),
              ),
            ],
          ),
          Container(
            width: 54,
            height: 54,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: Theme.of(context).colorScheme.secondary.withOpacity(0.5), width: 2),
              image: const DecorationImage(
                image: NetworkImage(
                    'https://ui-avatars.com/api/?name=Nguyen+Khach&background=0F172A&color=D4AF37&bold=true'),
                fit: BoxFit.cover,
              ),
              boxShadow: [
                BoxShadow(
                  color: Theme.of(context).colorScheme.primary.withOpacity(0.2),
                  blurRadius: 15,
                  offset: const Offset(0, 5),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSearchBar(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24.0),
      child: Container(
        height: 60,
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surface,
          borderRadius: BorderRadius.circular(30),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.04),
              blurRadius: 20,
              offset: const Offset(0, 10),
            ),
          ],
        ),
        child: Row(
          children: [
            const SizedBox(width: 24),
            Icon(Icons.search, color: Theme.of(context).colorScheme.primary, size: 22),
            const SizedBox(width: 12),
            Expanded(
              child: TextField(
                onChanged: (value) {
                  _currentCriteria = _currentCriteria.copyWith(query: value);
                  _fetchHotels();
                },
                style: const TextStyle(fontSize: 16),
                decoration: InputDecoration(
                  hintText: tr('Where to next?'),
                  hintStyle: TextStyle(color: Colors.grey.shade400, fontSize: 15),
                  border: InputBorder.none,
                ),
              ),
            ),
            Container(
              width: 1,
              height: 24,
              color: Colors.grey.shade200,
            ),
            IconButton(
              icon: Icon(Icons.tune, color: Theme.of(context).colorScheme.secondary),
              onPressed: _openFilterSheet,
              padding: const EdgeInsets.symmetric(horizontal: 16),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCategories(BuildContext context) {
    final categories = [
      {'icon': Icons.hotel_outlined, 'label': 'Hotel'},
      {'icon': Icons.beach_access_outlined, 'label': 'Resort'},
      {'icon': Icons.home_work_outlined, 'label': 'Villa'},
      {'icon': Icons.apartment_outlined, 'label': 'Apartment'},
    ];

    return SizedBox(
      height: 90,
      child: ListView.separated(
        padding: const EdgeInsets.symmetric(horizontal: 24.0),
        scrollDirection: Axis.horizontal,
        physics: const BouncingScrollPhysics(),
        itemCount: categories.length,
        separatorBuilder: (context, index) => const SizedBox(width: 20),
        itemBuilder: (context, index) {
          final cat = categories[index];
          final isSelected = _currentCriteria.category == cat['label'];

          return GestureDetector(
            onTap: () {
              setState(() {
                _currentCriteria = _currentCriteria.copyWith(category: cat['label'] as String);
              });
              _fetchHotels();
            },
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  width: 60,
                  height: 60,
                  decoration: BoxDecoration(
                    color: isSelected ? Theme.of(context).colorScheme.primary : Theme.of(context).colorScheme.surface,
                    shape: BoxShape.circle,
                    boxShadow: isSelected ? [
                      BoxShadow(
                        color: Theme.of(context).colorScheme.primary.withOpacity(0.3),
                        blurRadius: 12,
                        offset: const Offset(0, 6),
                      )
                    ] : [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.03),
                        blurRadius: 10,
                        offset: const Offset(0, 4),
                      )
                    ],
                  ),
                  child: Icon(
                    cat['icon'] as IconData,
                    size: 24,
                    color: isSelected ? Theme.of(context).colorScheme.secondary : Colors.grey.shade500,
                  ),
                ),
                const SizedBox(height: 10),
                Text(
                  tr(cat['label'] as String),
                  style: TextStyle(
                    color: isSelected ? Theme.of(context).colorScheme.primary : Colors.grey.shade600,
                    fontWeight: isSelected ? FontWeight.bold : FontWeight.w500,
                    fontSize: 13,
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildSectionTitle(BuildContext context, String title, String action) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Text(
            tr(title), 
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
              fontWeight: FontWeight.bold,
              letterSpacing: -0.3,
            )
          ),
          Text(
            tr(action), 
            style: TextStyle(
              fontSize: 14, 
              color: Theme.of(context).colorScheme.secondary,
              fontWeight: FontWeight.bold,
            )
          ),
        ],
      ),
    );
  }

  Widget _buildPopularHotels(BuildContext context) {
    return FutureBuilder<List<HotelModel>>(
      future: _popularHotelsFuture,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const SizedBox(
            height: 320,
            child: Center(child: CircularProgressIndicator(strokeWidth: 2)),
          );
        } else if (snapshot.hasError) {
          return const SizedBox(
            height: 320,
            child: Center(child: Text('Đã có lỗi xảy ra!')),
          );
        } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
          return const SizedBox(
            height: 320,
            child: Center(child: Text('Không tìm thấy kết quả nào phù hợp')),
          );
        }

        final hotels = snapshot.data!;
        
        return SizedBox(
          height: 340,
          child: ListView.separated(
            padding: const EdgeInsets.symmetric(horizontal: 24.0),
            scrollDirection: Axis.horizontal,
            physics: const BouncingScrollPhysics(),
            itemCount: hotels.length,
            separatorBuilder: (context, index) => const SizedBox(width: 20),
            itemBuilder: (context, index) {
              final hotel = hotels[index];
              return HotelCard(
                hotel: hotel, 
                imageUrl: 'assets/images/hotel_exterior.png', // Fallback image
              );
            },
          ),
        );
      },
    );
  }
}
