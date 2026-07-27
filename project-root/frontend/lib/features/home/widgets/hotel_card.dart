import 'package:flutter/material.dart';
import 'package:cached_network_image/cached_network_image.dart';
import '../../../data/models/hotel_model.dart';
import '../screens/hotel_detail_screen.dart';
import '../../../core/app_settings.dart';
import '../../../core/favorite_service.dart';
import 'package:geolocator/geolocator.dart';

class HotelCard extends StatelessWidget {
  final HotelModel hotel;
  final String imageUrl; // Fallback image
  final Position? userPosition;

  const HotelCard({
    super.key,
    required this.hotel,
    required this.imageUrl,
    this.userPosition,
  });

  String _getDistanceText() {
    if (userPosition == null || hotel.latitude == null || hotel.longitude == null) {
      return '${hotel.distanceToCenter} km ${tr('from center')}';
    }
    double distanceInMeters = Geolocator.distanceBetween(
      userPosition!.latitude, 
      userPosition!.longitude, 
      hotel.latitude!, 
      hotel.longitude!
    );
    return '${(distanceInMeters / 1000).toStringAsFixed(1)} km ${tr('away')}';
  }

  @override
  Widget build(BuildContext context) {
    // Lấy ảnh thật từ server nếu có, nếu không thì dùng ảnh asset
    final hasRealImage = hotel.images.isNotEmpty;
    final displayImageUrl = hasRealImage ? hotel.images.first : imageUrl;

    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          PageRouteBuilder(
            transitionDuration: const Duration(milliseconds: 500),
            pageBuilder: (context, animation, secondaryAnimation) => 
                HotelDetailScreen(hotel: hotel, imageUrl: displayImageUrl),
            transitionsBuilder: (context, animation, secondaryAnimation, child) {
              return FadeTransition(opacity: animation, child: child);
            },
          ),
        );
      },
      child: Container(
        width: 260,
        margin: const EdgeInsets.only(bottom: 8),
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surface,
          borderRadius: BorderRadius.circular(24),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.08),
              blurRadius: 20,
              offset: const Offset(0, 10),
            ),
          ],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(24),
          child: Stack(
            children: [
              // Hero Image
              Positioned.fill(
                child: Hero(
                  tag: 'hotel_image_${hotel.id}',
                  child: hasRealImage
                      ? CachedNetworkImage(
                          imageUrl: displayImageUrl,
                          fit: BoxFit.cover,
                          placeholder: (context, url) => Container(
                            color: Colors.grey.shade200,
                            child: const Center(child: CircularProgressIndicator()),
                          ),
                          errorWidget: (context, url, error) => Container(
                            color: Colors.grey.shade200,
                            child: const Icon(Icons.broken_image, color: Colors.grey),
                          ),
                        )
                      : Image.asset(displayImageUrl, fit: BoxFit.cover),
                ),
              ),

              // Gradient Overlay cho phần chữ dễ đọc
              Positioned.fill(
                child: Container(
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: [
                        Colors.transparent,
                        Colors.black.withOpacity(0.2),
                        Colors.black.withOpacity(0.8),
                      ],
                      stops: const [0.4, 0.7, 1.0],
                    ),
                  ),
                ),
              ),

              // Nút Favorite Glassmorphism
              Positioned(
                top: 16,
                right: 16,
                child: AnimatedBuilder(
                  animation: FavoriteService.instance,
                  builder: (context, child) {
                    final isSaved = FavoriteService.instance.isSaved(hotel.id);
                    return GestureDetector(
                      onTap: () {
                        FavoriteService.instance.toggleFavorite(hotel);
                      },
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(20),
                        child: Container(
                          padding: const EdgeInsets.all(8),
                          color: Colors.white.withOpacity(0.2),
                          child: Icon(
                            isSaved ? Icons.favorite : Icons.favorite_border,
                            size: 22,
                            color: isSaved ? Colors.red : Colors.white,
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),

              // Thông tin Hotel
              Positioned(
                bottom: 16,
                left: 16,
                right: 16,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      hotel.name,
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                        color: Colors.white,
                        fontSize: 18,
                        shadows: [Shadow(color: Colors.black.withOpacity(0.5), blurRadius: 4)],
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    const SizedBox(height: 6),
                    Row(
                      children: [
                        const Icon(Icons.location_on_outlined, size: 14, color: Colors.white70),
                        const SizedBox(width: 4),
                        Expanded(
                          child: Text(
                            hotel.address,
                            style: const TextStyle(
                              fontSize: 12,
                              color: Colors.white70,
                            ),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 4),
                    Row(
                      children: [
                        const Icon(Icons.directions_walk, size: 14, color: Colors.white70),
                        const SizedBox(width: 4),
                        Text(
                          _getDistanceText(),
                          style: const TextStyle(fontSize: 12, color: Colors.white70),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        Row(
                          children: [
                            const Icon(Icons.star, size: 16, color: Color(0xFFD4AF37)),
                            const SizedBox(width: 4),
                            Text(
                              hotel.rating.toString(),
                              style: const TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                          ],
                        ),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            const Text(
                              'Starts from',
                              style: TextStyle(
                                fontSize: 10,
                                color: Colors.white70,
                              ),
                            ),
                            Text(
                              '\$${hotel.priceFrom.round()}',
                              style: const TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: Color(0xFFD4AF37), // Champagne Gold
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
