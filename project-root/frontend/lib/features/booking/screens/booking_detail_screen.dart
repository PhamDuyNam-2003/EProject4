import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../../../data/models/booking_model.dart';
import 'package:cached_network_image/cached_network_image.dart';
import '../../../core/booking_service.dart';

import 'vnpay_webview_screen.dart';
import '../../../core/app_settings.dart';

class BookingDetailScreen extends StatelessWidget {
  final BookingModel booking;

  const BookingDetailScreen({super.key, required this.booking});

  @override
  Widget build(BuildContext context) {
    final formatter = DateFormat('MMM dd, yyyy');
    
    // Convert enum to string
    final statusString = booking.status.toString().split('.').last;
    final paymentStatusString = booking.paymentStatus.toString().split('.').last;
    
    // Only allow cancel if it's not already cancelled
    final canCancel = statusString != 'CANCELLED';
    final canPay = statusString == 'PENDING' && paymentStatusString == 'UNPAID';

    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        title: Text(tr('Booking Details'), style: const TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: true,
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Hotel Info
            if (booking.hotel != null) ...[
              ClipRRect(
                borderRadius: BorderRadius.circular(16),
                child: booking.hotel!.images.isNotEmpty
                    ? CachedNetworkImage(
                        imageUrl: booking.hotel!.images.first,
                        height: 200,
                        width: double.infinity,
                        fit: BoxFit.cover,
                      )
                    : Container(height: 200, color: Colors.grey.shade300),
              ),
              const SizedBox(height: 16),
              Text(
                booking.hotel!.name,
                style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  const Icon(Icons.location_on_outlined, size: 16, color: Colors.grey),
                  const SizedBox(width: 4),
                  Expanded(child: Text(booking.hotel!.address, style: const TextStyle(color: Colors.grey))),
                ],
              ),
              const SizedBox(height: 24),
            ],

            // Booking Status
            _buildSection(context, tr('Booking Status'), [
              _buildDetailRow(tr('Status'), tr(statusString), isHighlighted: statusString == 'CANCELLED', highlightColor: Colors.red),
              _buildDetailRow(tr('Payment'), tr(paymentStatusString), isHighlighted: paymentStatusString == 'REFUNDING', highlightColor: Colors.orange),
              _buildDetailRow(tr('Booking Date'), formatter.format(booking.createdAt)),
            ]),
            
            // Stay Details
            _buildSection(context, tr('Stay Details'), [
              _buildDetailRow(tr('Check-in'), formatter.format(booking.checkInDate)),
              _buildDetailRow(tr('Check-out'), formatter.format(booking.checkOutDate)),
              _buildDetailRow(tr('Total Price'), '\$${booking.finalAmount.toStringAsFixed(2)}'),
            ]),

            if (canPay) ...[
              const SizedBox(height: 32),
              SizedBox(
                width: double.infinity,
                height: 54,
                child: ElevatedButton(
                  onPressed: () => _handleVnpayPayment(context),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Theme.of(context).colorScheme.primary,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: Text(tr('Continue Payment'), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                ),
              ),
            ],

            if (canCancel) ...[
              SizedBox(height: canPay ? 16 : 32),
              SizedBox(
                width: double.infinity,
                height: 54,
                child: ElevatedButton(
                  onPressed: () {
                    if (paymentStatusString == 'UNPAID') {
                      _showUnpaidCancelDialog(context);
                    } else {
                      _showRefundBottomSheet(context);
                    }
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red.shade50,
                    foregroundColor: Colors.red,
                    elevation: 0,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: Text(paymentStatusString == 'PAID' ? tr('Request Cancel & Refund') : tr('Cancel Booking'), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                ),
              ),
            ],
            
            if (paymentStatusString == 'PAID' || paymentStatusString == 'REFUNDED') ...[
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                height: 54,
                child: OutlinedButton.icon(
                  onPressed: () => _viewInvoice(context),
                  icon: const Icon(Icons.receipt_long),
                  label: Text(tr('View Invoice'), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: Theme.of(context).colorScheme.primary,
                    side: BorderSide(color: Theme.of(context).colorScheme.primary),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                ),
              ),
            ],
            

          ],
        ),
      ),
    );
  }

  Widget _buildSection(BuildContext context, String title, List<Widget> children) {
    return Container(
      margin: const EdgeInsets.only(bottom: 24),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Theme.of(context).cardColor,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.grey.withOpacity(0.1)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          const SizedBox(height: 16),
          ...children,
        ],
      ),
    );
  }

  Widget _buildDetailRow(String label, String value, {bool isHighlighted = false, Color highlightColor = Colors.black}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(color: Colors.grey, fontSize: 16)),
          Text(
            value, 
            style: TextStyle(
              fontWeight: FontWeight.bold, 
              fontSize: 16,
              color: isHighlighted ? highlightColor : null,
            ),
          ),
        ],
      ),
    );
  }

  void _showRefundBottomSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => RefundBottomSheet(bookingId: booking.id),
    );
  }

  void _showUnpaidCancelDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Xác nhận Hủy Đơn', style: TextStyle(fontWeight: FontWeight.bold)),
        content: const Text('Bạn có chắc chắn muốn hủy đơn đặt phòng này không?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Không'),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              _processUnpaidCancel(context);
            },
            style: ElevatedButton.styleFrom(backgroundColor: Colors.red, foregroundColor: Colors.white),
            child: const Text('Có, Hủy Đơn'),
          ),
        ],
      ),
    );
  }

  void _processUnpaidCancel(BuildContext context) async {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => const Center(child: CircularProgressIndicator()),
    );
    try {
      await BookingService.instance.cancelBookingRequest(
        bookingId: booking.id,
        bankName: 'N/A',
        accountNumber: 'N/A',
        reason: 'Khách hàng hủy khi chưa thanh toán',
      );
      if (context.mounted) {
        Navigator.pop(context); // close loading
        Navigator.pop(context, true); // pop screen
      }
    } catch (e) {
      if (context.mounted) {
        Navigator.pop(context); // close loading
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.toString()), backgroundColor: Colors.red));
      }
    }
  }



  Future<void> _handleVnpayPayment(BuildContext context) async {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => const Center(child: CircularProgressIndicator()),
    );
    try {
      final paymentUrl = await BookingService.instance.createPaymentUrl(booking.id);
      if (context.mounted) {
        Navigator.pop(context); // close loading
        final result = await Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => VnpayWebviewScreen(
              paymentUrl: paymentUrl,
              returnUrlPrefix: 'http://localhost:3002/api/payment/vnpay/return',
            ),
          ),
        );
        if (result == true && context.mounted) {
          Navigator.pop(context, true); // trigger reload
        }
      }
    } catch (e) {
      if (context.mounted) {
        Navigator.pop(context); // close loading
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.toString()), backgroundColor: Colors.red));
      }
    }
  }

  Future<void> _viewInvoice(BuildContext context) async {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => const Center(child: CircularProgressIndicator()),
    );
    try {
      final data = await BookingService.instance.getInvoice(booking.id);
      if (context.mounted) {
        Navigator.pop(context); // close loading
        showDialog(
          context: context,
          builder: (ctx) => AlertDialog(
            title: const Text('Invoice Details', style: TextStyle(fontWeight: FontWeight.bold)),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Invoice Number: ${data['invoice']['invoiceNumber']}'),
                const SizedBox(height: 8),
                Text('Issued At: ${DateFormat('MMM dd, yyyy HH:mm').format(DateTime.parse(data['invoice']['issuedAt']))}'),
                const SizedBox(height: 16),
                const Divider(),
                const SizedBox(height: 16),
                Text('Total Amount: \$${data['finalAmount']}', style: const TextStyle(fontWeight: FontWeight.bold)),
              ],
            ),
            actions: [
              TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close'))
            ],
          ),
        );
      }
    } catch (e) {
      if (context.mounted) {
        Navigator.pop(context); // close loading
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.toString()), backgroundColor: Colors.red));
      }
    }
  }

  void _showPaymentTransferSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => PaymentTransferBottomSheet(booking: booking),
    );
  }
}

