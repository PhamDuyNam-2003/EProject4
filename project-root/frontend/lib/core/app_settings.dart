import 'package:flutter/material.dart';

class AppSettings extends ChangeNotifier {
  static final AppSettings instance = AppSettings._internal();
  AppSettings._internal();

  bool _isDarkMode = false;
  String _locale = 'en';

  bool get isDarkMode => _isDarkMode;
  String get locale => _locale;

  void toggleTheme(bool isDark) {
    _isDarkMode = isDark;
    notifyListeners();
  }

  void setLocale(String newLocale) {
    if (['en', 'vi', 'ru'].contains(newLocale)) {
      _locale = newLocale;
      notifyListeners();
    }
  }

  String translate(String key) {
    final Map<String, Map<String, String>> dict = {
      'en': {
        // Bottom Nav & General
        'Home': 'Home',
        'Saved': 'Saved',
        'Bookings': 'Bookings',
        'Profile': 'Profile',
        'Settings': 'Settings',
        'General': 'General',
        'Language': 'Language',
        'Dark Mode': 'Dark Mode',
        'Push Notifications': 'Push Notifications',
        
        // Home Screen
        'Good morning,': 'Good morning,',
        'Where do you want to go?': 'Where do you want to go?',
        'Popular': 'Popular',
        'See All': 'See All',
        'Hotel': 'Hotel',
        'Resort': 'Resort',
        'Villa': 'Villa',
        'Apartment': 'Apartment',
        'Homestay': 'Homestay',
        
        // Hotel Detail
        'Description': 'Description',
        'Facilities': 'Facilities',
        'Price': 'Price',
        ' / night': ' / night',
        'Book Now': 'Book Now',
        'Free Wifi': 'Free Wifi',
        'Pool': 'Pool',
        'Restaurant': 'Restaurant',
        'Parking': 'Parking',
        
        // Booking Screen
        'Booking Details': 'Booking Details',
        'Check-in - Check-out': 'Check-in - Check-out',
        'Select Dates': 'Select Dates',
        'Guests & Rooms': 'Guests & Rooms',
        'Select Guests': 'Select Guests',
        'Adults': 'Adults',
        'Children': 'Children',
        'Rooms': 'Rooms',
        'Done': 'Done',
        'Total Price': 'Total Price',
        'Pay Now': 'Pay Now',
        'Non-Refundable': 'Non-Refundable',
        'Cancellation is not possible for this rate.': 'Cancellation is not possible for this rate.',
        'Choose Check-in - Check-out Dates': 'Choose Check-in - Check-out Dates',

        // Profile Screen
        'My Profile': 'My Profile',
        'VIP Concierge': 'VIP Concierge',
        'Personal Information': 'Personal Information',
        'Payment Methods': 'Payment Methods',
        'Notifications': 'Notifications',
        'Rewards & Points': 'Rewards & Points',
        'Refer a Friend': 'Refer a Friend',
        'Help Center': 'Help Center',
        'Log Out': 'Log Out',
        
        // Settings Screen
        'Security': 'Security',
        'Change Password': 'Change Password',
        'Two-Factor Authentication': 'Two-Factor Authentication',
        'Face ID / Touch ID': 'Face ID / Touch ID',
        'Terms of Service': 'Terms of Service',
        'Privacy Policy': 'Privacy Policy',
        'Legal': 'Legal',
        'Feature in progress': 'Feature in progress',
        'This feature will be available when Backend is ready!': 'This feature will be available when Backend is ready!',
        'OK': 'OK',
        
        // Saved & Bookings
        'No saved hotels yet.': 'No saved hotels yet.',
        'Start exploring and save your favorites!': 'Start exploring and save your favorites!',
        'Active': 'Active',
        'Completed': 'Completed',
        'Cancelled': 'Cancelled',
        'Remove from Saved': 'Remove from Saved',
        'removed from saved list': 'removed from saved list',
      },
      'vi': {
        // Bottom Nav & General
        'Home': 'Trang chủ',
        'Saved': 'Đã lưu',
        'Bookings': 'Đơn đặt',
        'Profile': 'Hồ sơ',
        'Settings': 'Cài đặt',
        'General': 'Chung',
        'Language': 'Ngôn ngữ',
        'Dark Mode': 'Chế độ tối',
        'Push Notifications': 'Thông báo đẩy',
        
        // Home Screen
        'Good morning,': 'Chào buổi sáng,',
        'Where do you want to go?': 'Bạn muốn đi đâu?',
        'Popular': 'Phổ biến',
        'See All': 'Xem tất cả',
        'Hotel': 'Khách sạn',
        'Resort': 'Khu nghỉ dưỡng',
        'Villa': 'Biệt thự',
        'Apartment': 'Căn hộ',
        'Homestay': 'Nhà dân',
        
        // Hotel Detail
        'Description': 'Mô tả',
        'Facilities': 'Tiện nghi',
        'Price': 'Giá',
        ' / night': ' / đêm',
        'Book Now': 'Đặt ngay',
        'Free Wifi': 'Wifi miễn phí',
        'Pool': 'Hồ bơi',
        'Restaurant': 'Nhà hàng',
        'Parking': 'Bãi đỗ xe',
        
        // Booking Screen
        'Booking Details': 'Chi tiết đặt phòng',
        'Check-in - Check-out': 'Nhận phòng - Trả phòng',
        'Select Dates': 'Chọn ngày',
        'Guests & Rooms': 'Khách & Phòng',
        'Select Guests': 'Chọn khách',
        'Adults': 'Người lớn',
        'Children': 'Trẻ em',
        'Rooms': 'Số phòng',
        'Done': 'Xong',
        'Total Price': 'Tổng tiền',
        'Pay Now': 'Thanh toán ngay',
        'Non-Refundable': 'Không hoàn tiền',
        'Cancellation is not possible for this rate.': 'Hủy phòng không được hỗ trợ với mức giá này.',
        'Choose Check-in - Check-out Dates': 'Chọn ngày Nhận và Trả phòng',

        // Profile Screen
        'My Profile': 'Hồ sơ của tôi',
        'VIP Concierge': 'Trợ lý VIP',
        'Personal Information': 'Thông tin cá nhân',
        'Payment Methods': 'Phương thức thanh toán',
        'Notifications': 'Thông báo',
        'Rewards & Points': 'Điểm & Phần thưởng',
        'Refer a Friend': 'Giới thiệu bạn bè',
        'Help Center': 'Trung tâm trợ giúp',
        'Log Out': 'Đăng xuất',
        
        // Settings Screen
        'Security': 'Bảo mật',
        'Change Password': 'Đổi mật khẩu',
        'Two-Factor Authentication': 'Xác thực 2 bước',
        'Face ID / Touch ID': 'Sinh trắc học',
        'Terms of Service': 'Điều khoản dịch vụ',
        'Privacy Policy': 'Chính sách bảo mật',
        'Legal': 'Pháp lý',
        'Feature in progress': 'Tính năng đang phát triển',
        'This feature will be available when Backend is ready!': 'Tính năng này sẽ hoàn thiện khi kết nối Backend!',
        'OK': 'Đồng ý',
        
        // Saved & Bookings
        'No saved hotels yet.': 'Chưa có khách sạn nào.',
        'Start exploring and save your favorites!': 'Hãy khám phá và lưu lại những nơi bạn yêu thích!',
        'Active': 'Hiện tại',
        'Completed': 'Đã đi',
        'Cancelled': 'Đã hủy',
        'Remove from Saved': 'Xóa khỏi danh sách',
        'removed from saved list': 'đã bị xóa khỏi danh sách',
      },
      'ru': {
        // Bottom Nav & General
        'Home': 'Главная',
        'Saved': 'Сохранено',
        'Bookings': 'Бронирования',
        'Profile': 'Профиль',
        'Settings': 'Настройки',
        'General': 'Общее',
        'Language': 'Язык',
        'Dark Mode': 'Темный режим',
        'Push Notifications': 'Уведомления',
        
        // Home Screen
        'Good morning,': 'Доброе утро,',
        'Where do you want to go?': 'Куда вы хотите поехать?',
        'Popular': 'Популярный',
        'See All': 'Смотреть все',
        'Hotel': 'Отель',
        'Resort': 'Курорт',
        'Villa': 'Вилла',
        'Apartment': 'Квартира',
        'Homestay': 'Семья',
        
        // Hotel Detail
        'Description': 'Описание',
        'Facilities': 'Удобства',
        'Price': 'Цена',
        ' / night': ' / ночь',
        'Book Now': 'Забронировать',
        'Free Wifi': 'Бесплатный Wifi',
        'Pool': 'Бассейн',
        'Restaurant': 'Ресторан',
        'Parking': 'Парковка',
        
        // Booking Screen
        'Booking Details': 'Детали бронирования',
        'Check-in - Check-out': 'Заезд - Выезд',
        'Select Dates': 'Выберите даты',
        'Guests & Rooms': 'Гости и номера',
        'Select Guests': 'Выберите гостей',
        'Adults': 'Взрослые',
        'Children': 'Дети',
        'Rooms': 'Номера',
        'Done': 'Готово',
        'Total Price': 'Итоговая цена',
        'Pay Now': 'Оплатить сейчас',
        'Non-Refundable': 'Безвозвратный',
        'Cancellation is not possible for this rate.': 'Отмена невозможна по этому тарифу.',
        'Choose Check-in - Check-out Dates': 'Выберите даты заезда и выезда',

        // Profile Screen
        'My Profile': 'Мой профиль',
        'VIP Concierge': 'VIP-консьерж',
        'Personal Information': 'Личная информация',
        'Payment Methods': 'Способы оплаты',
        'Notifications': 'Уведомления',
        'Rewards & Points': 'Награды и баллы',
        'Refer a Friend': 'Пригласить друга',
        'Help Center': 'Справочный центр',
        'Log Out': 'Выйти',
        
        // Settings Screen
        'Security': 'Безопасность',
        'Change Password': 'Изменить пароль',
        'Two-Factor Authentication': 'Двухфакторная аутентификация',
        'Face ID / Touch ID': 'Face ID / Touch ID',
        'Terms of Service': 'Условия предоставления услуг',
        'Privacy Policy': 'Политика конфиденциальности',
        'Legal': 'Юридический',
        'Feature in progress': 'Функция в разработке',
        'This feature will be available when Backend is ready!': 'Эта функция будет доступна, когда Backend будет готов!',
        'OK': 'ОК',
        
        // Saved & Bookings
        'No saved hotels yet.': 'Пока нет сохраненных отелей.',
        'Start exploring and save your favorites!': 'Начните исследовать и сохраняйте любимые места!',
        'Active': 'Активный',
        'Completed': 'Завершенный',
        'Cancelled': 'Отменен',
        'Remove from Saved': 'Удалить из сохраненных',
        'removed from saved list': 'удалено из списка сохраненных',
      },
    };

    return dict[_locale]?[key] ?? key;
  }
}

String tr(String key) {
  return AppSettings.instance.translate(key);
}
