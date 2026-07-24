import 'package:flutter/material.dart';
import 'dart:ui' as dart_ui;
import 'package:cached_network_image/cached_network_image.dart';
import 'package:carousel_slider/carousel_slider.dart';
import '../../../data/models/hotel_model.dart';
import '../../booking/screens/booking_screen.dart';
import '../../../core/responsive_wrapper.dart';
import '../../../core/app_settings.dart';
import '../../../data/models/review_model.dart';
import '../../../data/repositories/hotel_repository.dart';

class HotelDetailScreen extends StatefulWidget {
  final HotelModel hotel;
  final String imageUrl; // fallback image

  const HotelDetailScreen({
    super.key,
    required this.hotel,
    required this.imageUrl,
  });

  @override
  State<HotelDetailScreen> createState() => _HotelDetailScreenState();
}

class _HotelDetailScreenState extends State<HotelDetailScreen> {
  int _currentImageIndex = 0;
  final ScrollController _scrollController = ScrollController();
  bool _isLoadingReviews = false;
  List<ReviewModel> reviews = [];
  
  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final images = widget.hotel.images.isNotEmpty ? widget.hotel.images : [widget.imageUrl];
    final bool hasMultipleImages = images.length > 1;

    return ResponsiveWrapper(
      child: Scaffold(
        backgroundColor: Theme.of(context).colorScheme.background,
        body: Stack(
          children: [
            CustomScrollView(
              controller: _scrollController,
              physics: const BouncingScrollPhysics(),
              slivers: [
                SliverAppBar(
                  expandedHeight: 380,
                  pinned: true,
                  backgroundColor: Theme.of(context).colorScheme.surface,
                  elevation: 0,
                  flexibleSpace: FlexibleSpaceBar(
                    background: Stack(
                      children: [
                        Hero(
                          tag: 'hotel_image_${widget.hotel.id}',
                          child: hasMultipleImages 
                            ? CarouselSlider(
                                options: CarouselOptions(
                                  height: 420,
                                  viewportFraction: 1.0,
                                  onPageChanged: (index, reason) {
                                    setState(() {
                                      _currentImageIndex = index;
                                    });
                                  },
                                ),
                                items: images.map((img) {
                                  return _buildNetworkImage(img);
                                }).toList(),
                              )
                            : _buildNetworkImage(images.first),
                        ),
                        
                        // Gradient Overlay for readability at bottom of image
                        Positioned(
                          bottom: 0, left: 0, right: 0,
                          height: 120,
                          child: Container(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                begin: Alignment.bottomCenter,
                                end: Alignment.topCenter,
                                colors: [
                                  Theme.of(context).colorScheme.background,
                                  Theme.of(context).colorScheme.background.withOpacity(0.0),
                                ],
                              ),
                            ),
                          ),
                        ),

                        if (hasMultipleImages)
                          Positioned(
                            bottom: 30,
                            left: 0,
                            right: 0,
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: images.asMap().entries.map((entry) {
                                return Container(
                                  width: _currentImageIndex == entry.key ? 20.0 : 8.0,
                                  height: 4.0,
                                  margin: const EdgeInsets.symmetric(horizontal: 4.0),
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(4.0),
                                    color: _currentImageIndex == entry.key 
                                        ? Theme.of(context).colorScheme.secondary 
                                        : Colors.white.withOpacity(0.5),
                                  ),
                                );
                              }).toList(),
                            ),
                          ),
                      ],
                    ),
                  ),
                  leading: Padding(
                    padding: const EdgeInsets.only(left: 16.0, top: 8.0),
                    child: CircleAvatar(
                      backgroundColor: Colors.white.withOpacity(0.3),
                      child: IconButton(
                        icon: const Icon(Icons.arrow_back_ios_new, color: Colors.white, size: 20),
                        onPressed: () => Navigator.pop(context),
                      ),
                    ),
                  ),
                  actions: [
                    Padding(
                      padding: const EdgeInsets.only(right: 16.0, top: 8.0),
                      child: CircleAvatar(
                        backgroundColor: Colors.white.withOpacity(0.3),
                        child: IconButton(
                          icon: const Icon(Icons.favorite_border, color: Colors.white, size: 22),
                          onPressed: () {},
                        ),
                      ),
                    ),
                  ],
                ),

                SliverToBoxAdapter(
                  child: Container(
                    decoration: BoxDecoration(
                      color: Theme.of(context).colorScheme.background,
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 24.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const SizedBox(height: 10),
                        // Title and Rating
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Expanded(
                              child: Text(
                                widget.hotel.name,
                                style: Theme.of(context).textTheme.displaySmall?.copyWith(
                                  fontSize: 28,
                                  fontWeight: FontWeight.bold,
                                  height: 1.2,
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 16),
                        
                        // Rating & Location Pill
                        Row(
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                              decoration: BoxDecoration(
                                color: Theme.of(context).colorScheme.secondary.withOpacity(0.15),
                                borderRadius: BorderRadius.circular(20),
                              ),
                              child: Row(
                                children: [
                                  Icon(Icons.star, color: Theme.of(context).colorScheme.secondary, size: 16),
                                  const SizedBox(width: 4),
                                  Text(
                                    widget.hotel.rating.toString(),
                                    style: TextStyle(
                                      fontSize: 14,
                                      fontWeight: FontWeight.bold,
                                      color: Theme.of(context).colorScheme.secondary,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Row(
                                children: [
                                  Icon(Icons.location_on_outlined, color: Colors.grey.shade500, size: 18),
                                  const SizedBox(width: 4),
                                  Expanded(
                                    child: Text(
                                      '${widget.hotel.address}',
                                      style: TextStyle(
                                        fontSize: 14,
                                        color: Colors.grey.shade600,
                                        fontWeight: FontWeight.w500,
                                      ),
                                      maxLines: 2,
                                      overflow: TextOverflow.ellipsis,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        
                        const SizedBox(height: 32),
                        const Divider(height: 1),
                        const SizedBox(height: 32),

                        Text(
                          tr('Overview'),
                          style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            fontWeight: FontWeight.bold,
                            fontSize: 20,
                          ),
                        ),
                        const SizedBox(height: 16),
                        Text(
                          widget.hotel.description ?? 'A prestigious hotel offering world-class luxury and unparalleled comfort for you and your family.',
                          style: TextStyle(
                            fontSize: 15,
                            color: Colors.grey.shade600,
                            height: 1.6,
                            letterSpacing: 0.2,
                          ),
                        ),
                        const SizedBox(height: 32),

                        Text(
                          tr('Amenities'),
                          style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            fontWeight: FontWeight.bold,
                            fontSize: 20,
                          ),
                        ),
                        const SizedBox(height: 20),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            _buildFacilityIcon(Icons.wifi, tr('Free Wifi'), context),
                            _buildFacilityIcon(Icons.pool, tr('Pool'), context),
                            _buildFacilityIcon(Icons.restaurant, tr('Restaurant'), context),
                            _buildFacilityIcon(Icons.local_parking, tr('Parking'), context),
                          ],
                        ),
                        
                        // Reviews Section
                        const SizedBox(height: 32),
                        const Divider(height: 1),
                        const SizedBox(height: 32),
                        Text(
                          tr('Guest Reviews'),
                          style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            fontWeight: FontWeight.bold,
                            fontSize: 20,
                          ),
                        ),
                        const SizedBox(height: 16),
                        _isLoadingReviews
                            ? const Center(child: CircularProgressIndicator())
                            : reviews.isEmpty
                                ? Text(
                                    tr('No reviews yet. Be the first to review!'),
                                    style: TextStyle(color: Colors.grey.shade600),
                                  )
                                : ListView.builder(
                                    shrinkWrap: true,
                                    physics: const NeverScrollableScrollPhysics(),
                                    padding: EdgeInsets.zero,
                                    itemCount: reviews.length,
                                    itemBuilder: (context, index) {
                                      final review = reviews[index];
                                      return Container(
                                        margin: const EdgeInsets.only(bottom: 16),
                                        padding: const EdgeInsets.all(16),
                                        decoration: BoxDecoration(
                                          color: Colors.white,
                                          borderRadius: BorderRadius.circular(16),
                                          border: Border.all(color: Colors.grey.shade200),
                                        ),
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          children: [
                                            Row(
                                              children: [
                                                CircleAvatar(
                                                  backgroundColor: Theme.of(context).colorScheme.primary.withOpacity(0.1),
                                                  child: Icon(Icons.person, color: Theme.of(context).colorScheme.primary),
                                                ),
                                                const SizedBox(width: 12),
                                                Expanded(
                                                  child: Column(
                                                    crossAxisAlignment: CrossAxisAlignment.start,
                                                    children: [
                                                      Text('User ${review.userId.substring(0, 5)}...', style: const TextStyle(fontWeight: FontWeight.bold)),
                                                      Text('${review.createdAt.day}/${review.createdAt.month}/${review.createdAt.year}', style: TextStyle(color: Colors.grey.shade500, fontSize: 12)),
                                                    ],
                                                  ),
                                                ),
                                                Row(
                                                  children: [
                                                    Icon(Icons.star, color: Theme.of(context).colorScheme.secondary, size: 16),
                                                    const SizedBox(width: 4),
                                                    Text(review.rating.toString(), style: const TextStyle(fontWeight: FontWeight.bold)),
                                                  ],
                                                ),
                                              ],
                                            ),
                                            const SizedBox(height: 12),
                                            Text(review.comment),
                                          ],
                                        ),
                                      );
                                    },
                                  ),
                        
                        // Extra space for bottom bar
                        const SizedBox(height: 120),
                      ],
                    ),
                  ),
                ),
              ],
            ),

            // Glassmorphic Bottom Bar
            Positioned(
              bottom: 0,
              left: 0,
              right: 0,
              child: ClipRRect(
                child: BackdropFilter(
                  filter: dart_ui.ImageFilter.blur(sigmaX: 15.0, sigmaY: 15.0),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 20.0),
                    decoration: BoxDecoration(
                      color: Theme.of(context).colorScheme.surface.withOpacity(0.85),
                      border: Border(
                        top: BorderSide(color: Colors.grey.withOpacity(0.2), width: 0.5),
                      ),
                    ),
                    child: SafeArea(
                      top: false,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Column(
                            mainAxisSize: MainAxisSize.min,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                tr('Total Price'),
                                style: TextStyle(color: Colors.grey.shade500, fontSize: 13, fontWeight: FontWeight.w500),
                              ),
                              Row(
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [
                                  Text(
                                    '\$${widget.hotel.priceFrom.round()}',
                                    style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                                      fontWeight: FontWeight.bold,
                                      color: Theme.of(context).colorScheme.primary,
                                      height: 1.0,
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(bottom: 2.0, left: 4.0),
                                    child: Text(
                                      tr(' / night'),
                                      style: TextStyle(color: Colors.grey.shade500, fontSize: 14),
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                          ElevatedButton(
                            onPressed: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => BookingScreen(hotel: widget.hotel),
                                ),
                              );
                            },
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Theme.of(context).colorScheme.primary,
                              foregroundColor: Colors.white,
                              padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
                              elevation: 10,
                              shadowColor: Theme.of(context).colorScheme.primary.withOpacity(0.5),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(30),
                              ),
                            ),
                            child: Text(
                              tr('Book Now'),
                              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, letterSpacing: 0.5),
                            ),
                          ),
                        ],
                      ),
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

  Widget _buildNetworkImage(String url) {
    if (url.startsWith('http')) {
      return CachedNetworkImage(
        imageUrl: url,
        fit: BoxFit.cover,
        width: double.infinity,
        placeholder: (context, url) => const Center(child: CircularProgressIndicator()),
        errorWidget: (context, url, error) => Container(
          color: Colors.grey.shade200,
          width: double.infinity,
          child: const Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.broken_image, size: 48, color: Colors.grey),
              SizedBox(height: 8),
              Text('Image not available', style: TextStyle(color: Colors.grey)),
            ],
          ),
        ),
      );
    }
    return Image.asset(url, fit: BoxFit.cover, width: double.infinity);
  }

  Widget _buildFacilityIcon(IconData icon, String label, BuildContext context) {
    return Column(
      children: [
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.primary.withOpacity(0.05),
            shape: BoxShape.circle,
            border: Border.all(color: Theme.of(context).colorScheme.primary.withOpacity(0.1)),
          ),
          child: Icon(icon, color: Theme.of(context).colorScheme.primary, size: 24),
        ),
        const SizedBox(height: 12),
        Text(
          label,
          style: TextStyle(
            fontSize: 13, 
            color: Colors.grey.shade700,
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }
}
