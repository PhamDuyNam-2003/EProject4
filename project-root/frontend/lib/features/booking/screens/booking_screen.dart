import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../../../data/models/hotel_model.dart';
import 'booking_success_screen.dart';
import '../../../core/app_settings.dart';

class BookingScreen extends StatefulWidget {
  final HotelModel hotel;

  const BookingScreen({super.key, required this.hotel});

  @override
  State<BookingScreen> createState() => _BookingScreenState();
}

class _BookingScreenState extends State<BookingScreen> {
  late DateTime checkInDate;
  late DateTime checkOutDate;
  int adults = 2;
  int children = 0;
  int rooms = 1;
  double taxes = 50.0;

  @override
  void initState() {
    super.initState();
    checkInDate = DateTime.now().add(const Duration(days: 1));
    checkOutDate = DateTime.now().add(const Duration(days: 3));
  }

  int get nights {
    final diff = checkOutDate.difference(checkInDate).inDays;
    return diff > 0 ? diff : 1;
  }

  double get total => (widget.hotel.price * nights * rooms) + taxes;

  Future<void> _selectDate(BuildContext context, bool isCheckIn) async {
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: isCheckIn ? checkInDate : checkOutDate,
      firstDate: DateTime.now(),
      lastDate: DateTime.now().add(const Duration(days: 365)),
      builder: (context, child) {
        return Theme(
          data: Theme.of(context).copyWith(
            colorScheme: ColorScheme.light(
              primary: Theme.of(context).colorScheme.primary,
              onPrimary: Colors.white,
              onSurface: Colors.black,
            ),
          ),
          child: child!,
        );
      },
    );

