import jwt from 'jsonwebtoken';
const API_BASE = 'http://localhost:3005/api';
const MOCK_OWNER_ID = '123e4567-e89b-12d3-a456-426614174000';
const JWT_SECRET = 'super_secret_jwt_key_for_testing';
// Tạo token giả với role AGENT để pass qua middleware
const token = jwt.sign({ id: MOCK_OWNER_ID, role: 'AGENT' }, JWT_SECRET, { expiresIn: '1h' });
const HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function testAll() {
    console.log('🚀 Bắt đầu test API Catalog Service (Có JWT)...');
    console.log('🔑 Mock Token generated: ', token.substring(0, 40) + '...');
    // 1. Create Hotel
    console.log('\n--- 1. Tạo Khách sạn (POST /api/hotels) ---');
    const hotelPayload = {
        // Không truyền ownerId nữa vì API sẽ lấy từ token
        name: 'Khách sạn JW Marriott Test',
        slug: 'jw-marriott-test-' + Date.now(),
        description: 'Khách sạn 5 sao sang trọng',
        address: 'Số 1 Đỗ Đức Dục',
        city: 'Hà Nội',
        phone: '0987654321',
        rating: 5,
        propertyType: 'HOTEL'
    };
    const hotelRes = await fetch(`${API_BASE}/hotels`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(hotelPayload)
    });
    const hotelData = await hotelRes.json();
    console.log('Response:', JSON.stringify(hotelData, null, 2));
    if (!hotelData.success) {
        console.error('❌ Tạo khách sạn thất bại. Dừng test.');
        return;
    }
    const hotelId = hotelData.data.id;
    await delay(500);
    // 2. Get All Hotels (Public Route - Không cần token)
    console.log('\n--- 2. Lấy danh sách Khách sạn (GET /api/hotels) ---');
    const getAllRes = await fetch(`${API_BASE}/hotels`); // No headers needed
    const getAllData = await getAllRes.json();
    console.log('Response:', JSON.stringify(getAllData, null, 2));
    await delay(500);
    // 3. Create Room Type
    console.log(`\n--- 3. Tạo Loại Phòng cho Khách sạn ${hotelId} (POST /api/hotels/:id/room-types) ---`);
    const roomTypePayload = {
        name: 'Phòng Tổng thống',
        description: 'Phòng VIP nhất',
        price: 15000000,
        maxGuests: 4,
        maxAdults: 4,
        maxChildren: 0,
        bedType: 'KING',
        bedCount: 2,
        area: 120
    };
    const roomTypeRes = await fetch(`${API_BASE}/hotels/${hotelId}/room-types`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(roomTypePayload)
    });
    const roomTypeData = await roomTypeRes.json();
    console.log('Response:', JSON.stringify(roomTypeData, null, 2));
    if (!roomTypeData.success) {
        console.error('❌ Tạo loại phòng thất bại. Dừng test.');
        return;
    }
    const roomTypeId = roomTypeData.data.id;
    await delay(500);
    // 4. Create Room
    console.log(`\n--- 4. Thêm Phòng vật lý (POST /api/hotels/:hotelId/room-types/:roomTypeId/rooms) ---`);
    const roomPayload = {
        roomNumber: '999',
        floor: 9,
        status: 'AVAILABLE',
        note: 'View toàn thành phố'
    };
    const roomRes = await fetch(`${API_BASE}/hotels/${hotelId}/room-types/${roomTypeId}/rooms`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(roomPayload)
    });
    const roomData = await roomRes.json();
    console.log('Response:', JSON.stringify(roomData, null, 2));
    await delay(500);
    console.log('\n✅ Hoàn thành toàn bộ quy trình test API với JWT Token!');
}
testAll().catch(console.error);
