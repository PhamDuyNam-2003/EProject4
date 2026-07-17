import 'package:flutter/material.dart';
import '../../../core/app_settings.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(
        title: Text(tr('Settings'), style: const TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: Theme.of(context).colorScheme.surface,
        elevation: 0,
      ),
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          _buildSettingsSection(
            tr('General'),
            [
              ListTile(
                title: Text(tr('Language'), style: const TextStyle(fontWeight: FontWeight.w500)),
                trailing: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(AppSettings.instance.locale.toUpperCase(), style: const TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)),
                    const Icon(Icons.chevron_right, color: Colors.grey),
                  ],
                ),
                onTap: _showLanguageDialog,
              ),
              _buildSwitchTile(tr('Dark Mode'), AppSettings.instance.isDarkMode, (val) {
                AppSettings.instance.toggleTheme(val);
                setState(() {});
              }),
              _buildSwitchTile(tr('Push Notifications'), true, (val) {}),
            ],
          ),
          const SizedBox(height: 32),
          _buildSettingsSection(
            tr('Security'),
            [
              _buildArrowTile(tr('Change Password')),
              _buildArrowTile(tr('Two-Factor Authentication')),
              _buildArrowTile(tr('Face ID / Touch ID')),
            ],
          ),
          const SizedBox(height: 32),
          _buildSettingsSection(
            tr('Legal'),
            [
              _buildArrowTile(tr('Terms of Service')),
              _buildArrowTile(tr('Privacy Policy')),
            ],
          ),
        ],
      ),
    );
  }

  void _showLanguageDialog() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text(tr('Language')),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              ListTile(
                title: const Text('English'),
                onTap: () {
                  AppSettings.instance.setLocale('en');
                  Navigator.pop(context);
                  setState(() {});
                },
              ),
              ListTile(
                title: const Text('Tiếng Việt'),
                onTap: () {
                  AppSettings.instance.setLocale('vi');
                  Navigator.pop(context);
                  setState(() {});
                },
              ),
              ListTile(
                title: const Text('Русский'),
                onTap: () {
                  AppSettings.instance.setLocale('ru');
                  Navigator.pop(context);
                  setState(() {});
                },
              ),
            ],
          ),
        );
      },
    );
  }

  void _showFeatureInProgressDialog() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Row(
            children: [
              const Icon(Icons.construction, color: Colors.orange),
              const SizedBox(width: 8),
              Expanded(child: Text(tr('Feature in progress'))),
            ],
          ),
          content: Text(tr('This feature will be available when Backend is ready!')),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text(tr('OK')),
            ),
          ],
        );
      },
    );
  }

  Widget _buildSettingsSection(String title, List<Widget> children) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.grey.shade500),
        ),
        const SizedBox(height: 16),
        Container(
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.surface,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: Theme.of(context).dividerColor.withOpacity(0.1)),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.02),
                blurRadius: 10,
                offset: const Offset(0, 5),
              ),
            ],
          ),
          child: Column(
            children: children,
          ),
        ),
      ],
    );
  }

  Widget _buildSwitchTile(String title, bool value, Function(bool) onChanged) {
    return SwitchListTile(
      title: Text(title, style: const TextStyle(fontWeight: FontWeight.w500)),
      value: value,
      onChanged: onChanged,
      activeColor: Colors.blue.shade700,
    );
  }

  Widget _buildArrowTile(String title) {
    return ListTile(
      title: Text(title, style: const TextStyle(fontWeight: FontWeight.w500)),
      trailing: const Icon(Icons.chevron_right, color: Colors.grey),
      onTap: _showFeatureInProgressDialog,
    );
  }
}
