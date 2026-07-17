import 'package:flutter/material.dart';

class FilterBottomSheet extends StatefulWidget {
  final double initialMinPrice;
  final double initialMaxPrice;
  final int initialMinRating;

  const FilterBottomSheet({
    super.key,
    this.initialMinPrice = 50.0,
    this.initialMaxPrice = 1000.0,
    this.initialMinRating = 0,
  });

  @override
  State<FilterBottomSheet> createState() => _FilterBottomSheetState();
}

class _FilterBottomSheetState extends State<FilterBottomSheet> {
  late RangeValues _currentRangeValues;
  late int _selectedRating;

  @override
  void initState() {
    super.initState();
    _currentRangeValues = RangeValues(widget.initialMinPrice, widget.initialMaxPrice);
    _selectedRating = widget.initialMinRating;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(30),
          topRight: Radius.circular(30),
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Center(
            child: Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.grey.shade300,
                borderRadius: BorderRadius.circular(10),
              ),
            ),
          ),
          const SizedBox(height: 24),
          const Text(
            'Filter Options',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 24),
          
          // Lọc Khoảng Giá
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text('Price Range', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
              Text(
                '\$${_currentRangeValues.start.round()} - \$${_currentRangeValues.end.round()}',
                style: TextStyle(
                  color: Theme.of(context).colorScheme.primary,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          RangeSlider(
            values: _currentRangeValues,
            min: 0,
            max: 2000,
            divisions: 40,
            activeColor: Theme.of(context).colorScheme.primary,
            inactiveColor: Colors.grey.shade200,
            labels: RangeLabels(
              '\$${_currentRangeValues.start.round()}',
              '\$${_currentRangeValues.end.round()}',
            ),
            onChanged: (RangeValues values) {
              setState(() {
                _currentRangeValues = values;
              });
            },
          ),
          const SizedBox(height: 24),

          // Lọc Hạng Sao
          const Text('Minimum Rating', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _buildRatingButton(3),
              _buildRatingButton(4),
              _buildRatingButton(5),
            ],
          ),
          
          const SizedBox(height: 40),
          
          // Nút Apply
          SizedBox(
            width: double.infinity,
            height: 56,
            child: ElevatedButton(
              onPressed: () {
                // Trả kết quả về màn hình trước
                Navigator.pop(context, {
                  'minPrice': _currentRangeValues.start,
                  'maxPrice': _currentRangeValues.end,
                  'minRating': _selectedRating,
                });
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Theme.of(context).colorScheme.primary,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                ),
              ),
              child: const Text(
                'Apply Filters',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRatingButton(int rating) {
    final isSelected = _selectedRating == rating;
    return GestureDetector(
      onTap: () {
        setState(() {
          _selectedRating = isSelected ? 0 : rating; // Cho phép bỏ chọn
        });
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        decoration: BoxDecoration(
          color: isSelected ? Theme.of(context).colorScheme.primary : Colors.white,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: isSelected ? Theme.of(context).colorScheme.primary : Colors.grey.shade300,
          ),
        ),
        child: Row(
          children: [
            Icon(
              Icons.star,
              color: isSelected ? Colors.white : Colors.amber,
              size: 20,
            ),
            const SizedBox(width: 4),
            Text(
              '$rating+',
              style: TextStyle(
                color: isSelected ? Colors.white : Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
