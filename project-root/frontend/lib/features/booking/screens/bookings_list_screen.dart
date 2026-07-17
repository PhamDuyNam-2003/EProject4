import 'package:flutter/material.dart';

class BookingsListScreen extends StatelessWidget {
  const BookingsListScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        title: const Text('My Bookings', style: TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: true,
        backgroundColor: Colors.white,
        elevation: 0,
        automaticallyImplyLeading: false,
      ),
      body: DefaultTabController(
        length: 3,
        child: Column(
          children: [
            Container(
              color: Colors.white,
              child: TabBar(
                labelColor: Theme.of(context).colorScheme.primary,
                unselectedLabelColor: Colors.grey,
                indicatorColor: Theme.of(context).colorScheme.primary,
                tabs: const [
                  Tab(text: 'Upcoming'),
                  Tab(text: 'Completed'),
                  Tab(text: 'Cancelled'),
                ],
              ),
            ),
            const Expanded(
              child: TabBarView(
                children: [
                  _UpcomingBookingsList(),
                  _CompletedBookingsList(),
                  _CancelledBookingsList(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _UpcomingBookingsList extends StatelessWidget {
  const _UpcomingBookingsList();

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      padding: const EdgeInsets.all(24),
      itemCount: 1,
      separatorBuilder: (context, index) => const SizedBox(height: 16),
      itemBuilder: (context, index) {
        return _buildBookingCard(
          context,
          hotelName: 'Vinpearl Landmark 81',
          status: 'Confirmed',
          statusColor: Colors.green,
          date: 'Aug 01, 2026 - Aug 05, 2026',
          room: 'Phòng Tổng Thống',
        );
      },
    );
  }

  Widget _buildBookingCard(BuildContext context, {
    required String hotelName,
    required String status,
    required Color statusColor,
    required String date,
    required String room,
  }) {
    return Container(
      padding: const EdgeInsets.all(16),
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
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: statusColor.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  status,
                  style: TextStyle(color: statusColor, fontWeight: FontWeight.bold, fontSize: 12),
                ),
              ),
              const Icon(Icons.more_horiz, color: Colors.grey),
            ],
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  'assets/images/hotel_exterior.png',
                  width: 60,
                  height: 60,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      hotelName,
                      style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      room,
                      style: TextStyle(color: Colors.grey.shade600, fontSize: 14),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          const Divider(),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  const Icon(Icons.calendar_today, size: 16, color: Colors.grey),
                  const SizedBox(width: 8),
                  Text(
                    date,
                    style: TextStyle(color: Colors.grey.shade800, fontSize: 14),
                  ),
                ],
              ),
              Text(
                '\$440',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 16,
                  color: Theme.of(context).colorScheme.primary,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _CompletedBookingsList extends StatelessWidget {
  const _CompletedBookingsList();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text('No completed bookings yet.', style: TextStyle(color: Colors.grey.shade600)),
    );
  }
}

class _CancelledBookingsList extends StatelessWidget {
  const _CancelledBookingsList();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text('No cancelled bookings yet.', style: TextStyle(color: Colors.grey.shade600)),
    );
  }
}
