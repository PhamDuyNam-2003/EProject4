import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:url_launcher/url_launcher.dart';

class VnpayWebviewScreen extends StatefulWidget {
  final String paymentUrl;
  final String returnUrlPrefix; // e.g., 'http://10.0.2.2:3002/api/payment/vnpay/return' or similar

  const VnpayWebviewScreen({
    Key? key,
    required this.paymentUrl,
    required this.returnUrlPrefix,
  }) : super(key: key);

  @override
  State<VnpayWebviewScreen> createState() => _VnpayWebviewScreenState();
}

class _VnpayWebviewScreenState extends State<VnpayWebviewScreen> {
  InAppWebViewController? webViewController;
  double progress = 0;
  bool isFinished = false;

  @override
  void initState() {
    super.initState();
    if (kIsWeb) {
      _launchVnpayWeb();
    }
  }

  Future<void> _launchVnpayWeb() async {
    final uri = Uri.parse(widget.paymentUrl);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('VNPay Payment'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        elevation: 1,
      ),
      body: kIsWeb ? _buildWebFallback() : _buildWebView(),
    );
  }

  Widget _buildWebFallback() {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.open_in_browser, size: 80, color: Colors.blue),
            const SizedBox(height: 24),
            const Text(
              'Đang chuyển hướng đến VNPay...',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            const Text(
              'Vì lý do bảo mật của trình duyệt, trang thanh toán VNPay đã được mở ở một tab mới. Vui lòng hoàn tất thanh toán ở tab đó.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.grey, fontSize: 16),
            ),
            const SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              height: 50,
              child: ElevatedButton(
                onPressed: _launchVnpayWeb,
                child: const Text('Mở lại trang thanh toán', style: TextStyle(fontSize: 16)),
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              height: 50,
              child: OutlinedButton(
                onPressed: () {
                  Navigator.pop(context, true);
                },
                child: const Text('Tôi đã thanh toán xong', style: TextStyle(fontSize: 16)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildWebView() {
    return Stack(
      children: [
        InAppWebView(
          initialUrlRequest: URLRequest(url: WebUri(widget.paymentUrl)),
          initialSettings: InAppWebViewSettings(
            javaScriptEnabled: true,
            transparentBackground: true,
          ),
          onWebViewCreated: (controller) {
            webViewController = controller;
          },
          onProgressChanged: (controller, p) {
            setState(() {
              progress = p / 100;
            });
          },
          onLoadStart: (controller, url) {
            if (url != null && url.toString().startsWith(widget.returnUrlPrefix)) {
              // Return URL matches, VNPay has redirected back.
              setState(() {
                isFinished = true;
              });
              
              // Wait a bit for backend to process, then pop
              Future.delayed(const Duration(seconds: 2), () {
                if (mounted) {
                  Navigator.pop(context, true); // true = process done (success or fail)
                }
              });
            }
          },
        ),
        if (progress < 1.0 && !isFinished)
          LinearProgressIndicator(value: progress),
        if (isFinished)
          Container(
            color: Colors.white.withOpacity(0.9),
            child: const Center(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  CircularProgressIndicator(),
                  SizedBox(height: 16),
                  Text('Processing payment...', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                ],
              ),
            ),
          ),
      ],
    );
  }
}
