import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../../../data/models/hotel_model.dart';
import 'booking_success_screen.dart';
import '../../../core/app_settings.dart';
import '../../../core/booking_service.dart';
import '../../../data/models/room_type_model.dart';
import '../../../data/repositories/hotel_repository.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../features/booking/widgets/booking_calendar_dialog.dart';

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
  bool _isLoading = false;
  List<RoomTypeModel> roomTypes = [];
  RoomTypeModel? selectedRoomType;
  Map<String, dynamic> _availabilityCache = {};

  @override
  void initState() {
    super.initState();
    checkInDate = DateTime.now().add(const Duration(days: 1));
    checkOutDate = DateTime.now().add(const Duration(days: 3));
    _fetchRoomTypes().then((_) {
      _fetchAvailabilityForPicker();
    });
  }

  Future<void> _fetchRoomTypes() async {
    final repo = ApiHotelRepository();
    final list = await repo.getRoomTypesByHotelId(widget.hotel.id);
    if (mounted) {
      setState(() {
        roomTypes = list;
        if (roomTypes.isNotEmpty) {
          selectedRoomType = roomTypes.first;
        }
      });
    }
  }

  Future<void> _fetchAvailabilityForPicker() async {
    try {
      final data1 = await BookingService.instance.getHotelAvailability(widget.hotel.id, checkInDate.month, checkInDate.year);
      Map<String, dynamic> combined = {...data1};
      
      if (checkInDate.month != checkOutDate.month || checkInDate.year != checkOutDate.year) {
        final data2 = await BookingService.instance.getHotelAvailability(widget.hotel.id, checkOutDate.month, checkOutDate.year);
        combined.addAll(data2);
      }
      
      if (mounted) {
        setState(() {
          _availabilityCache = combined;
        });
      }
    } catch (e) {
      debugPrint('Error fetching availability: $e');
    }
  }

  int _getRemainingRooms(String roomTypeId) {
    if (_availabilityCache.isEmpty) return -1; // Loading state
    int minAvailable = 999;
    
    DateTime current = checkInDate;
    while (current.isBefore(checkOutDate)) {
      final dateStr = DateFormat('yyyy-MM-dd').format(current);
      if (_availabilityCache.containsKey(dateStr)) {
        final roomData = _availabilityCache[dateStr][roomTypeId];
        if (roomData != null) {
          final int inventory = roomData['inventory'] ?? 5;
          final int req = roomData['totalRequested'] ?? 0;
          final int left = inventory - req;
          if (left < minAvailable) minAvailable = left;
        }
      }
      current = current.add(const Duration(days: 1));
    }
    
    return minAvailable == 999 ? 0 : minAvailable;
  }

  int get nights {
    final diff = checkOutDate.difference(checkInDate).inDays;
    return diff > 0 ? diff : 1;
  }

  double get total => ((selectedRoomType?.basePrice ?? widget.hotel.priceFrom) * nights * rooms) + taxes;

  Future<void> _selectDateRange(BuildContext context) async {
    final DateTimeRange? picked = await showDialog<DateTimeRange>(
      context: context,
      builder: (context) => BookingCalendarDialog(
        hotelId: widget.hotel.id,
        roomTypeId: selectedRoomType?.id ?? '',
        initialStartDate: checkInDate,
        initialEndDate: checkOutDate,
      ),
    );

    if (picked != null) {
      setState(() {
        checkInDate = picked.start;
        checkOutDate = picked.end;
      });
      _fetchAvailabilityForPicker();
    }
  }

  void _showGuestRoomPicker(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setModalState) {
            return SingleChildScrollView(
              padding: EdgeInsets.only(
                left: 24,
                right: 24,
                top: 24,
                bottom: MediaQuery.of(context).viewInsets.bottom + 24,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Chọn Khách & Phòng', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 24),
                  _buildCounterRow('Số phòng', rooms, (val) {
                    if (val > 0) {
                      setModalState(() => rooms = val);
                      setState(() => rooms = val);
                    }
                  }),
                  const SizedBox(height: 16),
                  _buildCounterRow('Người lớn', adults, (val) {
                    if (val > 0) {
                      setModalState(() => adults = val);
                      setState(() => adults = val);
                    }
                  }),
                  const SizedBox(height: 16),
                  _buildCounterRow('Trẻ em', children, (val) {
                    if (val >= 0) {
                      setModalState(() => children = val);
                      setState(() => children = val);
                    }
                  }),
                  const SizedBox(height: 24),
                  if (roomTypes.isNotEmpty) ...[
                    const Text('Chọn Loại Phòng', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
                    const SizedBox(height: 16),
                    ...roomTypes.map((rt) {
                      final remaining = _getRemainingRooms(rt.id);
                      final remainingText = remaining == -1 
                          ? 'Đang tải...' 
                          : (remaining > 0 ? 'Còn $remaining phòng' : 'Hết phòng');
                      final color = remaining > 0 ? Colors.green : Colors.red;

                      return RadioListTile<RoomTypeModel>(
                        value: rt,
                        groupValue: selectedRoomType,
                        onChanged: remaining > 0 ? (RoomTypeModel? value) {
                          setModalState(() => selectedRoomType = value);
                          setState(() => selectedRoomType = value);
                        } : null,
                        title: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Expanded(
                              child: Text(
                                rt.name, 
                                style: const TextStyle(fontWeight: FontWeight.bold),
                                overflow: TextOverflow.ellipsis,
                                maxLines: 2,
                              ),
                            ),
                            const SizedBox(width: 8),
                            Text(remainingText, style: TextStyle(color: color, fontSize: 13, fontWeight: FontWeight.bold)),
                          ],
                        ),
                        subtitle: Text('\$${rt.basePrice}/đêm - Tối đa ${rt.maxAdults} người lớn'),
                        contentPadding: EdgeInsets.zero,
                        activeColor: Theme.of(context).colorScheme.primary,
                      );
                    }).toList(),
                  ],
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
                      child: const Text('Hoàn tất', style: TextStyle(fontSize: 16, color: Colors.white, fontWeight: FontWeight.bold)),
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
                color: Theme.of(context).colorScheme.surface,
                borderRadius: BorderRadius.circular(20),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.05),
                    blurRadius: 20,
                    offset: const Offset(0, 10),
                  ),
                ],
              ),
              child: Row(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(16),
                    child: widget.hotel.images.isNotEmpty
                      ? Image.network(
                          widget.hotel.images.first,
                          width: 80,
                          height: 80,
                          fit: BoxFit.cover,
                        )
                      : Image.asset(
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
                          style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            fontSize: 18, 
                            fontWeight: FontWeight.bold,
                            letterSpacing: -0.2,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            Icon(Icons.star, color: Theme.of(context).colorScheme.secondary, size: 16),
                            const SizedBox(width: 4),
                            Text(
                              widget.hotel.rating.toString(),
                              style: TextStyle(fontWeight: FontWeight.bold, color: Theme.of(context).colorScheme.secondary),
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
              style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            Container(
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.surface,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Theme.of(context).dividerColor.withOpacity(0.1)),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.02),
                    blurRadius: 15,
                    offset: const Offset(0, 5),
                  ),
                ],
              ),
              child: Column(
                children: [
                  _buildInteractiveRow(
                    icon: Icons.person_outline,
                    title: 'Khách & Phòng',
                    value: '$rooms Phòng (${selectedRoomType?.name ?? "Tiêu chuẩn"}), ${adults + children} Khách',
                    onTap: () => _showGuestRoomPicker(context),
                  ),
                  Divider(height: 1, color: Theme.of(context).dividerColor.withOpacity(0.1), indent: 56),
                  _buildInteractiveRow(
                    icon: Icons.calendar_today,
                    title: 'Ngày đặt',
                    value: '${formatter.format(checkInDate)} - ${formatter.format(checkOutDate)}',
                    onTap: () => _selectDateRange(context),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 32),

            // Price Summary
            Text(
              tr('Tóm tắt chi phí'),
              style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 18, fontWeight: FontWeight.bold),
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
                      Text('$rooms ${tr('Số phòng')} x $nights nights', style: TextStyle(color: Colors.grey.shade600, fontSize: 16)),
                      Text('\$${((selectedRoomType?.basePrice ?? widget.hotel.priceFrom) * nights * rooms).toStringAsFixed(2)}', style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 16)),
                    ],
                  ),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('Thuế & Phí', style: TextStyle(color: Colors.grey.shade600, fontSize: 16)),
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
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text('Tổng cộng', style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 18, fontWeight: FontWeight.bold)),
                      Text(
                        '\$${total.toStringAsFixed(2)}',
                        style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                          fontSize: 24, 
                          fontWeight: FontWeight.bold, 
                          color: Theme.of(context).colorScheme.primary,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 120),
          ],
        ),
      ),
      bottomSheet: Container(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surface,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 15,
              offset: const Offset(0, -5),
            ),
          ],
        ),
        child: SafeArea(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Non-Refundable Notice
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                margin: const EdgeInsets.only(bottom: 16),
                decoration: BoxDecoration(
                  color: Colors.amber.shade50,
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: Colors.amber.shade100),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.info_outline, size: 16, color: Colors.amber.shade900),
                    const SizedBox(width: 8),
                    Text(
                      'Non-refundable booking',
                      style: TextStyle(color: Colors.amber.shade900, fontWeight: FontWeight.bold, fontSize: 12),
                    ),
                  ],
                ),
              ),
              Container(
                width: double.infinity,
                height: 56,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: Theme.of(context).colorScheme.primary.withOpacity(0.3),
                      blurRadius: 12,
                      offset: const Offset(0, 6),
                    ),
                  ],
                ),
                child: ElevatedButton(
                  onPressed: _isLoading ? null : () async {
                    setState(() => _isLoading = true);
                    try {
                      final bookingId = await BookingService.instance.createBooking(
                        hotelId: widget.hotel.id,
                        roomTypeId: selectedRoomType?.id,
                        checkInDate: checkInDate,
                        checkOutDate: checkOutDate,
                        rooms: rooms,
                        adults: adults,
                        children: children,
                        totalPrice: total,
                      );
                      
                      // Lấy VNPay URL
                      final paymentUrl = await BookingService.instance.createPaymentUrl(bookingId);
                      
                      // Mở trình duyệt
                      final url = Uri.parse(paymentUrl);
                      if (await canLaunchUrl(url)) {
                        await launchUrl(url, mode: LaunchMode.externalApplication);
                      }

                      if (mounted) {
                        Navigator.pushReplacement(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const BookingSuccessScreen(),
                          ),
                        );
                      }
                    } catch (e) {
                      if (mounted) {
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text(e.toString().replaceAll('Exception: ', '')),
                            backgroundColor: Colors.red,
                          ),
                        );
                      }
                    } finally {
                      if (mounted) setState(() => _isLoading = false);
                    }
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Theme.of(context).colorScheme.primary,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: _isLoading 
                  ? const CircularProgressIndicator(color: Colors.white)
                  : Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        tr('Proceed to Payment '),
                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                      ),
                      Text(
                        '\$${total.toStringAsFixed(2)}',
                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Colors.white),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
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
            Text(
              title,
              style: TextStyle(color: Colors.grey.shade600, fontSize: 16),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Text(
                value,
                textAlign: TextAlign.right,
                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                overflow: TextOverflow.ellipsis,
                maxLines: 2,
              ),
            ),
            const SizedBox(width: 8),
            Icon(Icons.chevron_right, color: Colors.grey.shade400),
          ],
        ),
      ),
    );
  }
}