class PaymentTransferBottomSheet extends StatelessWidget {
  final BookingModel booking;
  const PaymentTransferBottomSheet({super.key, required this.booking});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text('Chuyển khoản thanh toán', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              IconButton(icon: const Icon(Icons.close), onPressed: () => Navigator.pop(context)),
            ],
          ),
          const SizedBox(height: 16),
          const Text('Vui lòng chuyển khoản số tiền tương ứng vào tài khoản dưới đây để hoàn tất việc đặt phòng.', style: TextStyle(color: Colors.grey)),
          const SizedBox(height: 24),
          _buildInfoRow('Ngân hàng:', 'Vietcombank'),
          _buildInfoRow('Số tài khoản:', '0123456789'),
          _buildInfoRow('Chủ tài khoản:', 'LUXURY HOTEL CO LTD'),
          _buildInfoRow('Số tiền:', '\$${booking.finalAmount.toStringAsFixed(2)}', isBold: true),
          _buildInfoRow('Nội dung chuyển khoản:', 'Thanh toan don ${(booking.id.length < 8 ? booking.id : booking.id.substring(0, 8)).toUpperCase()}', isBold: true),
          const SizedBox(height: 32),
          SizedBox(
            width: double.infinity,
            height: 54,
            child: ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Đã xác nhận thanh toán thành công!'), backgroundColor: Colors.green));
                // Simulate success and close screen
                Navigator.pop(context, true);
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Theme.of(context).colorScheme.primary,
                foregroundColor: Colors.white,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text('Tôi đã chuyển khoản thành công', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            ),
          ),
          const SizedBox(height: 16),
        ],
      ),
    );
  }

  Widget _buildInfoRow(String label, String value, {bool isBold = false}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 140,
            child: Text(label, style: const TextStyle(color: Colors.grey, fontSize: 16)),
          ),
          Expanded(
            child: Text(
              value,
              style: TextStyle(
                fontWeight: isBold ? FontWeight.bold : FontWeight.w500,
                fontSize: 16,
                color: isBold ? Colors.black : Colors.black87,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class RefundBottomSheet extends StatefulWidget {
  final String bookingId;
  const RefundBottomSheet({super.key, required this.bookingId});

  @override
  State<RefundBottomSheet> createState() => _RefundBottomSheetState();
}

class _RefundBottomSheetState extends State<RefundBottomSheet> {
  final _bankNameController = TextEditingController();
  final _accountController = TextEditingController();
  final _phoneController = TextEditingController();
  bool _isLoading = false;

  void _submitRefund() async {
    if (_bankNameController.text.isEmpty || _accountController.text.isEmpty || _phoneController.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Vui lòng điền đủ thông tin')));
      return;
    }

    setState(() => _isLoading = true);

    try {
      await BookingService.instance.cancelBookingRequest(
        bookingId: widget.bookingId,
        bankName: _bankNameController.text,
        accountNumber: _accountController.text,
        reason: _phoneController.text, // Sending phone number as reason for now
        imageBase64: null,
      );

      if (mounted) {
        Navigator.pop(context); // close sheet
        Navigator.pop(context, true); // go back to list and signal refresh
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.toString()), backgroundColor: Colors.red));
      }
    } finally {
      if (mounted) setState(() => _isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      padding: EdgeInsets.only(
        left: 24, right: 24, top: 24,
        bottom: MediaQuery.of(context).viewInsets.bottom + 24,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text('Yêu cầu Hủy & Hoàn tiền', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              IconButton(icon: const Icon(Icons.close), onPressed: () => Navigator.pop(context)),
            ],
          ),
          const SizedBox(height: 16),
          const Text('Vui lòng cung cấp thông tin để chúng tôi hoàn tiền.', style: TextStyle(color: Colors.grey)),
          const SizedBox(height: 24),
          TextField(
            controller: _bankNameController,
            decoration: const InputDecoration(labelText: 'Tên Ngân hàng & Chủ tài khoản', border: OutlineInputBorder()),
          ),
          const SizedBox(height: 16),
          TextField(
            controller: _accountController,
            decoration: const InputDecoration(labelText: 'Số tài khoản', border: OutlineInputBorder()),
            keyboardType: TextInputType.number,
          ),
          const SizedBox(height: 16),
          TextField(
            controller: _phoneController,
            decoration: const InputDecoration(labelText: 'Số điện thoại', border: OutlineInputBorder()),
            keyboardType: TextInputType.phone,
          ),
          const SizedBox(height: 24),
          SizedBox(
            width: double.infinity,
            height: 54,
            child: ElevatedButton(
              onPressed: _isLoading ? null : _submitRefund,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.red,
                foregroundColor: Colors.white,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: _isLoading 
                ? const SizedBox(width: 24, height: 24, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2))
                : const Text('Gửi Yêu Cầu Hủy', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            ),
          ),
        ],
      ),
    );
  }
}
