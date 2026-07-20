import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:intl/intl.dart';
import '../../../core/analytics_service.dart';
import '../../../config/constants.dart';
import '../../../core/app_settings.dart';
import '../../../core/responsive_wrapper.dart';

class AnalyticsScreen extends StatefulWidget {
  final String? hotelId;
  const AnalyticsScreen({super.key, this.hotelId});

  @override
  State<AnalyticsScreen> createState() => _AnalyticsScreenState();
}

class _AnalyticsScreenState extends State<AnalyticsScreen> {
  bool _isLoading = true;
  double _totalRevenue = 0;
  int _totalOrders = 0;
  List<dynamic> _revenueHistory = [];
  String _errorMessage = '';

  @override
  void initState() {
    super.initState();
    _fetchData();
  }

  Future<void> _fetchData() async {
    setState(() {
      _isLoading = true;
      _errorMessage = '';
    });
    try {
      final revenueData = await AnalyticsService.instance.getRevenue(hotelId: widget.hotelId);
      final historyData = await AnalyticsService.instance.getRevenueHistory(hotelId: widget.hotelId, days: 7);
      
      if (mounted) {
        setState(() {
          _totalRevenue = (revenueData['data']['totalRevenue'] ?? 0).toDouble();
          _totalOrders = revenueData['data']['totalOrders'] ?? 0;
          _revenueHistory = historyData['data'] ?? [];
          _isLoading = false;
        });
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _errorMessage = e.toString().replaceAll('Exception: ', '');
          _isLoading = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      appBar: AppBar(
        title: Text(tr('Analytics Dashboard'), style: const TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: true,
        backgroundColor: Theme.of(context).colorScheme.surface,
        elevation: 0,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _fetchData,
          )
        ],
      ),
      body: ResponsiveWrapper(
        child: _isLoading
            ? const Center(child: CircularProgressIndicator(color: AppConstants.primaryColor))
            : _errorMessage.isNotEmpty
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Icon(Icons.error_outline, color: Colors.red, size: 48),
                        const SizedBox(height: 16),
                        Text(_errorMessage, style: const TextStyle(color: Colors.white)),
                        const SizedBox(height: 16),
                        ElevatedButton(
                          onPressed: _fetchData,
                          style: ElevatedButton.styleFrom(backgroundColor: AppConstants.primaryColor),
                          child: const Text('Retry'),
                        )
                      ],
                    ),
                  )
                : RefreshIndicator(
                    onRefresh: _fetchData,
                    color: AppConstants.primaryColor,
                    child: SingleChildScrollView(
                      physics: const AlwaysScrollableScrollPhysics(),
                      padding: const EdgeInsets.all(24.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          _buildSummaryCards(),
                          const SizedBox(height: 32),
                          Text(
                            tr('Revenue History (Last 7 days)'),
                            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white),
                          ),
                          const SizedBox(height: 16),
                          _buildChart(),
                        ],
                      ),
                    ),
                  ),
      ),
    );
  }

  Widget _buildSummaryCards() {
    final currencyFormatter = NumberFormat.currency(locale: 'vi_VN', symbol: '₫');
    return Row(
      children: [
        Expanded(
          child: _buildCard(
            title: tr('Total Revenue'),
            value: currencyFormatter.format(_totalRevenue),
            icon: Icons.account_balance_wallet,
            color: const Color(0xFFD4AF37),
          ),
        ),
        const SizedBox(width: 16),
        Expanded(
          child: _buildCard(
            title: tr('Total Orders'),
            value: _totalOrders.toString(),
            icon: Icons.shopping_cart,
            color: Colors.blueAccent,
          ),
        ),
      ],
    );
  }

  Widget _buildCard({required String title, required String value, required IconData icon, required Color color}) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppConstants.cardColor,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: color.withValues(alpha: 0.1),
            blurRadius: 20,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: color.withValues(alpha: 0.1),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Icon(icon, color: color, size: 28),
          ),
          const SizedBox(height: 16),
          Text(
            title,
            style: TextStyle(color: Colors.grey.shade400, fontSize: 14),
          ),
          const SizedBox(height: 8),
          Text(
            value,
            style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
          ),
        ],
      ),
    );
  }

  Widget _buildChart() {
    if (_revenueHistory.isEmpty) {
      return Container(
        height: 300,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: AppConstants.cardColor,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Text(tr('No data available'), style: TextStyle(color: Colors.grey.shade500)),
      );
    }

    final double maxRevenue = _revenueHistory.isEmpty 
        ? 1000 
        : _revenueHistory.map((e) => (e['revenue'] ?? 0).toDouble()).reduce((a, b) => a > b ? a : b);
    
    // Safety check for maxRevenue = 0
    final double maxY = maxRevenue == 0 ? 100 : maxRevenue * 1.2;

    List<FlSpot> spots = [];
    for (int i = 0; i < _revenueHistory.length; i++) {
      final revenue = (_revenueHistory[i]['revenue'] ?? 0).toDouble();
      spots.add(FlSpot(i.toDouble(), revenue));
    }

    return Container(
      height: 350,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppConstants.cardColor,
        borderRadius: BorderRadius.circular(20),
      ),
      child: LineChart(
        LineChartData(
          gridData: FlGridData(
            show: true,
            drawVerticalLine: false,
            horizontalInterval: maxY / 5,
            getDrawingHorizontalLine: (value) {
              return FlLine(
                color: Colors.grey.withValues(alpha: 0.1),
                strokeWidth: 1,
              );
            },
          ),
          titlesData: FlTitlesData(
            show: true,
            rightTitles: const AxisTitles(sideTitles: SideTitles(showTitles: false)),
            topTitles: const AxisTitles(sideTitles: SideTitles(showTitles: false)),
            bottomTitles: AxisTitles(
              sideTitles: SideTitles(
                showTitles: true,
                reservedSize: 30,
                interval: 1,
                getTitlesWidget: (value, meta) {
                  final index = value.toInt();
                  if (index >= 0 && index < _revenueHistory.length) {
                    final dateStr = _revenueHistory[index]['date'] as String;
                    try {
                      final date = DateTime.parse(dateStr);
                      return Padding(
                        padding: const EdgeInsets.only(top: 8.0),
                        child: Text(
                          DateFormat('MM/dd').format(date),
                          style: TextStyle(color: Colors.grey.shade400, fontSize: 10),
                        ),
                      );
                    } catch (e) {
                      return const SizedBox();
                    }
                  }
                  return const SizedBox();
                },
              ),
            ),
            leftTitles: AxisTitles(
              sideTitles: SideTitles(
                showTitles: true,
                interval: maxY / 5,
                reservedSize: 42,
                getTitlesWidget: (value, meta) {
                  if (value == maxY) return const SizedBox();
                  return Text(
                    NumberFormat.compact().format(value),
                    style: TextStyle(color: Colors.grey.shade400, fontSize: 10),
                  );
                },
              ),
            ),
          ),
          borderData: FlBorderData(show: false),
          minX: 0,
          maxX: (_revenueHistory.length - 1).toDouble(),
          minY: 0,
          maxY: maxY,
          lineBarsData: [
            LineChartBarData(
              spots: spots,
              isCurved: true,
              color: const Color(0xFFD4AF37),
              barWidth: 3,
              isStrokeCapRound: true,
              dotData: const FlDotData(show: true),
              belowBarData: BarAreaData(
                show: true,
                color: const Color(0xFFD4AF37).withValues(alpha: 0.15),
              ),
            ),
          ],
          lineTouchData: LineTouchData(
            touchTooltipData: LineTouchTooltipData(
              getTooltipItems: (touchedSpots) {
                return touchedSpots.map((LineBarSpot touchedSpot) {
                  final textStyle = const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 12,
                  );
                  return LineTooltipItem(
                    NumberFormat.currency(locale: 'vi_VN', symbol: '₫').format(touchedSpot.y),
                    textStyle,
                  );
                }).toList();
              },
            ),
          ),
        ),
      ),
    );
  }
}
