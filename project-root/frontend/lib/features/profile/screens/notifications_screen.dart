import 'package:flutter/material.dart';

class NotificationsScreen extends StatelessWidget {
  const NotificationsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(
        title: const Text('Notifications', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black),
      ),
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          _buildNotificationItem(
            context,
            icon: Icons.check_circle,
            color: Colors.green,
            title: 'Booking Confirmed!',
            subtitle: 'Your booking at Vinpearl Landmark 81 is confirmed.',
            time: '2 hours ago',
            isNew: true,
          ),
          const SizedBox(height: 16),
          _buildNotificationItem(
            context,
            icon: Icons.local_offer,
            color: Colors.orange,
            title: 'Special Deal for Gold Members',
            subtitle: 'Get 20% off for any resort booking this weekend.',
            time: 'Yesterday',
            isNew: false,
          ),
          const SizedBox(height: 16),
          _buildNotificationItem(
            context,
            icon: Icons.stars,
            color: Colors.amber,
            title: 'You earned 500 points!',
            subtitle: 'Points from your recent stay have been added.',
            time: '3 days ago',
            isNew: false,
          ),
        ],
      ),
    );
  }

  Widget _buildNotificationItem(
    BuildContext context, {
    required IconData icon,
    required Color color,
    required String title,
    required String subtitle,
    required String time,
    required bool isNew,
  }) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isNew ? color.withOpacity(0.05) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: isNew ? color.withOpacity(0.3) : Colors.grey.shade200),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: color.withOpacity(0.1),
              shape: BoxShape.circle,
            ),
            child: Icon(icon, color: color, size: 24),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                const SizedBox(height: 4),
                Text(subtitle, style: TextStyle(color: Colors.grey.shade600, height: 1.4)),
                const SizedBox(height: 8),
                Text(time, style: TextStyle(color: Colors.grey.shade400, fontSize: 12)),
              ],
            ),
          ),
          if (isNew)
            Container(
              width: 8,
              height: 8,
              decoration: const BoxDecoration(
                color: Colors.red,
                shape: BoxShape.circle,
              ),
            ),
        ],
      ),
    );
  }
}