    if (picked != null) {
      setState(() {
        if (isCheckIn) {
          checkInDate = picked;
          if (checkOutDate.isBefore(checkInDate) || checkOutDate.isAtSameMomentAs(checkInDate)) {
            checkOutDate = checkInDate.add(const Duration(days: 1));
          }
        } else {
          if (picked.isAfter(checkInDate)) {
            checkOutDate = picked;
          } else {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Check-out date must be after check-in date')),
            );
          }
        }
      });
    }
  }

  void _showGuestRoomPicker(BuildContext context) {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setModalState) {
            return Container(
              padding: const EdgeInsets.all(24),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Select Guests & Rooms', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 24),
                  _buildCounterRow('Rooms', rooms, (val) {
                    if (val > 0) {
                      setModalState(() => rooms = val);
                      setState(() => rooms = val);
                    }
                  }),
                  const SizedBox(height: 16),
                  _buildCounterRow('Adults', adults, (val) {
                    if (val > 0) {
                      setModalState(() => adults = val);
                      setState(() => adults = val);
                    }
                  }),
                  const SizedBox(height: 16),
                  _buildCounterRow('Children', children, (val) {
                    if (val >= 0) {
                      setModalState(() => children = val);
                      setState(() => children = val);
                    }
                  }),
                  const SizedBox(height: 32),
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      onPressed: () => Navigator.pop(context),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Theme.of(context).colorScheme.primary,
                        padding: const EdgeInsets.symmetric(vertical: 16),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                      ),
                      child: const Text('Done', style: TextStyle(fontSize: 16, color: Colors.white, fontWeight: FontWeight.bold)),
                    ),
                  ),
                ],
              ),
            );
          },
        );
      },
    );
  }

  Widget _buildCounterRow(String title, int value, Function(int) onChanged) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
        Row(
          children: [
            IconButton(
              onPressed: () => onChanged(value - 1),
              icon: Icon(Icons.remove_circle_outline, color: Colors.grey.shade400, size: 28),
            ),
            SizedBox(
              width: 30,
              child: Text(
                value.toString(),
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            ),
            IconButton(
              onPressed: () => onChanged(value + 1),
              icon: Icon(Icons.add_circle_outline, color: Theme.of(context).colorScheme.primary, size: 28),
            ),
          ],
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final DateFormat formatter = DateFormat('dd MMM yyyy');

    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        title: const Text('Confirm Booking', style: TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: true,
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Hotel Info Card
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.05),
                    blurRadius: 20,
                    offset: const Offset(0, 10),
                  ),
                ],
              ),
              child: Row(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(16),
                    child: Image.asset(
                      'assets/images/hotel_exterior.png',
                      width: 80,
                      height: 80,
                      fit: BoxFit.cover,
                    ),
                  ),
                  const SizedBox(width: 16),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          widget.hotel.name,
                          style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            const Icon(Icons.star, color: Colors.amber, size: 16),
                            const SizedBox(width: 4),
                            Text(
                              widget.hotel.rating.toString(),
                              style: const TextStyle(fontWeight: FontWeight.bold),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 32),

            // Booking Details Card
            Text(
              tr('Booking Details'),
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            Container(
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.surface,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Theme.of(context).dividerColor.withOpacity(0.1)),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.02),
                    blurRadius: 15,
                    offset: const Offset(0, 5),
                  ),
                ],
              ),
              child: Column(
                children: [
                  _buildInteractiveRow(
                    icon: Icons.calendar_today,
                    title: 'Check-in',
                    value: formatter.format(checkInDate),
                    onTap: () => _selectDate(context, true),
                  ),
                  Divider(height: 1, color: Theme.of(context).dividerColor.withOpacity(0.1), indent: 56),
                  _buildInteractiveRow(
                    icon: Icons.calendar_today,
                    title: 'Check-out',
                    value: formatter.format(checkOutDate),
                    onTap: () => _selectDate(context, false),
                  ),
                  Divider(height: 1, color: Theme.of(context).dividerColor.withOpacity(0.1), indent: 56),
                  _buildInteractiveRow(
                    icon: Icons.person_outline,
                    title: tr('Guests & Rooms'),
                    value: '$rooms Room, ${adults + children} Guest',
                    onTap: () => _showGuestRoomPicker(context),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 32),

            // Price Summary
            Text(
              tr('Total Price'),
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.surface,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Theme.of(context).dividerColor.withOpacity(0.1)),
              ),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('$rooms ${tr('Rooms')} x $nights nights', style: TextStyle(color: Colors.grey.shade600, fontSize: 16)),
                      Text('\$${(widget.hotel.price * nights * rooms).toStringAsFixed(2)}', style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 16)),
                    ],
                  ),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('Taxes & Fees', style: TextStyle(color: Colors.grey.shade600, fontSize: 16)),
                      Text('\$${taxes.toStringAsFixed(2)}', style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 16)),
                    ],
                  ),
                  const SizedBox(height: 24),
                  
                  // Dashed Line
                  Row(
                    children: List.generate(150 ~/ 3, (index) => Expanded(
                      child: Container(
                        color: index % 2 == 0 ? Colors.transparent : Colors.grey.shade300,
                        height: 1,
                      ),
                    )),
                  ),
                  
                  const SizedBox(height: 24),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text('Total Amount', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                      Text(
                        '\$${total.toStringAsFixed(2)}',
                        style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Theme.of(context).colorScheme.primary),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 100),
          ],
        ),
      ),
      bottomSheet: Container(
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.1),
              blurRadius: 10,
              offset: const Offset(0, -5),
            ),
          ],
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // Non-Refundable Notice
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              margin: const EdgeInsets.only(bottom: 16),
              decoration: BoxDecoration(
                color: Colors.red.shade50,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: Colors.red.shade100),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.info_outline, size: 16, color: Colors.red.shade700),
                  const SizedBox(width: 8),
                  Text(
                    'Non-refundable booking',
                    style: TextStyle(color: Colors.red.shade700, fontWeight: FontWeight.bold, fontSize: 12),
                  ),
                ],
              ),
            ),
            Container(
              width: double.infinity,
              height: 56,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                gradient: const LinearGradient(
                  colors: [Color(0xFF1E3A8A), Color(0xFF3B82F6)],
                  begin: Alignment.centerLeft,
                  end: Alignment.centerRight,
                ),
                boxShadow: [
                  BoxShadow(
                    color: const Color(0xFF3B82F6).withOpacity(0.3),
                    blurRadius: 12,
                    offset: const Offset(0, 6),
                  ),
                ],
              ),
              child: ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => const BookingSuccessScreen(),
                    ),
                  );
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.transparent,
                  shadowColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                  ),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text(
                      'Pay Now ',
                      style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white),
                    ),
                    Text(
                      '\$${total.toStringAsFixed(2)}',
                      style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Colors.white),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildInteractiveRow({required IconData icon, required String title, required String value, required VoidCallback onTap}) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(20),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.blue.withOpacity(0.1),
                shape: BoxShape.circle,
              ),
              child: Icon(icon, color: Colors.blue.shade700, size: 20),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Text(
                title,
                style: TextStyle(color: Colors.grey.shade600, fontSize: 16),
              ),
            ),
            Text(
              value,
              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
            ),
            const SizedBox(width: 8),
            Icon(Icons.chevron_right, color: Colors.grey.shade400),
          ],
        ),
      ),
    );
  }
}
