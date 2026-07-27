import 'package:flutter/material.dart';
import '../../../data/models/filter_criteria.dart';
import '../../../core/app_settings.dart';

class FilterFullScreen extends StatefulWidget {
  final FilterCriteria initialCriteria;

  const FilterFullScreen({super.key, required this.initialCriteria});

  @override
  State<FilterFullScreen> createState() => _FilterFullScreenState();
}

class _FilterFullScreenState extends State<FilterFullScreen> {
  late FilterCriteria _criteria;

  final List<String> _amenitiesOptions = ['Free Wifi', 'Pool', 'Gym', 'Spa', 'Free Breakfast', 'Free Parking'];
  final List<String> _roomFeaturesOptions = ['AC', 'Balcony', 'Window', 'Bathtub', 'Private Pool'];
  final List<String> _policiesOptions = ['Free Cancellation', 'No Credit Card', 'Pay at Hotel'];

  @override
  void initState() {
    super.initState();
    _criteria = widget.initialCriteria;
  }

  void _updateCriteria(FilterCriteria newCriteria) {
    setState(() {
      _criteria = newCriteria;
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bgColor = Theme.of(context).scaffoldBackgroundColor;
    final textColor = isDark ? Colors.white : Colors.black;

    return Scaffold(
      backgroundColor: bgColor,
      appBar: AppBar(
        title: Text(tr('Advanced Filters'), style: TextStyle(fontWeight: FontWeight.bold, color: textColor)),
        centerTitle: true,
        backgroundColor: bgColor,
        elevation: 1,
        leading: IconButton(
          icon: Icon(Icons.close, color: textColor),
          onPressed: () => Navigator.pop(context),
        ),
        actions: [
          TextButton(
            onPressed: () {
              // Clear All
              _updateCriteria(FilterCriteria(
                query: _criteria.query, 
                category: _criteria.category,
              ));
            },
            child: Text(tr('Clear All'), style: TextStyle(color: Theme.of(context).colorScheme.primary)),
          ),
        ],
      ),
      body: Column(
        children: [
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildSectionHeader(tr('Sort By')),
                  _buildSortDropdown(),
                  
                  const Divider(height: 48),

                  _buildSectionHeader(tr('1. Basic Information')),
                  _buildPriceRange(),
                  const SizedBox(height: 24),
                  _buildStarRating(),
                  const SizedBox(height: 24),
                  _buildReviewScoreSlider(),
                  
                  const Divider(height: 48),
                  
                  _buildSectionHeader(tr('2. Location & Distance')),
                  _buildDistanceSlider(),
                  _buildSwitch(
                    title: tr('Near Public Transport'),
                    subtitle: tr('Close to bus station or train station'),
                    value: _criteria.nearPublicTransport,
                    onChanged: (val) => _updateCriteria(_criteria.copyWith(nearPublicTransport: val)),
                  ),

                  const Divider(height: 48),

                  _buildSectionHeader(tr('3. Type & Amenities')),
                  _buildMultiSelectChips(tr('Popular Amenities'), _amenitiesOptions, _criteria.amenities, (val) {
                    _updateCriteria(_criteria.copyWith(amenities: val));
                  }),
                  const SizedBox(height: 24),
                  _buildMultiSelectChips(tr('Room Features'), _roomFeaturesOptions, _criteria.roomFeatures, (val) {
                    _updateCriteria(_criteria.copyWith(roomFeatures: val));
                  }),

                  const Divider(height: 48),

                  _buildSectionHeader(tr('Policies')),
                  ..._policiesOptions.map((policy) => _buildCheckbox(
                    title: tr(policy),
                    value: _criteria.policies.contains(policy),
                    onChanged: (val) {
                      final list = List<String>.from(_criteria.policies);
                      if (val == true) {
                        list.add(policy);
                      } else {
                        list.remove(policy);
                      }
                      _updateCriteria(_criteria.copyWith(policies: list));
                    },
                  )),

                  const Divider(height: 48),

                  _buildSectionHeader(tr('Guests & Rooms')),
                  _buildCounter(tr('Adults'), 'Ages 13 or above', _criteria.adults, (val) => _updateCriteria(_criteria.copyWith(adults: val)), min: 1),
                  _buildCounter(tr('Children'), 'Ages 2-12', _criteria.kids, (val) => _updateCriteria(_criteria.copyWith(kids: val))),
                  _buildCounter(tr('Bedrooms'), '', _criteria.bedrooms, (val) => _updateCriteria(_criteria.copyWith(bedrooms: val)), min: 1),
                  _buildSwitch(
                    title: 'Pet Friendly',
                    subtitle: 'Allow pets to stay',
                    value: _criteria.petFriendly,
                    onChanged: (val) => _updateCriteria(_criteria.copyWith(petFriendly: val)),
                  ),
                ],
              ),
            ),
          ),
          
          Container(
            padding: const EdgeInsets.all(24),
            decoration: BoxDecoration(
              color: bgColor,
              boxShadow: [
                BoxShadow(color: isDark ? Colors.black26 : Colors.grey.withOpacity(0.1), blurRadius: 10, offset: const Offset(0, -5)),
              ],
            ),
            child: SafeArea(
              child: SizedBox(
                width: double.infinity,
                height: 56,
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.pop(context, _criteria);
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Theme.of(context).colorScheme.primary,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                  ),
                  child: Text(tr('Show Results'), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white)),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSectionHeader(String title) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16.0),
      child: Text(
        title,
        style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
      ),
    );
  }

