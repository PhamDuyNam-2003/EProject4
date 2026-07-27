class ReviewModel {
  final String id;
  final String hotelId;
  final String userId;
  final String bookingId;
  final double rating;
  final String comment;
  final List<String> images;
  final DateTime createdAt;
  final List<ReviewReplyModel> replies;

  ReviewModel({
    required this.id,
    required this.hotelId,
    required this.userId,
    required this.bookingId,
    required this.rating,
    required this.comment,
    this.images = const [],
    required this.createdAt,
    this.replies = const [],
  });

  factory ReviewModel.fromJson(Map<String, dynamic> json) {
    return ReviewModel(
      id: json['id'] ?? '',
      hotelId: json['hotelId'] ?? '',
      userId: json['userId'] ?? '',
      bookingId: json['bookingId'] ?? '',
      rating: (json['rating'] ?? 5.0).toDouble(),
      comment: json['comment'] ?? '',
      images: List<String>.from(json['images'] ?? []),
      createdAt: DateTime.parse(json['createdAt'] ?? DateTime.now().toIso8601String()),
      replies: (json['replies'] as List<dynamic>?)
              ?.map((e) => ReviewReplyModel.fromJson(e))
              .toList() ??
          [],
    );
  }
}

class ReviewReplyModel {
  final String id;
  final String reviewId;
  final String userId;
  final String comment;
  final DateTime createdAt;

  ReviewReplyModel({
    required this.id,
    required this.reviewId,
    required this.userId,
    required this.comment,
    required this.createdAt,
  });

  factory ReviewReplyModel.fromJson(Map<String, dynamic> json) {
    return ReviewReplyModel(
      id: json['id'] ?? '',
      reviewId: json['reviewId'] ?? '',
      userId: json['userId'] ?? '',
      comment: json['comment'] ?? '',
      createdAt: DateTime.parse(json['createdAt'] ?? DateTime.now().toIso8601String()),
    );
  }
}
