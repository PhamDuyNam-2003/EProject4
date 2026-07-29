import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';
import 'package:intl/intl.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import '../../../core/booking_service.dart';

class BookingCalendarDialog extends StatefulWidget {
  final String hotelId;
  final String roomTypeId;
  final DateTime? initialStartDate;
  final DateTime? initialEndDate;

  const BookingCalendarDialog({
    Key? key,
    required this.hotelId,
    required this.roomTypeId,
    this.initialStartDate,
    this.initialEndDate,
  }) : super(key: key);

  @override
  State<BookingCalendarDialog> createState() => _BookingCalendarDialogState();
}

class _BookingCalendarDialogState extends State<BookingCalendarDialog> {
  DateTime _focusedDay = DateTime.now();
  DateTime? _rangeStart;
  DateTime? _rangeEnd;
  RangeSelectionMode _rangeSelectionMode = RangeSelectionMode.toggledOn;

  Map<String, dynamic> _availabilityCache = {};
  bool _isLoading = false;
  IO.Socket? _socket;

  @override
  void initState() {
    super.initState();
    _rangeStart = widget.initialStartDate;
    _rangeEnd = widget.initialEndDate;
    if (_rangeStart != null) {
      _focusedDay = _rangeStart!;
    }
    _fetchAvailability(_focusedDay.month, _focusedDay.year);
    _initSocket();
  }

  void _initSocket() {
    _socket = IO.io('http://192.168.1.10:3006', IO.OptionBuilder()
      .setTransports(['websocket'])
      .disableAutoConnect()
      .build());

    _socket?.connect();

    _socket?.on('availability_changed', (data) {
      if (data != null && data['hotelId'] == widget.hotelId) {
        if (mounted) {
          _fetchAvailability(_focusedDay.month, _focusedDay.year);
        }
      }
    });
  }

  @override
  void dispose() {
    _socket?.disconnect();
    _socket?.dispose();
    super.dispose();
  }

  Future<void> _fetchAvailability(int month, int year) async {
    setState(() {
      _isLoading = true;
    });
    try {
      final data = await BookingService.instance.getHotelAvailability(widget.hotelId, month, year);
      setState(() {
        _availabilityCache.addAll(data);
      });
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.toString())));
      }
    } finally {
      if (mounted) {
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  void _onDaySelected(DateTime selectedDay, DateTime focusedDay) {
    if (!isSameDay(_focusedDay, focusedDay)) {
      _focusedDay = focusedDay;
    }
  }

  void _onRangeSelected(DateTime? start, DateTime? end, DateTime focusedDay) {
    setState(() {
      _focusedDay = focusedDay;
      _rangeStart = start;
      _rangeEnd = end;
      _rangeSelectionMode = RangeSelectionMode.toggledOn;
    });
  }

  bool _isDayAvailable(DateTime day) {
    final dateStr = DateFormat('yyyy-MM-dd').format(day);
    if (_availabilityCache.containsKey(dateStr)) {
      final roomData = _availabilityCache[dateStr][widget.roomTypeId];
      if (roomData != null) {
        return roomData['isAvailable'] == true;
      }
    }
    // Default to available if not loaded yet
    return true;
  }

  int _getDayTotalRequested(DateTime day) {
    final dateStr = DateFormat('yyyy-MM-dd').format(day);
    if (_availabilityCache.containsKey(dateStr)) {
      final roomData = _availabilityCache[dateStr][widget.roomTypeId];
      if (roomData != null) {
        return roomData['totalRequested'] as int? ?? 0;
      }
    }
    return 0;
  }

  void _confirmSelection() {
    if (_rangeStart != null && _rangeEnd != null) {
      // Validate that all days in the range are available
      DateTime current = _rangeStart!;
      while (current.isBefore(_rangeEnd!)) {
        if (!_isDayAvailable(current)) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
            content: Text('Một số ngày bạn chọn đã hết phòng. Vui lòng chọn lại.'),
            backgroundColor: Colors.red,
          ));
          return;
        }
        current = current.add(const Duration(days: 1));
      }
      Navigator.pop(context, DateTimeRange(start: _rangeStart!, end: _rangeEnd!));
    } else {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Vui lòng chọn ngày nhận và trả phòng')));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: Container(
        width: MediaQuery.of(context).size.width,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('Chọn ngày', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                IconButton(
                  icon: const Icon(Icons.close),
                  onPressed: () => Navigator.pop(context),
                )
              ],
            ),
            const SizedBox(height: 8),
            _isLoading 
              ? const LinearProgressIndicator() 
              : const SizedBox(height: 4), // Placeholder for progress bar space
            Flexible(
              child: SingleChildScrollView(
                child: TableCalendar(
                  firstDay: DateTime.now(),
                  lastDay: DateTime.now().add(const Duration(days: 365)),
                  focusedDay: _focusedDay,
                  selectedDayPredicate: (day) => isSameDay(_rangeStart, day) || isSameDay(_rangeEnd, day),
                  rangeStartDay: _rangeStart,
                  rangeEndDay: _rangeEnd,
                  calendarFormat: CalendarFormat.month,
                  rangeSelectionMode: _rangeSelectionMode,
                  onDaySelected: _onDaySelected,
                  onRangeSelected: _onRangeSelected,
                  onPageChanged: (focusedDay) {
                    _focusedDay = focusedDay;
                    _fetchAvailability(focusedDay.month, focusedDay.year);
                  },
                  enabledDayPredicate: (day) {
                    // Disable past days
                    if (day.isBefore(DateTime.now().subtract(const Duration(days: 1)))) return false;
                    return true;
                  },
                  calendarBuilders: CalendarBuilders(
                    markerBuilder: (context, day, events) {
                      if (day.isBefore(DateTime.now().subtract(const Duration(days: 1)))) return null;
                      
                      final isAvailable = _isDayAvailable(day);
                      final totalReq = _getDayTotalRequested(day);
                      final isSelected = (isSameDay(day, _rangeStart) || isSameDay(day, _rangeEnd) || (day.isAfter(_rangeStart ?? day) && day.isBefore(_rangeEnd ?? day)));
                      
                      String statusText = 'Còn';
                      Color statusColor = Colors.green;

                      if (!isAvailable) {
                        statusText = 'Hết';
                        statusColor = Colors.red;
                      } else if (totalReq > 0) {
                        statusText = 'Đã đặt';
                        statusColor = Colors.redAccent;
                      }
                      
                      if (isSelected) {
                        statusColor = Colors.white70;
                      }

                      return Positioned(
                        bottom: 4,
                        child: Text(
                          statusText,
                          style: TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.bold,
                            color: statusColor,
                          ),
                        ),
                      );
                    },
                    defaultBuilder: (context, day, focusedDay) {
                      final isAvailable = _isDayAvailable(day);
                      return Container(
                        margin: const EdgeInsets.all(4.0),
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          color: isAvailable ? null : Colors.red.withValues(alpha: 0.1),
                          shape: BoxShape.circle,
                        ),
                        child: Text(
                          '${day.day}',
                          style: TextStyle(color: isAvailable ? Colors.black : Colors.red),
                        ),
                      );
                    },
                  ),
                  headerStyle: const HeaderStyle(
                    formatButtonVisible: false,
                    titleCentered: true,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              height: 50,
              child: ElevatedButton(
                onPressed: _confirmSelection,
                style: ElevatedButton.styleFrom(
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
                child: const Text('Xác nhận', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
              ),
            )
          ],
        ),
      ),
    );
  }
}
