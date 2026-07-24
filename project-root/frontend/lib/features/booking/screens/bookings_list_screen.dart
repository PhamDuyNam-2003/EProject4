import 'package:flutter/material.dart';

import '../../../core/booking_service.dart';
import '../../../data/models/booking_model.dart';
import 'package:intl/intl.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'booking_detail_screen.dart';
import '../../../core/app_settings.dart';

class BookingsListScreen extends StatefulWidget {
  const BookingsListScreen({super.key});

  @override
  State<BookingsListScreen> createState() => _BookingsListScreenState();
}

class _BookingsListScreenState extends State<BookingsListScreen> with WidgetsBindingObserver {
  late Future<List<BookingModel>> _bookingsFuture;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _fetchBookings();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      // Tự động refresh khi người dùng quay lại tab này (ví dụ từ VNPay)
      _fetchBookings();
    }
  }

  void _fetchBookings() {
    setState(() {
      _bookingsFuture = BookingService.instance.getMyBookings().then(
        (data) => data.map((e) => BookingModel.fromJson(e)).toList(),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        title: Text(tr('My Bookings'), style: const TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: true,
        backgroundColor: Colors.white,
        elevation: 0,
        automaticallyImplyLeading: false,
      ),
      body: FutureBuilder<List<BookingModel>>(
        future: _bookingsFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          }

          final bookings = snapshot.data ?? [];
          
          final upcoming = bookings.where((b) => b.status == BookingStatus.PENDING || b.status == BookingStatus.CONFIRMED).toList();
          final completed = bookings.where((b) => b.status == BookingStatus.COMPLETED || b.status == BookingStatus.CHECKED_IN).toList();
          final cancelled = bookings.where((b) => b.status == BookingStatus.CANCELLED).toList();

          return DefaultTabController(
            length: 3,
            child: Column(
              children: [
                Container(
                  color: Colors.white,
                  child: TabBar(
                    labelColor: Theme.of(context).colorScheme.primary,
                    unselectedLabelColor: Colors.grey,
                    indicatorColor: Theme.of(context).colorScheme.primary,
                    tabs: [
                      Tab(text: tr('Upcoming')),
                      Tab(text: tr('Completed')),
                      Tab(text: tr('Cancelled')),
                    ],
                  ),
                ),
                Expanded(
                  child: TabBarView(
                    children: [
                      _BookingsListTab(bookings: upcoming, emptyMessage: tr('No upcoming bookings.')),
                      _BookingsListTab(bookings: completed, emptyMessage: tr('No completed bookings.')),
                      _BookingsListTab(bookings: cancelled, emptyMessage: tr('No cancelled bookings.')),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

class _BookingsListTab extends StatelessWidget {
  final List<BookingModel> bookings;
  final String emptyMessage;

  const _BookingsListTab({required this.bookings, required this.emptyMessage});

  @override
  Widget build(BuildContext context) {
    if (bookings.isEmpty) {
      return Center(
        child: Text(emptyMessage, style: TextStyle(color: Colors.grey.shade600)),
      );
    }

    return ListView.separated(
      padding: const EdgeInsets.all(24),
      itemCount: bookings.length,
      separatorBuilder: (context, index) => const SizedBox(height: 16),
      itemBuilder: (context, index) {
        final booking = bookings[index];
        final formatter = DateFormat('MMM dd, yyyy');
        final dateStr = '${formatter.format(booking.checkInDate)} - ${formatter.format(booking.checkOutDate)}';
        
        Color statusColor;
        String statusText;
        if (booking.status == BookingStatus.CONFIRMED) {
          statusColor = Colors.green;
          statusText = tr('Confirmed');
        } else if (booking.status == BookingStatus.CANCELLED) {
          if (booking.paymentStatus == PaymentStatus.REFUNDING) {
            statusColor = Colors.deepOrange;
            statusText = tr('Refunding');
          } else if (booking.paymentStatus == PaymentStatus.REFUNDED) {
            statusColor = Colors.purple;
            statusText = tr('Refunded');
          } else {
            statusColor = Colors.red;
            statusText = tr('Cancelled');
          }
        } else if (booking.status == BookingStatus.PENDING) {
          statusColor = Colors.orange;
          statusText = booking.paymentStatus == PaymentStatus.PAID ? tr('Paid - Pending') : tr('Unpaid');
        } else {
          statusColor = Colors.blue;
          statusText = tr(booking.status.toString().split('.').last);
        }

        return _buildBookingCard(
          context,
          booking: booking,
          hotelName: booking.hotel?.name ?? 'Hotel ${booking.hotelId}',
          status: statusText,
          statusColor: statusColor,
          date: dateStr,
          room: booking.hotel?.address ?? 'Luxury Room', // Tạm thời dùng address hoặc default
          price: booking.finalAmount,
        );
      },
    );
  }

  Widget _buildBookingCard(BuildContext context, {
    required BookingModel booking,
    required String hotelName,
    required String status,
    required Color statusColor,
    required String date,
    required String room,
    required double price,
  }) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => BookingDetailScreen(booking: booking)),
        );
      },
      child: Container(
        decoration: BoxDecoration(
          color: Theme.of(context).cardColor,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: Colors.grey.withOpacity(0.1)),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.03),
              blurRadius: 20,
              offset: const Offset(0, 10),
            ),
          ],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: Column(
            children: [
              // Top Section with Image and Status
              Stack(
                children: [
                  booking.hotel?.images != null && booking.hotel!.images.isNotEmpty 
                  ? CachedNetworkImage(
                      imageUrl: booking.hotel!.images.first,
                      height: 120,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    )
                  : Image.asset(
                      'assets/images/hotel_exterior.png',
                      height: 120,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    ),
                  Container(
                    height: 120,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [
                          Colors.black.withOpacity(0.4),
                          Colors.transparent,
                          Colors.black.withOpacity(0.6),
                        ],
                      ),
                    ),
                  ),
                  Positioned(
                    top: 12,
                    right: 12,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.9),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Text(
                        status,
                        style: TextStyle(
                          color: statusColor,
                          fontWeight: FontWeight.bold,
                          fontSize: 12,
                          letterSpacing: 0.5,
                        ),
                      ),
                    ),
                  ),
                  Positioned(
                    bottom: 12,
                    left: 16,
                    right: 16,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Expanded(
                          child: Text(
                            hotelName,
                            style: const TextStyle(
                              color: Colors.white,
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              shadows: [
                                Shadow(color: Colors.black45, blurRadius: 4, offset: Offset(0, 2))
                              ],
                            ),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              // Bottom Section with Details
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        const Icon(Icons.king_bed_outlined, size: 20, color: Color(0xFFD4AF37)),
                        const SizedBox(width: 8),
                        Text(
                          room,
                          style: TextStyle(fontSize: 15, fontWeight: FontWeight.w500, color: Colors.grey.shade800),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    Row(
                      children: [
                        const Icon(Icons.date_range_outlined, size: 20, color: Colors.grey),
                        const SizedBox(width: 8),
                        Text(
                          date,
                          style: TextStyle(color: Colors.grey.shade600, fontSize: 14),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),
                    const Divider(height: 1),
                    const SizedBox(height: 16),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          'Total Price',
                          style: TextStyle(color: Colors.grey.shade600, fontSize: 14),
                        ),
                        Text(
                          '\$${price.toStringAsFixed(2)}',
                          style: const TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFFD4AF37),
                          ),
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