  Widget _buildSortDropdown() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: Colors.grey.shade50,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.grey.shade300),
      ),
      child: DropdownButtonHideUnderline(
        child: DropdownButton<String>(
          value: _criteria.sortOrder,
          isExpanded: true,
          items: [
            DropdownMenuItem(value: 'none', child: Text(tr('Recommended'))),
            DropdownMenuItem(value: 'price_asc', child: Text(tr('Lowest Price'))),
            DropdownMenuItem(value: 'price_desc', child: Text(tr('Highest Price'))),
          ],
          onChanged: (value) {
            if (value != null) {
              _updateCriteria(_criteria.copyWith(sortOrder: value));
            }
          },
        ),
      ),
    );
  }

  Widget _buildPriceRange() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(tr('Price Range (Per Night)'), style: const TextStyle(fontWeight: FontWeight.w600)),
            Text(
              '\$${_criteria.minPrice.round()} - \$${_criteria.maxPrice.round()}',
              style: TextStyle(color: Theme.of(context).colorScheme.primary, fontWeight: FontWeight.bold),
            ),
          ],
        ),
        RangeSlider(
          values: RangeValues(_criteria.minPrice, _criteria.maxPrice),
          min: 0,
          max: 2000,
          divisions: 40,
          activeColor: Theme.of(context).colorScheme.primary,
          inactiveColor: Colors.grey.shade200,
          onChanged: (values) {
            _updateCriteria(_criteria.copyWith(minPrice: values.start, maxPrice: values.end));
          },
        ),
      ],
    );
  }

  Widget _buildStarRating() {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bgColor = Theme.of(context).scaffoldBackgroundColor;
    final textColor = isDark ? Colors.white : Colors.black;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(tr('Minimum Star Rating'), style: const TextStyle(fontWeight: FontWeight.w600)),
        const SizedBox(height: 12),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [1, 2, 3, 4, 5].map((star) {
            final isSelected = _criteria.minRating == star;
            return GestureDetector(
              onTap: () => _updateCriteria(_criteria.copyWith(minRating: isSelected ? 0 : star)),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                decoration: BoxDecoration(
                  color: isSelected ? Theme.of(context).colorScheme.primary : bgColor,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: isSelected ? Theme.of(context).colorScheme.primary : (isDark ? Colors.grey.shade800 : Colors.grey.shade300)),
                ),
                child: Row(
                  children: [
                    Icon(Icons.star, size: 16, color: isSelected ? Colors.white : Colors.amber),
                    const SizedBox(width: 4),
                    Text('$star', style: TextStyle(color: isSelected ? Colors.white : textColor, fontWeight: FontWeight.bold)),
                  ],
                ),
              ),
            );
          }).toList(),
        ),
      ],
    );
  }

  Widget _buildReviewScoreSlider() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(tr('Review Score'), style: const TextStyle(fontWeight: FontWeight.w600)),
            Text('${_criteria.minReviewScore.toStringAsFixed(1)}+', style: const TextStyle(fontWeight: FontWeight.bold)),
          ],
        ),
        Slider(
          value: _criteria.minReviewScore,
          min: 0.0,
          max: 10.0,
          divisions: 20,
          activeColor: Theme.of(context).colorScheme.primary,
          onChanged: (val) => _updateCriteria(_criteria.copyWith(minReviewScore: val)),
        ),
      ],
    );
  }

  Widget _buildDistanceSlider() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text('Distance from City Center', style: TextStyle(fontWeight: FontWeight.w600)),
            Text('Less than ${_criteria.maxDistance.round()} km', style: const TextStyle(fontWeight: FontWeight.bold)),
          ],
        ),
        Slider(
          value: _criteria.maxDistance,
          min: 1.0,
          max: 50.0,
          divisions: 49,
          activeColor: Theme.of(context).colorScheme.primary,
          onChanged: (val) => _updateCriteria(_criteria.copyWith(maxDistance: val)),
        ),
      ],
    );
  }

  Widget _buildMultiSelectChips(String title, List<String> options, List<String> selectedOptions, Function(List<String>) onChanged) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: const TextStyle(fontWeight: FontWeight.w600)),
        const SizedBox(height: 12),
        Wrap(
          spacing: 8.0,
          runSpacing: 8.0,
          children: options.map((option) {
            final isSelected = selectedOptions.contains(option);
            return FilterChip(
              label: Text(option),
              selected: isSelected,
              onSelected: (selected) {
                final list = List<String>.from(selectedOptions);
                if (selected) {
                  list.add(option);
                } else {
                  list.remove(option);
                }
                onChanged(list);
              },
              selectedColor: Theme.of(context).colorScheme.primary.withOpacity(0.2),
              checkmarkColor: Theme.of(context).colorScheme.primary,
            );
          }).toList(),
        ),
      ],
    );
  }

  Widget _buildCheckbox({required String title, required bool value, required Function(bool?) onChanged}) {
    return CheckboxListTile(
      title: Text(title),
      value: value,
      onChanged: onChanged,
      contentPadding: EdgeInsets.zero,
      controlAffinity: ListTileControlAffinity.leading,
      activeColor: Theme.of(context).colorScheme.primary,
    );
  }

  Widget _buildSwitch({required String title, required String subtitle, required bool value, required Function(bool) onChanged}) {
    return SwitchListTile(
      title: Text(title, style: const TextStyle(fontWeight: FontWeight.w600)),
      subtitle: subtitle.isNotEmpty ? Text(subtitle, style: const TextStyle(fontSize: 12)) : null,
      value: value,
      onChanged: onChanged,
      contentPadding: EdgeInsets.zero,
      activeColor: Theme.of(context).colorScheme.primary,
    );
  }

  Widget _buildCounter(String title, String subtitle, int value, Function(int) onChanged, {int min = 0, int max = 10}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 16)),
              if (subtitle.isNotEmpty) Text(subtitle, style: TextStyle(color: Colors.grey.shade600, fontSize: 12)),
            ],
          ),
          Row(
            children: [
              IconButton(
                icon: const Icon(Icons.remove_circle_outline),
                color: value > min ? Theme.of(context).colorScheme.primary : Colors.grey,
                onPressed: value > min ? () => onChanged(value - 1) : null,
              ),
              SizedBox(width: 24, child: Text('$value', textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold))),
              IconButton(
                icon: const Icon(Icons.add_circle_outline),
                color: value < max ? Theme.of(context).colorScheme.primary : Colors.grey,
                onPressed: value < max ? () => onChanged(value + 1) : null,
              ),
            ],
          ),
        ],
      ),
    );
  }
}
