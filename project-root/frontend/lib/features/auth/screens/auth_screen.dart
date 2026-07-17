import 'package:flutter/material.dart';
import 'dart:ui';
import '../../../main.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  bool isLogin = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [

          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage('assets/images/luxury_lobby.png'),
                fit: BoxFit.cover,
              ),
            ),
          ),

          Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Colors.black.withOpacity(0.3),
                  Colors.black.withOpacity(0.7),
                ],
              ),
            ),
          ),

          Center(
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24.0),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(30),
                  child: BackdropFilter(
                    filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                    child: Container(
                      padding: const EdgeInsets.all(32),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.15),
                        borderRadius: BorderRadius.circular(30),
                        border: Border.all(
                          color: Colors.white.withOpacity(0.3),
                          width: 1.5,
                        ),
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(
                            Icons.hotel_class,
                            size: 60,
                            color: Colors.white,
                          ),
                          const SizedBox(height: 16),
                          Text(
                            isLogin ? 'Welcome Back' : 'Create Account',
                            style: const TextStyle(
                              fontSize: 28,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            isLogin
                                ? 'Sign in to book your luxury stay'
                                : 'Join us for exclusive luxury experiences',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 14,
                              color: Colors.white.withOpacity(0.8),
                            ),
                          ),
                          const SizedBox(height: 32),

                          _buildTextField(
                            hint: 'Email Address',
                            icon: Icons.email_outlined,
                          ),
                          const SizedBox(height: 16),

                          _buildTextField(
                            hint: 'Password',
                            icon: Icons.lock_outline,
                            isPassword: true,
                          ),

                          if (!isLogin) ...[
                            const SizedBox(height: 16),

                            _buildTextField(
                              hint: 'Confirm Password',
                              icon: Icons.lock_outline,
                              isPassword: true,
                            ),
                          ],

                          if (isLogin)
                            Align(
                              alignment: Alignment.centerRight,
                              child: TextButton(
                                onPressed: () {},
                                child: const Text(
                                  'Forgot Password?',
                                  style: TextStyle(color: Colors.white),
                                ),
                              ),
                            )
                          else
                            const SizedBox(height: 24),

                          const SizedBox(height: 8),

                          SizedBox(
                            width: double.infinity,
                            height: 56,
                            child: ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Theme.of(context).colorScheme.primary,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(16),
                                ),
                              ),
                              onPressed: () {

                                Navigator.pushReplacement(
                                  context,
                                  MaterialPageRoute(builder: (context) => const MainNavigationScreen()),
                                );
                              },
                              child: Text(
                                isLogin ? 'Sign In' : 'Sign Up',
                                style: const TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.white,
                                ),
                              ),
                            ),
                          ),

                          const SizedBox(height: 24),

                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                isLogin
                                    ? "Don't have an account? "
                                    : "Already have an account? ",
                                style: TextStyle(
                                  color: Colors.white.withOpacity(0.8),
                                ),
                              ),
                              GestureDetector(
                                onTap: () {
                                  setState(() {
                                    isLogin = !isLogin;
                                  });
                                },
                                child: Text(
                                  isLogin ? 'Sign Up' : 'Sign In',
                                  style: const TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTextField({required String hint, required IconData icon, bool isPassword = false}) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white.withOpacity(0.2)),
      ),
      child: TextField(
        obscureText: isPassword,
        style: const TextStyle(color: Colors.white),
        decoration: InputDecoration(
          hintText: hint,
          hintStyle: TextStyle(color: Colors.white.withOpacity(0.6)),
          prefixIcon: Icon(icon, color: Colors.white.withOpacity(0.8)),
          border: InputBorder.none,
          contentPadding: const EdgeInsets.symmetric(vertical: 18),
        ),
      ),
    );
  }
}
