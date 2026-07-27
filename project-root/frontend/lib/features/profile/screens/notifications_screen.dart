import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../../../core/notification_service.dart';
import '../../../data/models/notification_model.dart';

class NotificationsScreen extends StatefulWidget {
  const NotificationsScreen({super.key});

  @override
  State<NotificationsScreen> createState() => _NotificationsScreenState();
}

class _NotificationsScreenState extends State<NotificationsScreen> {
  List<AppNotificationModel> _notifications = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _fetchNotifications();
  }

  Future<void> _fetchNotifications() async {
    setState(() => _isLoading = true);
    final data = await NotificationService.instance.getUserNotifications(limit: 50);
    setState(() {
      _notifications = data;
      _isLoading = false;
    });
  }

  Future<void> _markAllAsRead() async {
    final success = await NotificationService.instance.markAllAsRead();
    if (success) {
      setState(() {
        for (var i = 0; i < _notifications.length; i++) {
          _notifications[i] = AppNotificationModel(
            id: _notifications[i].id,
            userId: _notifications[i].userId,
            title: _notifications[i].title,
            content: _notifications[i].content,
            type: _notifications[i].type,
            isRead: true,
            createdAt: _notifications[i].createdAt,
          );
        }
      });
    }
  }

  Future<void> _markAsRead(AppNotificationModel notif, int index) async {
    if (notif.isRead) return;
    final success = await NotificationService.instance.markAsRead(notif.id);
    if (success) {
      setState(() {
        _notifications[index] = AppNotificationModel(
          id: notif.id,
          userId: notif.userId,
          title: notif.title,
          content: notif.content,
          type: notif.type,
          isRead: true,
          createdAt: notif.createdAt,
        );
      });
    }
  }

  Future<void> _deleteNotification(String id, int index) async {
    final success = await NotificationService.instance.deleteNotification(id);
    if (success) {
      setState(() {
        _notifications.removeAt(index);
      });
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Notification deleted')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(
        title: const Text('Notifications', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black),
        actions: [
          IconButton(
            icon: const Icon(Icons.done_all, color: Colors.blue),
            tooltip: 'Mark all as read',
            onPressed: _notifications.any((n) => !n.isRead) ? _markAllAsRead : null,
          ),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _notifications.isEmpty
              ? const Center(child: Text('No notifications yet', style: TextStyle(fontSize: 16, color: Colors.grey)))
              : RefreshIndicator(
                  onRefresh: _fetchNotifications,
                  child: ListView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: _notifications.length,
                    itemBuilder: (context, index) {
                      final notif = _notifications[index];
                      return Padding(
                        padding: const EdgeInsets.only(bottom: 12.0),
                        child: GestureDetector(
                          onTap: () => _markAsRead(notif, index),
                          child: Dismissible(
                            key: Key(notif.id),
                            direction: DismissDirection.endToStart,
                            background: Container(
                              alignment: Alignment.centerRight,
                              padding: const EdgeInsets.only(right: 20),
                              decoration: BoxDecoration(
                                color: Colors.red,
                                borderRadius: BorderRadius.circular(16),
                              ),
                              child: const Icon(Icons.delete, color: Colors.white),
                            ),
                            onDismissed: (_) => _deleteNotification(notif.id, index),
                            child: _buildNotificationItem(
                              context,
                              notif: notif,
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
    );
  }

  Widget _buildNotificationItem(BuildContext context, {required AppNotificationModel notif}) {
    IconData icon;
    Color color;

    switch (notif.type.toUpperCase()) {
      case 'BOOKING':
        icon = Icons.check_circle;
        color = Colors.green;
        break;
      case 'PROMOTION':
        icon = Icons.local_offer;
        color = Colors.orange;
        break;
      case 'SYSTEM':
      default:
        icon = Icons.info;
        color = Colors.blue;
        break;
    }

    final time = DateFormat('MMM dd, hh:mm a').format(notif.createdAt.toLocal());
    final isNew = !notif.isRead;

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
                Text(notif.title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                const SizedBox(height: 4),
                Text(notif.content, style: TextStyle(color: Colors.grey.shade600, height: 1.4)),
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
