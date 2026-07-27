import 'package:flutter/material.dart';
import '../data/models/hotel_model.dart';

class FavoriteService extends ChangeNotifier {
  static final FavoriteService instance = FavoriteService._internal();
  FavoriteService._internal();

  final Map<String, HotelModel> _savedHotels = {};

  List<HotelModel> get savedHotels => _savedHotels.values.toList();

  bool isSaved(String hotelId) => _savedHotels.containsKey(hotelId);

  void toggleFavorite(HotelModel hotel) {
    if (_savedHotels.containsKey(hotel.id)) {
      _savedHotels.remove(hotel.id);
    } else {
      _savedHotels[hotel.id] = hotel;
    }
    notifyListeners();
  }
}
