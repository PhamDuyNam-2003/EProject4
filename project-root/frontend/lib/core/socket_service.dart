import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'auth_service.dart';
import '../config/constants.dart';

class SocketService {
  static final SocketService instance = SocketService._internal();

  IO.Socket? _socket;
  
  SocketService._internal();

  IO.Socket? get socket => _socket;

  void connect() {
    if (_socket != null && _socket!.connected) return;

    final user = AuthService.instance.currentUser;
    if (user == null) return;

    // Connect to operation-service port (assuming 3006)
    // Replace with correct URL from config/constants if operationServiceUrl is defined
    const socketUrl = 'http://10.0.2.2:3006'; // default local emulator

    _socket = IO.io(socketUrl, <String, dynamic>{
      'transports': ['websocket'],
      'autoConnect': false,
      'query': {'userId': user.id},
    });

    _socket!.connect();

    _socket!.onConnect((_) {
      print('Connected to Socket.IO server');
    });

    _socket!.onDisconnect((_) {
      print('Disconnected from Socket.IO server');
    });
  }

  void joinConversation(String conversationId) {
    if (_socket != null && _socket!.connected) {
      _socket!.emit('join_conversation', conversationId);
    }
  }

  void leaveConversation(String conversationId) {
    if (_socket != null && _socket!.connected) {
      _socket!.emit('leave_conversation', conversationId);
    }
  }

  void sendMessage(String conversationId, String text) {
    if (_socket != null && _socket!.connected) {
      _socket!.emit('send_message', {
        'conversationId': conversationId,
        'text': text,
        'type': 'text',
      });
    }
  }

  void disconnect() {
    _socket?.disconnect();
    _socket = null;
  }
}
