import 'package:flutter/material.dart';
import '../../../core/auth_service.dart';
import '../../../core/app_settings.dart';

import 'package:image_picker/image_picker.dart';

class PersonalInfoScreen extends StatefulWidget {
  const PersonalInfoScreen({super.key});

  @override
  State<PersonalInfoScreen> createState() => _PersonalInfoScreenState();
}

class _PersonalInfoScreenState extends State<PersonalInfoScreen> {
  String _mockAvatarUrl = '';
  bool _isUploading = false;
  final ImagePicker _picker = ImagePicker();

  @override
  void initState() {
    super.initState();
    final user = AuthService.instance.currentUser;
    final userName = user?.profile?.fullName ?? '';
    _mockAvatarUrl = user?.profile?.avatarUrl ?? 'https://ui-avatars.com/api/?name=${userName.isNotEmpty ? userName : 'K'}&background=1E3A8A&color=fff&size=128';
  }

  void _updateAvatarReal() async {
    final XFile? image = await _picker.pickImage(source: ImageSource.gallery);
    
    if (image != null) {
      setState(() {
        _isUploading = true;
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(tr('Uploading avatar...')), duration: const Duration(seconds: 1), backgroundColor: Colors.blue),
      );

      try {
        final user = AuthService.instance.currentUser;
        if (user != null) {
          final bytes = await image.readAsBytes();
          await AuthService.instance.updateAvatar(user.id, bytes, image.name);
          setState(() {
            _mockAvatarUrl = user.profile?.avatarUrl ?? _mockAvatarUrl;
            _isUploading = false;
          });
          if (mounted) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text(tr('Avatar updated successfully!')), backgroundColor: Colors.green),
            );
          }
        }
      } catch (e) {
        setState(() => _isUploading = false);
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text(e.toString()), backgroundColor: Colors.red),
          );
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final user = AuthService.instance.currentUser;
    final userName = user?.profile?.fullName ?? '';
    final userEmail = user?.email ?? '';
    final userPhone = user?.profile?.phoneNumber ?? '';
    final userAddress = user?.profile?.address ?? '';
    
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bgColor = Theme.of(context).scaffoldBackgroundColor;
    final textColor = isDark ? Colors.white : Colors.black;
    final inputFillColor = isDark ? Colors.grey.shade900 : Colors.white;

    return Scaffold(
      backgroundColor: bgColor,
      appBar: AppBar(
        title: Text(tr('Personal Information'), style: TextStyle(fontWeight: FontWeight.bold, color: textColor)),
        backgroundColor: bgColor,
        elevation: 0,
        iconTheme: IconThemeData(color: textColor),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          children: [
            Center(
              child: Stack(
                children: [
                  Container(
                    width: 100,
                    height: 100,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: const Color(0xFFFFD700), width: 3),
                      image: DecorationImage(
                        image: NetworkImage(_mockAvatarUrl),
                        fit: BoxFit.cover,
                      ),
                    ),
                    child: _isUploading 
                        ? const Center(child: CircularProgressIndicator(color: Color(0xFFFFD700)))
                        : null,
                  ),
                  Positioned(
                    bottom: 0,
                    right: 0,
                    child: GestureDetector(
                      onTap: _isUploading ? null : _updateAvatarReal,
                      child: Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          color: Theme.of(context).colorScheme.primary,
                          shape: BoxShape.circle,
                          border: Border.all(color: bgColor, width: 2),
                        ),
                        child: const Icon(Icons.camera_alt, size: 16, color: Colors.white),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 32),
            _buildTextField(tr('Full Name'), userName, inputFillColor, textColor),
            const SizedBox(height: 16),
            _buildTextField(tr('Email'), userEmail, inputFillColor, textColor),
            const SizedBox(height: 16),
            _buildTextField(tr('Phone Number'), userPhone, inputFillColor, textColor),
            const SizedBox(height: 16),
            _buildTextField(tr('Address'), userAddress, inputFillColor, textColor),
            const SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              height: 56,
              child: ElevatedButton(
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text(tr('Saved successfully!')), backgroundColor: Colors.green),
                  );
                  Navigator.pop(context);
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Theme.of(context).colorScheme.primary,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
                child: Text(tr('Save Changes'), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTextField(String label, String initialValue, Color fillColor, Color textColor) {
    return TextFormField(
      initialValue: initialValue,
      style: TextStyle(color: textColor),
      decoration: InputDecoration(
        labelText: label,
        labelStyle: const TextStyle(color: Colors.grey),
        filled: true,
        fillColor: fillColor,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: BorderSide(color: Colors.grey.withOpacity(0.3)),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: BorderSide(color: Colors.grey.withOpacity(0.3)),
        ),
      ),
    );
  }
}
