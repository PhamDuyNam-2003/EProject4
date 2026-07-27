import io

file_path = 'lib/features/booking/screens/booking_screen.dart'
with io.open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Imports
if 'import \'../../../data/models/room_type_model.dart\';' not in content:
    content = content.replace("import '../../../core/booking_service.dart';", "import '../../../core/booking_service.dart';\nimport '../../../data/models/room_type_model.dart';\nimport '../../../data/repositories/hotel_repository.dart';")
    content = content.replace("import 'package:url_launcher/url_launcher.dart';", "import 'package:url_launcher/url_launcher.dart';\nimport '../../../features/booking/widgets/booking_calendar_dialog.dart';")


# 2. State variables and methods
state_vars = """  bool _isLoading = false;
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
  }"""

old_state = """  bool _isLoading = false;

  @override
  void initState() {
    super.initState();
    checkInDate = DateTime.now().add(const Duration(days: 1));
    checkOutDate = DateTime.now().add(const Duration(days: 3));
  }"""
content = content.replace(old_state, state_vars)

# 3. Modify total
content = content.replace("double get total => (widget.hotel.price * nights * rooms) + taxes;", "double get total => ((selectedRoomType?.basePrice ?? widget.hotel.priceFrom) * nights * rooms) + taxes;")

# 4. Replace _selectDate with _selectDateRange
select_date_range = """  Future<void> _selectDateRange(BuildContext context) async {
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
  }"""
import re
content = re.sub(r'  Future<void> _selectDate\(BuildContext context, bool isCheckIn\) async \{.*?\n  \}', select_date_range, content, flags=re.DOTALL)

# 5. Room Picker additions
room_picker_old = """                  _buildCounterRow('Trẻ em', children, (val) {
                    if (val >= 0) {
                      setModalState(() => children = val);
                      setState(() => children = val);
                    }
                  }),
                  const SizedBox(height: 32),
                  SizedBox(
                    width: double.infinity,"""

room_picker_new = """                  _buildCounterRow('Trẻ em', children, (val) {
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
                            Text(rt.name, style: const TextStyle(fontWeight: FontWeight.bold)),
                            Text(remainingText, style: TextStyle(color: color, fontSize: 13, fontWeight: FontWeight.bold)),
                          ],
                        ),
                        subtitle: Text('\\$${rt.basePrice}/đêm - Tối đa ${rt.maxAdults} người lớn'),
                        contentPadding: EdgeInsets.zero,
                        activeColor: Theme.of(context).colorScheme.primary,
                      );
                    }).toList(),
                  ],
                  const SizedBox(height: 32),
                  SizedBox(
                    width: double.infinity,"""
content = content.replace(room_picker_old, room_picker_new)

# 6. Update UI rows
ui_row_old = """                  _buildInteractiveRow(
                    icon: Icons.calendar_today,
                    title: 'Dates',
                    value: '${formatter.format(checkInDate)} - ${formatter.format(checkOutDate)}',
                    onTap: () => _selectDate(context, true),
                  ),
                  Divider(height: 1, color: Theme.of(context).dividerColor.withOpacity(0.1), indent: 56),
                  _buildInteractiveRow(
                    icon: Icons.person_outline,
                    title: 'Khách & Phòng',
                    value: '$rooms Phòng, ${adults + children} Khách',
                    onTap: () => _showGuestRoomPicker(context),
                  ),"""

ui_row_new = """                  _buildInteractiveRow(
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
                  ),"""
content = content.replace(ui_row_old, ui_row_new)

# Also fix the `priceFrom` in Price Summary
content = content.replace("Text('\\$${(widget.hotel.price * nights * rooms).toStringAsFixed(2)}'", "Text('\\$${((selectedRoomType?.basePrice ?? widget.hotel.priceFrom) * nights * rooms).toStringAsFixed(2)}'")

with io.open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Rebuilt successfully')
