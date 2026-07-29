import 'package:flutter/material.dart';
import '../../../data/models/hotel_model.dart';
import '../../../data/repositories/hotel_repository.dart';
import '../../../data/models/filter_criteria.dart';
import '../widgets/hotel_card.dart';
import 'filter_full_screen.dart';
import 'map_screen.dart';
import '../../../core/app_settings.dart';
import 'package:geolocator/geolocator.dart';


class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final HotelRepository _hotelRepo = ApiHotelRepository();
  final ScrollController _scrollController = ScrollController();
  
  FilterCriteria _currentCriteria = const FilterCriteria();
  
  List<HotelModel> _hotels = [];
  int _currentPage = 1;
  bool _isLoading = false;
  bool _hasMore = true;
  Position? _userPosition;

  @override
  void initState() {
    super.initState();
    _fetchHotels(isRefresh: true);
    _determinePosition();
    
    _scrollController.addListener(() {
      if (_scrollController.position.pixels >= _scrollController.position.maxScrollExtent - 200) {
        if (!_isLoading && _hasMore) {
          _fetchHotels(isRefresh: false);
        }
      }
    });
  }

  Future<void> _determinePosition() async {
    try {
      bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
      if (!serviceEnabled) return;

      LocationPermission permission = await Geolocator.checkPermission();
      if (permission == LocationPermission.denied) {
        permission = await Geolocator.requestPermission();
        if (permission == LocationPermission.denied) return;
      }
      
      if (permission == LocationPermission.deniedForever) return;

      final position = await Geolocator.getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
      if (mounted) {
        setState(() {
          _userPosition = position;
        });
      }
    } catch (e) {
      debugPrint('Error getting location: $e');
    }
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> _fetchHotels({bool isRefresh = false}) async {
    if (isRefresh) {
      setState(() {
        _currentPage = 1;
        _hasMore = true;
        _hotels = [];
      });
    }

    if (!_hasMore || _isLoading) return;

    setState(() {
      _isLoading = true;
    });

    try {
      final newHotels = await _hotelRepo.getPopularHotels(_currentCriteria, page: _currentPage, limit: 6);
      
      setState(() {
        _currentPage++;
        _isLoading = false;
        if (newHotels.isEmpty || newHotels.length < 6) {
          _hasMore = false;
        }
        _hotels.addAll(newHotels);
      });
    } catch (e) {
      setState(() {
        _isLoading = false;
      });
    }
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
      _fetchHotels(isRefresh: true);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      floatingActionButton: Padding(
        padding: const EdgeInsets.only(bottom: 70.0),
        child: FloatingActionButton.extended(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => MapScreen(hotels: _hotels, userPosition: _userPosition)),
            );
          },
          backgroundColor: Theme.of(context).colorScheme.primary,
          icon: const Icon(Icons.map_outlined, color: Colors.white),
          label: Text(tr('Map View'), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, letterSpacing: 0.5)),
          elevation: 8,
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          controller: _scrollController,
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
              _buildSectionTitle(context, 'Curated for you'),
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
          Row(
            children: [

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
                  _fetchHotels(isRefresh: true);
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
      {'icon': Icons.grid_view_outlined, 'label': 'All'},
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
              _fetchHotels(isRefresh: true);
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

  Widget _buildSectionTitle(BuildContext context, String title, [String? action]) {
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
          if (action != null)
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
    if (_hotels.isEmpty && _isLoading) {
      return const SizedBox(
        height: 320,
        child: Center(child: CircularProgressIndicator(strokeWidth: 2)),
      );
    }

    if (_hotels.isEmpty && !_isLoading) {
      return SizedBox(
        height: 320,
        child: Center(child: Text(tr('Không tìm thấy kết quả nào phù hợp'))),
      );
    }

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24.0),
      child: Column(
        children: [
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: _hotels.length,
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,
              childAspectRatio: 0.75, // Adjust this to match your card's aspect ratio
              crossAxisSpacing: 16,
              mainAxisSpacing: 16,
            ),
            itemBuilder: (context, index) {
              final hotel = _hotels[index];
              return HotelCard(
                hotel: hotel, 
                imageUrl: 'assets/images/hotel_exterior.png', 
                userPosition: _userPosition,
              );
            },
          ),
          if (_isLoading)
            const Padding(
              padding: EdgeInsets.symmetric(vertical: 24.0),
              child: Center(child: CircularProgressIndicator(strokeWidth: 2)),
            ),
        ],
      ),
    );
  }
}
