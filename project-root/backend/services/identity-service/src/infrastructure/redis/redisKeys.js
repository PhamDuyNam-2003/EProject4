export const REDIS_KEYS = {
    /**
     * OTP
     */
    OTP: (email) => `otp:${email}`,
    /**
     * Login
     */
    LOGIN_ATTEMPT: (email) => `login_attempt:${email}`,
    /**
     * User Session
     */
    USER_SESSION: (userId) => `session:${userId}`,
    /**
     * Refresh Token Blacklist
     */
    BLACKLIST_TOKEN: (tokenId) => `blacklist:${tokenId}`,
    /**
     * Hotel Cache
     */
    HOTEL: (hotelId) => `hotel:${hotelId}`,
    HOTEL_LIST: "hotel:list",
    /**
     * Room Cache
     */
    ROOM: (roomId) => `room:${roomId}`,
    /**
     * Booking
     */
    BOOKING: (bookingId) => `booking:${bookingId}`,
    /**
     * Wishlist
     */
    WISHLIST: (userId) => `wishlist:${userId}`,
    /**
     * Rate Limit
     */
    RATE_LIMIT: (ip) => `rate_limit:${ip}`,
};
