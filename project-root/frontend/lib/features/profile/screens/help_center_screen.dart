import 'package:flutter/material.dart';
import '../../../core/app_settings.dart';
import '../../../core/responsive_wrapper.dart';

class HelpCenterScreen extends StatelessWidget {
  const HelpCenterScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ResponsiveWrapper(
      child: Scaffold(
        appBar: AppBar(
          title: Text(tr('Help Center')),
          backgroundColor: Theme.of(context).colorScheme.surface,
          elevation: 0,
        ),
        body: ListView(
          padding: const EdgeInsets.all(24.0),
          children: [
            TextField(
              decoration: InputDecoration(
                hintText: 'Search for help...',
                prefixIcon: const Icon(Icons.search),
                filled: true,
                fillColor: Theme.of(context).colorScheme.surface,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                  borderSide: BorderSide.none,
                ),
              ),
            ),
            const SizedBox(height: 24),
            const Text(
              'Frequently Asked Questions',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            _buildFaqItem('How do I cancel my booking?', 'You can cancel your booking in the Bookings tab up to 24 hours before check-in.'),
            _buildFaqItem('What payment methods are accepted?', 'We accept Visa, Mastercard, American Express, and PayPal.'),
            _buildFaqItem('How does the rewards program work?', 'Earn 10 points for every \$1 spent. Redeem points for free nights and upgrades.'),
            const SizedBox(height: 32),
            ElevatedButton.icon(
              onPressed: () {},
              icon: const Icon(Icons.support_agent, color: Colors.white),
              label: const Text('Contact Live Support', style: TextStyle(color: Colors.white)),
              style: ElevatedButton.styleFrom(
                backgroundColor: Theme.of(context).colorScheme.primary,
                padding: const EdgeInsets.symmetric(vertical: 16),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFaqItem(String question, String answer) {
    return ExpansionTile(
      title: Text(question, style: const TextStyle(fontWeight: FontWeight.w500)),
      children: [
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: Text(answer, style: const TextStyle(color: Colors.grey)),
        ),
      ],
    );
  }
}
