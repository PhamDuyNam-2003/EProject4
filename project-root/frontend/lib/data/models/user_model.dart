enum Role { USER, AGENT, ADMIN }

enum UserStatus { PENDING, ACTIVE, INACTIVE, REJECTED, BANNED }

class UserModel {
  final String id;
  final String email;
  final Role role;
  final UserStatus status;
  final int loginAttempts;
  final DateTime createdAt;
  final UserProfile? profile;
  final AgentProfile? agentProfile;

  UserModel({
    required this.id,
    required this.email,
    required this.role,
    required this.status,
    required this.loginAttempts,
    required this.createdAt,
    this.profile,
    this.agentProfile,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['id'],
      email: json['email'],
      role: Role.values.firstWhere((e) => e.toString() == 'Role.${json['role']}', orElse: () => Role.USER),
      status: UserStatus.values.firstWhere((e) => e.toString() == 'UserStatus.${json['status']}', orElse: () => UserStatus.PENDING),
      loginAttempts: json['loginAttempts'] ?? 0,
      createdAt: DateTime.parse(json['createdAt']),
      profile: json['profile'] != null ? UserProfile.fromJson(json['profile']) : null,
      agentProfile: json['agentProfile'] != null ? AgentProfile.fromJson(json['agentProfile']) : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'email': email,
      'role': role.toString().split('.').last,
      'status': status.toString().split('.').last,
      'loginAttempts': loginAttempts,
      'createdAt': createdAt.toIso8601String(),
      'profile': profile?.toJson(),
      'agentProfile': agentProfile?.toJson(),
    };
  }
}

class UserProfile {
  final String userId;
  final String fullName;
  final String? phoneNumber;
  final String? avatarUrl;
  final String? address;

  UserProfile({
    required this.userId,
    required this.fullName,
    this.phoneNumber,
    this.avatarUrl,
    this.address,
  });

  factory UserProfile.fromJson(Map<String, dynamic> json) {
    return UserProfile(
      userId: json['userId'] ?? json['user_id'] ?? '',
      fullName: json['fullName'] ?? json['full_name'] ?? 'User',
      phoneNumber: json['phoneNumber'] ?? json['phone_number'],
      avatarUrl: json['avatarUrl'] ?? json['avatar_url'],
      address: json['address'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'userId': userId,
      'fullName': fullName,
      'phoneNumber': phoneNumber,
      'avatarUrl': avatarUrl,
      'address': address,
    };
  }
}

class AgentProfile {
  final String userId;
  final String businessName;
  final String? businessLicense;
  final String? taxCode;
  final String? idNumber;
  final String? idCardImageUrl;
  final UserStatus approvalStatus;

  AgentProfile({
    required this.userId,
    required this.businessName,
    this.businessLicense,
    this.taxCode,
    this.idNumber,
    this.idCardImageUrl,
    required this.approvalStatus,
  });

  factory AgentProfile.fromJson(Map<String, dynamic> json) {
    return AgentProfile(
      userId: json['userId'] ?? json['user_id'],
      businessName: json['businessName'] ?? json['business_name'],
      businessLicense: json['businessLicense'] ?? json['business_license'],
      taxCode: json['taxCode'] ?? json['tax_code'],
      idNumber: json['idNumber'] ?? json['id_number'],
      idCardImageUrl: json['idCardImageUrl'] ?? json['id_card_image_url'],
      approvalStatus: UserStatus.values.firstWhere(
        (e) => e.toString() == 'UserStatus.${json['approvalStatus'] ?? json['approval_status']}',
        orElse: () => UserStatus.PENDING,
      ),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'userId': userId,
      'businessName': businessName,
      'businessLicense': businessLicense,
      'taxCode': taxCode,
      'idNumber': idNumber,
      'idCardImageUrl': idCardImageUrl,
      'approvalStatus': approvalStatus.toString().split('.').last,
    };
  }
}
