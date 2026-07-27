import 'package:flutter/material.dart';
import '../../../data/models/hotel_model.dart';
import '../../../data/repositories/hotel_repository.dart';
import '../../../data/models/filter_criteria.dart';
import '../../home/widgets/hotel_card.dart';
import '../../../core/favorite_service.dart';

class SavedScreen extends StatefulWidget {
  const SavedScreen({super.key});

  @override
  State<SavedScreen> createState() => _SavedScreenState();
}

class _SavedScreenState extends State<SavedScreen> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(
        title: const Text('Saved Hotels', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24)),
        centerTitle: false,
        backgroundColor: Colors.transparent,
        elevation: 0,
        automaticallyImplyLeading: false,
      ),
      body: AnimatedBuilder(
        animation: FavoriteService.instance,
        builder: (context, child) {
          final hotels = FavoriteService.instance.savedHotels;

          if (hotels.isEmpty) {
            return _buildEmptyState();
          }

          return ListView.separated(
            padding: const EdgeInsets.all(24),
            itemCount: hotels.length,
            separatorBuilder: (context, index) => const SizedBox(height: 24),
            itemBuilder: (context, index) {
              final hotel = hotels[index];
              return SizedBox(
                height: 280,
                child: HotelCard(
                  hotel: hotel,
                  imageUrl: 'assets/images/hotel_exterior.png',
                ),
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
