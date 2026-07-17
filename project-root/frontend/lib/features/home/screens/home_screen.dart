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
  final HotelRepository _hotelRepo = MockHotelRepository();
  
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
      backgroundColor: Theme.of(context).colorScheme.surface,
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () async {
          // Lấy danh sách khách sạn hiện tại từ Future
          final hotels = await _popularHotelsFuture;
          if (mounted) {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => MapScreen(hotels: hotels)),
            );
          }
        },
        backgroundColor: Colors.black87,
        icon: const Icon(Icons.map, color: Colors.white),
        label: const Text('Map', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildHeader(context),
              const SizedBox(height: 24),
              _buildSearchBar(context),
              const SizedBox(height: 24),
              _buildCategories(context),
              const SizedBox(height: 32),
              _buildSectionTitle(context, 'Popular ${_currentCriteria.category}', 'See All'),
              const SizedBox(height: 16),
              _buildPopularHotels(context),
              const SizedBox(height: 32),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeader(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                tr('Good morning,'),
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey.shade600,
                  fontWeight: FontWeight.w500,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                'Nguyễn Văn Khách 👋',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Theme.of(context).colorScheme.onSurface,
                ),
              ),
            ],
          ),
          Container(
            width: 50,
            height: 50,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: Colors.grey.shade200,
              image: const DecorationImage(
                image: NetworkImage(
                    'https://ui-avatars.com/api/?name=Nguyen+Khach&background=1E3A8A&color=fff'),
                fit: BoxFit.cover,
              ),
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
        height: 56,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.05),
              blurRadius: 10,
              offset: const Offset(0, 5),
            ),
          ],
        ),
        child: Row(
          children: [
            const SizedBox(width: 16),
            Icon(Icons.search, color: Colors.grey.shade400),
            const SizedBox(width: 8),
            Expanded(
              child: TextField(
                onChanged: (value) {
                  _currentCriteria = _currentCriteria.copyWith(query: value);
                  _fetchHotels(); // Tìm kiếm real-time
                },
                decoration: InputDecoration(
                  hintText: tr('Where do you want to go?'),
                  hintStyle: TextStyle(color: Colors.grey.shade400, fontSize: 14),
                  border: InputBorder.none,
                ),
              ),
            ),
            Container(
              width: 1,
              height: 30,
              color: Colors.grey.shade200,
            ),
            IconButton(
              icon: Icon(Icons.tune, color: Theme.of(context).colorScheme.primary),
              onPressed: _openFilterSheet, // Mở UI Lọc
            ),
            const SizedBox(width: 4),
          ],
        ),
      ),
    );
  }

  Widget _buildCategories(BuildContext context) {
    final categories = [
      {'icon': Icons.hotel, 'label': 'Hotel'},
      {'icon': Icons.beach_access, 'label': 'Resort'},
      {'icon': Icons.home_work, 'label': 'Villa'},
      {'icon': Icons.apartment, 'label': 'Apartment'},
      {'icon': Icons.home, 'label': 'Homestay'},
    ];

    return SizedBox(
      height: 50,
      child: ListView.separated(
        padding: const EdgeInsets.symmetric(horizontal: 24.0),
        scrollDirection: Axis.horizontal,
        itemCount: categories.length,
        separatorBuilder: (context, index) => const SizedBox(width: 12),
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
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                color: isSelected ? Theme.of(context).colorScheme.primary : Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(
                  color: isSelected ? Theme.of(context).colorScheme.primary : Colors.grey.shade200,
                ),
              ),
              child: Row(
                children: [
                  Icon(
                    cat['icon'] as IconData,
                    size: 18,
                    color: isSelected ? Colors.white : Colors.grey.shade600,
                  ),
                  const SizedBox(width: 8),
                  Text(
                    tr(cat['label'] as String),
                    style: TextStyle(
                      color: isSelected ? Colors.white : Colors.black87,
                      fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                    ),
                  ),
                ],
              ),
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
        children: [
          Text(tr('Popular') + ' ' + tr(_currentCriteria.category), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          Text(tr('See All'), style: TextStyle(fontSize: 14, color: Theme.of(context).colorScheme.secondary)),
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
            height: 280,
            child: Center(child: CircularProgressIndicator()),
          );
        } else if (snapshot.hasError) {
          return const SizedBox(
            height: 280,
            child: Center(child: Text('Đã có lỗi xảy ra!')),
          );
        } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
          return const SizedBox(
            height: 280,
            child: Center(child: Text('Không tìm thấy kết quả nào phù hợp')),
          );
        }

        final hotels = snapshot.data!;
        
        return SizedBox(
          height: 280,
          child: ListView.separated(
            padding: const EdgeInsets.symmetric(horizontal: 24.0),
            scrollDirection: Axis.horizontal,
            itemCount: hotels.length,
            separatorBuilder: (context, index) => const SizedBox(width: 16),
            itemBuilder: (context, index) {
              final hotel = hotels[index];
              return HotelCard(
                hotel: hotel, 
                imageUrl: 'assets/images/hotel_exterior.png',
              );
            },
          ),
        );
      },
    );
  }
}
