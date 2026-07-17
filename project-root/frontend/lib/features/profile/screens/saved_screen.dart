import 'package:flutter/material.dart';
import '../../../data/models/hotel_model.dart';
import '../../../data/repositories/hotel_repository.dart';
import '../../../data/models/filter_criteria.dart';
import '../../home/widgets/hotel_card.dart';

class SavedScreen extends StatefulWidget {
  const SavedScreen({super.key});

  @override
  State<SavedScreen> createState() => _SavedScreenState();
}

class _SavedScreenState extends State<SavedScreen> {
  final HotelRepository _hotelRepo = MockHotelRepository();
  late Future<List<HotelModel>> _savedHotelsFuture;

  @override
  void initState() {
    super.initState();
    // Lấy danh sách khách sạn và lọc ra những khách sạn có isSaved = true
    _savedHotelsFuture = _hotelRepo.getPopularHotels(const FilterCriteria()).then((hotels) {
      return hotels.where((h) => h.isSaved).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(
        title: const Text('Saved Hotels', style: TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: true,
        backgroundColor: Colors.white,
        elevation: 0,
        automaticallyImplyLeading: false,
      ),
      body: FutureBuilder<List<HotelModel>>(
        future: _savedHotelsFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return _buildEmptyState();
          }

          final hotels = snapshot.data!;
          return StatefulBuilder(
            builder: (context, setInnerState) {
              return ListView.separated(
                padding: const EdgeInsets.all(24),
                itemCount: hotels.length,
                separatorBuilder: (context, index) => const SizedBox(height: 24),
                itemBuilder: (context, index) {
                  final hotel = hotels[index];
                  return Dismissible(
                    key: Key(hotel.id),
                    direction: DismissDirection.endToStart,
                    onDismissed: (direction) {
                      setInnerState(() {
                        hotels.removeAt(index);
                      });
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(content: Text('${hotel.name} removed from saved list')),
                      );
                    },
                    background: Container(
                      decoration: BoxDecoration(
                        color: Colors.red.shade400,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      alignment: Alignment.centerRight,
                      padding: const EdgeInsets.only(right: 24),
                      child: const Icon(Icons.delete_outline, color: Colors.white, size: 32),
                    ),
                    child: SizedBox(
                      height: 280,
                      child: HotelCard(
                        hotel: hotel,
                        imageUrl: 'assets/images/hotel_exterior.png',
                      ),
                    ),
                  );
                },
              );
            },
          );
        },
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.favorite_border, size: 80, color: Colors.grey.shade300),
          const SizedBox(height: 24),
          const Text(
            'No Saved Hotels',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 8),
          Text(
            'Start exploring and save your favorite\nluxury places to stay.',
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.grey.shade600, fontSize: 16),
          ),
        ],
      ),
    );
  }
}
