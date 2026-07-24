-- =========================================================================================
-- FILE: seed_database.sql
-- MÔ TẢ: File chứa dữ liệu mẫu (Mock Data) dùng để Seed vào các Database của Microservices.
-- CÁCH DÙNG: Import file này vào các PostgreSQL Database tương ứng thông qua pgAdmin.
-- =========================================================================================

-- -----------------------------------------------------------------------------------------
-- 1. DATABASE: identity_db (Dùng cho auth-service & identity-service)
-- -----------------------------------------------------------------------------------------
-- Chạy đoạn script này trên Database: identity_db

-- Bảng Users
CREATE TABLE IF NOT EXISTS "User" (
    "id" VARCHAR(255) PRIMARY KEY,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "fullName" VARCHAR(255),
    "role" VARCHAR(50) DEFAULT 'USER',
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "User" ("id", "email", "password", "fullName", "role")
VALUES 
('u1', 'admin@example.com', '$2a$10$D8b4/UfN/YQ8g.x7M.oY3.wW.sQ/xH.N4kLwR/zE6N/8hO/v.Y0QG', 'Super Admin', 'ADMIN'), -- Mật khẩu: 123456
('u2', 'guest@example.com', '$2a$10$D8b4/UfN/YQ8g.x7M.oY3.wW.sQ/xH.N4kLwR/zE6N/8hO/v.Y0QG', 'Khách hàng test', 'USER')
ON CONFLICT ("id") DO NOTHING;

-- -----------------------------------------------------------------------------------------
-- 2. DATABASE: inventory_db (Dùng cho catalog-service & inventory-service)
-- -----------------------------------------------------------------------------------------
-- Chạy đoạn script này trên Database: inventory_db

-- Bảng Hotels
CREATE TABLE IF NOT EXISTS "Hotel" (
    "id" VARCHAR(255) PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "rating" DOUBLE PRECISION,
    "image" VARCHAR(500),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "Hotel" ("id", "name", "location", "price", "rating", "image")
VALUES 
('h1', 'Luxury Palace Hotel', 'Hà Nội', 150.0, 4.8, 'https://images.unsplash.com/photo-1566073771259-6a8506099945'),
('h2', 'Ocean View Resort', 'Đà Nẵng', 200.0, 4.9, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4')
ON CONFLICT ("id") DO NOTHING;

-- Bảng RoomTypes
CREATE TABLE IF NOT EXISTS "RoomType" (
    "id" VARCHAR(255) PRIMARY KEY,
    "hotelId" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "totalInventory" INTEGER NOT NULL,
    "maxAdults" INTEGER NOT NULL,
    "maxChildren" INTEGER NOT NULL,
    CONSTRAINT fk_hotel FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE CASCADE
);

INSERT INTO "RoomType" ("id", "hotelId", "name", "basePrice", "totalInventory", "maxAdults", "maxChildren")
VALUES 
('rt1', 'h1', 'Phòng Đơn Tiêu Chuẩn', 50.0, 10, 2, 1),
('rt2', 'h1', 'Phòng Đôi Hướng Biển', 85.0, 5, 2, 2),
('rt3', 'h2', 'Villa Gia Đình', 300.0, 2, 6, 4)
ON CONFLICT ("id") DO NOTHING;

-- -----------------------------------------------------------------------------------------
-- 3. DATABASE: order_db (Dùng cho booking-service & payment-service)
-- -----------------------------------------------------------------------------------------
-- Chạy đoạn script này trên Database: order_db

-- Bảng Bookings
CREATE TABLE IF NOT EXISTS "Booking" (
    "id" VARCHAR(255) PRIMARY KEY,
    "bookingCode" VARCHAR(50) UNIQUE NOT NULL,
    "userId" VARCHAR(255) NOT NULL,
    "hotelId" VARCHAR(255) NOT NULL,
    "checkInDate" TIMESTAMP NOT NULL,
    "checkOutDate" TIMESTAMP NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "status" VARCHAR(50) DEFAULT 'PENDING',
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "Booking" ("id", "bookingCode", "userId", "hotelId", "checkInDate", "checkOutDate", "totalAmount", "status")
VALUES 
('b1', 'BKG12345678', 'u2', 'h1', '2026-08-01 14:00:00', '2026-08-03 12:00:00', 330.0, 'CONFIRMED')
ON CONFLICT ("id") DO NOTHING;
