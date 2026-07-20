import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';
import '../../../data/models/hotel_model.dart';
import '../widgets/hotel_card.dart';

class MapScreen extends StatefulWidget {
  final List<HotelModel> hotels;

  const MapScreen({super.key, required this.hotels});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  final MapController _mapController = MapController();
  HotelModel? _selectedHotel;

  // Tọa độ trung tâm mặc định (Hồ Chí Minh)
  final LatLng _center = const LatLng(10.762622, 106.660172);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          FlutterMap(
            mapController: _mapController,
            options: MapOptions(
              initialCenter: _center,
              initialZoom: 11.0,
              onTap: (_, __) {
                // Bấm ra ngoài để bỏ chọn
                setState(() {
                  _selectedHotel = null;
                });
              },
            ),
            children: [
              // TileLayer sử dụng OpenStreetMap miễn phí
              TileLayer(
                urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                userAgentPackageName: 'com.example.hotel_booking_app',
              ),
              // MarkerLayer hiển thị các Khách sạn
              MarkerLayer(
                markers: [],
              ),
            ],
          ),
          
          // Nút quay lại
          Positioned(
            top: MediaQuery.of(context).padding.top + 16,
            left: 16,
            child: CircleAvatar(
              backgroundColor: Colors.white,
              child: IconButton(
                icon: const Icon(Icons.arrow_back, color: Colors.black),
                onPressed: () => Navigator.pop(context),
              ),
            ),
          ),

          // Hiển thị Card khi chọn Marker
          if (_selectedHotel != null)
            Positioned(
              bottom: 30,
              left: 16,
              right: 16,
              child: SizedBox(
                height: 280, // Chiều cao của HotelCard
                child: HotelCard(
                  hotel: _selectedHotel!,
                  imageUrl: 'assets/images/hotel_exterior.png',
                ),
              ),
            ),
        ],
      ),
    );
  }
}
