import 'package:flutter/material.dart';

class ResponsiveWrapper extends StatelessWidget {
  final Widget child;
  final double maxWidth;

  const ResponsiveWrapper({
    super.key,
    required this.child,
    this.maxWidth = 800,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: maxWidth),
        child: Container(
          // Option: Add a subtle border or shadow for web if it doesn't take up full width
          decoration: BoxDecoration(
            color: Theme.of(context).scaffoldBackgroundColor,
            boxShadow: MediaQuery.of(context).size.width > maxWidth
                ? [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.05),
                      blurRadius: 20,
                      spreadRadius: 5,
                    )
                  ]
                : [],
          ),
          child: child,
        ),
      ),
    );
  }
}
