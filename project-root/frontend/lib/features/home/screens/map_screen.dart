import 'package:flutter/material.dart';
import 'dart:math';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';
import '../../../data/models/hotel_model.dart';
import '../widgets/hotel_card.dart';
import 'package:geolocator/geolocator.dart';
import '../../../core/app_settings.dart';

class MapScreen extends StatefulWidget {
  final List<HotelModel> hotels;
  final Position? userPosition;

  const MapScreen({super.key, required this.hotels, this.userPosition});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  final MapController _mapController = MapController();
  HotelModel? _selectedHotel;

  final LatLng _center = const LatLng(10.762622, 106.660172);
  late List<Marker> _markers;

  @override
  Widget build(BuildContext context) {
    _markers = widget.hotels.map((hotel) {
      final lat = hotel.latitude ?? (_center.latitude + (Random().nextDouble() - 0.5) * 0.1);
      final lng = hotel.longitude ?? (_center.longitude + (Random().nextDouble() - 0.5) * 0.1);
      final isSelected = _selectedHotel?.id == hotel.id;
      
      return Marker(
        point: LatLng(lat, lng),
        width: 40,
        height: 40,
        child: GestureDetector(
          onTap: () {
            setState(() {
              _selectedHotel = hotel;
              _mapController.move(LatLng(lat, lng), 13.0);
            });
          },
          child: Icon(
            Icons.location_on,
            color: isSelected ? Colors.red : const Color(0xFFD4AF37),
            size: isSelected ? 40 : 30,
          ),
        ),
      );
    }).toList();

    if (widget.userPosition != null) {
      _markers.add(
        Marker(
          point: LatLng(widget.userPosition!.latitude, widget.userPosition!.longitude),
          width: 20,
          height: 20,
          child: Container(
            decoration: BoxDecoration(
              color: Colors.blue,
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white, width: 3),
              boxShadow: [
                BoxShadow(
                  color: Colors.blue.withOpacity(0.5),
                  blurRadius: 10,
                  spreadRadius: 2,
                )
              ],
            ),
          ),
        ),
      );
    }

    return Scaffold(
      body: Stack(
        children: [
          FlutterMap(
            mapController: _mapController,
            options: MapOptions(
              initialCenter: widget.userPosition != null 
                  ? LatLng(widget.userPosition!.latitude, widget.userPosition!.longitude)
                  : _center,
              initialZoom: 12.0,
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
                markers: _markers,
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
                  userPosition: widget.userPosition,
                ),
              ),
            ),

          if (widget.userPosition != null)
            Positioned(
              bottom: _selectedHotel != null ? 320 : 30,
              right: 16,
              child: FloatingActionButton(
                onPressed: () {
                  _mapController.move(
                    LatLng(widget.userPosition!.latitude, widget.userPosition!.longitude),
                    14.0,
                  );
                },
                backgroundColor: Colors.white,
                child: const Icon(Icons.my_location, color: Colors.blue),
              ),
            ),
        ],
      ),
    );
  }
}
