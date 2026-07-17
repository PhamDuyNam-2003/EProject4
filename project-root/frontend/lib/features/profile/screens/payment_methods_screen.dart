import 'package:flutter/material.dart';

class PaymentMethodsScreen extends StatelessWidget {
  const PaymentMethodsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(
        title: const Text('Payment Methods', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Saved Cards',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            _buildCreditCard(
              context,
              color1: const Color(0xFF1E3A8A),
              color2: const Color(0xFF3B82F6),
              cardNumber: '**** **** **** 4242',
              cardHolder: 'NGUYEN VAN KHACH',
              expiryDate: '12/28',
              isDefault: true,
            ),
            const SizedBox(height: 16),
            _buildCreditCard(
              context,
              color1: const Color(0xFF1F2937),
              color2: const Color(0xFF4B5563),
              cardNumber: '**** **** **** 8888',
              cardHolder: 'NGUYEN VAN KHACH',
              expiryDate: '09/27',
              isDefault: false,
            ),
            const SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              height: 56,
              child: OutlinedButton.icon(
                onPressed: () {},
                icon: const Icon(Icons.add),
                label: const Text('Add New Card', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                style: OutlinedButton.styleFrom(
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCreditCard(
    BuildContext context, {
    required Color color1,
    required Color color2,
    required String cardNumber,
    required String cardHolder,
    required String expiryDate,
    required bool isDefault,
  }) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [color1, color2],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: color2.withOpacity(0.4),
            blurRadius: 15,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Icon(Icons.credit_card, color: Colors.white, size: 32),
              if (isDefault)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const Text('Default', style: TextStyle(color: Colors.white, fontSize: 12)),
                ),
            ],
          ),
          const SizedBox(height: 32),
          Text(
            cardNumber,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 22,
              letterSpacing: 2,
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 24),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Card Holder', style: TextStyle(color: Colors.white.withOpacity(0.7), fontSize: 10)),
                  const SizedBox(height: 4),
                  Text(cardHolder, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                ],
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Expires', style: TextStyle(color: Colors.white.withOpacity(0.7), fontSize: 10)),
                  const SizedBox(height: 4),
                  Text(expiryDate, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
