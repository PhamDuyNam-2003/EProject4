import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../../../core/app_settings.dart';
import '../../../core/responsive_wrapper.dart';
import 'login_screen.dart';

class OTPScreen extends StatefulWidget {
  final String email;
  const OTPScreen({super.key, required this.email});

  @override
  State<OTPScreen> createState() => _OTPScreenState();
}

class _OTPScreenState extends State<OTPScreen> {
  final List<TextEditingController> _controllers = List.generate(6, (index) => TextEditingController());
  final List<FocusNode> _focusNodes = List.generate(6, (index) => FocusNode());
  bool _isLoading = false;

  void _verifyOTP() async {
    String otp = _controllers.map((c) => c.text).join();
    if (otp.length < 6) return;
    
    setState(() => _isLoading = true);
    try {
      await Future.delayed(const Duration(seconds: 2)); // Giả lập verify API
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(tr('Verification Successful! Please log in.')), backgroundColor: Colors.green),
        );
        Navigator.pushAndRemoveUntil(
          context,
          MaterialPageRoute(builder: (context) => const LoginScreen()),
          (route) => false,
        );
      }
    } finally {
      if (mounted) setState(() => _isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: ResponsiveWrapper(
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  tr('Enter OTP'),
                  style: const TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 8),
                Text(
                  tr('We have sent a verification code to\n${widget.email}'),
                  style: TextStyle(fontSize: 16, color: Colors.grey.shade600, height: 1.5),
                ),
                const SizedBox(height: 48),

                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: List.generate(6, (index) {
                    return SizedBox(
                      width: 50,
                      child: TextField(
                        controller: _controllers[index],
                        focusNode: _focusNodes[index],
                        textAlign: TextAlign.center,
                        keyboardType: TextInputType.number,
                        maxLength: 1,
                        style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                        decoration: InputDecoration(
                          counterText: '',
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: BorderSide(color: Theme.of(context).colorScheme.primary, width: 2),
                          ),
                        ),
                        inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                        onChanged: (value) {
                          if (value.isNotEmpty) {
                            if (index < 5) {
                              _focusNodes[index + 1].requestFocus();
                            } else {
                              _focusNodes[index].unfocus();
                              _verifyOTP(); // Tự động verify khi nhập xong ô cuối
                            }
                          } else if (value.isEmpty && index > 0) {
                            _focusNodes[index - 1].requestFocus();
                          }
                        },
                      ),
                    );
                  }),
                ),
                const SizedBox(height: 48),

                ElevatedButton(
                  onPressed: _isLoading ? null : _verifyOTP,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Theme.of(context).colorScheme.primary,
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: _isLoading
                      ? const SizedBox(
                          width: 24,
                          height: 24,
                          child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2),
                        )
                      : Text(
                          tr('Verify'),
                          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                        ),
                ),
                const SizedBox(height: 24),
                
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(tr("Didn't receive the code?"), style: TextStyle(color: Colors.grey.shade600)),
                    TextButton(
                      onPressed: () {
                        // Resend logic
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(content: Text(tr('OTP Resent!'))),
                        );
                      },
                      child: Text(tr('Resend'), style: const TextStyle(fontWeight: FontWeight.bold)),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    for (var c in _controllers) { c.dispose(); }
    for (var f in _focusNodes) { f.dispose(); }
    super.dispose();
  }
}
