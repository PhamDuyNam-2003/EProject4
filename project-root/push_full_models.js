const fs = require('fs');
const { google } = require('googleapis');
const path = require('path');

const SHEET_ID = '1QhP9N9K5uE2tX15wP4g69-MItxY9gU0p1JgD_w_o-F8';
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');

const modelsData = [
  ['SERVICE', 'TABLE NAME', 'COLUMN NAME', 'DATA TYPE', 'CONSTRAINTS/NOTES'],
  
  ['Identity & Auth', 'users', 'id', 'UUID', 'PK'],
  ['Identity & Auth', 'users', 'email', 'String', 'Unique'],
  ['Identity & Auth', 'users', 'password_hash', 'String', 'Nullable'],
  ['Identity & Auth', 'users', 'role', 'Enum', 'USER/AGENT/ADMIN'],
  ['Identity & Auth', 'users', 'status', 'Enum', 'PENDING/ACTIVE/INACTIVE/REJECTED/BANNED'],
  ['Identity & Auth', 'users', 'login_attempts', 'Int', 'Default: 0'],
  ['Identity & Auth', 'users', 'lock_until', 'DateTime', 'Nullable'],
  ['Identity & Auth', 'users', 'created_at', 'DateTime', 'Default: now()'],
  ['Identity & Auth', 'users', 'updated_at', 'DateTime', ''],
  ['Identity & Auth', 'users', 'deleted_at', 'DateTime', 'Nullable'],

  ['Identity & Auth', 'user_profiles', 'user_id', 'UUID', 'PK, FK -> users(id)'],
  ['Identity & Auth', 'user_profiles', 'full_name', 'String', 'VarChar(100)'],
  ['Identity & Auth', 'user_profiles', 'phone_number', 'String', 'Unique, Nullable'],
  ['Identity & Auth', 'user_profiles', 'avatar_url', 'Text', 'Nullable'],
  ['Identity & Auth', 'user_profiles', 'address', 'Text', 'Nullable'],

  ['Identity & Auth', 'agent_profiles', 'user_id', 'UUID', 'PK, FK -> users(id)'],
  ['Identity & Auth', 'agent_profiles', 'business_name', 'String', 'VarChar(150)'],
  ['Identity & Auth', 'agent_profiles', 'business_license', 'Text', 'Nullable'],
  ['Identity & Auth', 'agent_profiles', 'tax_code', 'String', 'VarChar(50), Nullable'],
  ['Identity & Auth', 'agent_profiles', 'id_number', 'String', 'Nullable'],
  ['Identity & Auth', 'agent_profiles', 'id_card_image_url', 'String', 'Nullable'],
  ['Identity & Auth', 'agent_profiles', 'approval_status', 'Enum', 'Default: PENDING'],

  ['Identity & Auth', 'refresh_tokens', 'id', 'UUID', 'PK'],
  ['Identity & Auth', 'refresh_tokens', 'user_id', 'UUID', 'FK -> users(id)'],
  ['Identity & Auth', 'refresh_tokens', 'token_hash', 'String', 'VarChar(255)'],
  ['Identity & Auth', 'refresh_tokens', 'device_name', 'String', 'Nullable'],
  ['Identity & Auth', 'refresh_tokens', 'ip_address', 'String', 'Nullable'],
  ['Identity & Auth', 'refresh_tokens', 'user_agent', 'Text', 'Nullable'],
  ['Identity & Auth', 'refresh_tokens', 'expires_at', 'DateTime', ''],
  
  ['Catalog Service', 'hotels', 'id', 'UUID', 'PK'],
  ['Catalog Service', 'hotels', 'owner_id', 'UUID', 'FK -> agent_profiles(user_id)'],
  ['Catalog Service', 'hotels', 'name', 'String', 'VarChar(255)'],
  ['Catalog Service', 'hotels', 'slug', 'String', 'Unique, VarChar(255)'],
  ['Catalog Service', 'hotels', 'description', 'Text', 'Nullable'],
  ['Catalog Service', 'hotels', 'address', 'Text', ''],
  ['Catalog Service', 'hotels', 'city', 'String', 'VarChar(100)'],
  ['Catalog Service', 'hotels', 'country', 'String', 'Default: Vietnam'],
  ['Catalog Service', 'hotels', 'latitude', 'Decimal(10,8)', 'Nullable'],
  ['Catalog Service', 'hotels', 'longitude', 'Decimal(11,8)', 'Nullable'],
  ['Catalog Service', 'hotels', 'phone', 'String', 'Nullable'],
  ['Catalog Service', 'hotels', 'email', 'String', 'Nullable'],
  ['Catalog Service', 'hotels', 'rating', 'Float', 'Default: 0'],

  ['Catalog Service', 'room_types', 'id', 'UUID', 'PK'],
  ['Catalog Service', 'room_types', 'hotel_id', 'UUID', 'FK -> hotels(id)'],
  ['Catalog Service', 'room_types', 'name', 'String', 'VarChar(150)'],
  ['Catalog Service', 'room_types', 'price', 'Decimal(12,2)', ''],
  ['Catalog Service', 'room_types', 'maxGuests', 'Int', ''],
  ['Catalog Service', 'room_types', 'bedType', 'Enum', 'SINGLE/DOUBLE/KING/etc'],
  
  ['Catalog Service', 'rooms', 'id', 'UUID', 'PK'],
  ['Catalog Service', 'rooms', 'hotel_id', 'UUID', 'FK -> hotels(id)'],
  ['Catalog Service', 'rooms', 'room_type_id', 'UUID', 'FK -> room_types(id)'],
  ['Catalog Service', 'rooms', 'roomNumber', 'String', 'VarChar(30)'],
  ['Catalog Service', 'rooms', 'status', 'Enum', 'AVAILABLE/BOOKED/etc'],

  ['Booking Service', 'bookings', 'id', 'UUID', 'PK'],
  ['Booking Service', 'bookings', 'user_id', 'UUID', 'FK -> users(id)'],
  ['Booking Service', 'bookings', 'hotel_id', 'UUID', 'FK -> hotels(id)'],
  ['Booking Service', 'bookings', 'check_in_date', 'DateTime', ''],
  ['Booking Service', 'bookings', 'check_out_date', 'DateTime', ''],
  ['Booking Service', 'bookings', 'total_price', 'Decimal(12,2)', ''],
  ['Booking Service', 'bookings', 'status', 'Enum', 'PENDING/CONFIRMED/CANCELLED'],
  
  ['Booking Service', 'booking_details', 'id', 'UUID', 'PK'],
  ['Booking Service', 'booking_details', 'booking_id', 'UUID', 'FK -> bookings(id)'],
  ['Booking Service', 'booking_details', 'room_type_id', 'UUID', 'FK -> room_types(id)'],
  ['Booking Service', 'booking_details', 'quantity', 'Int', ''],
  ['Booking Service', 'booking_details', 'unit_price', 'Decimal(12,2)', ''],

  ['Payment Service', 'transactions', 'id', 'UUID', 'PK'],
  ['Payment Service', 'transactions', 'booking_id', 'UUID', 'FK -> bookings(id)'],
  ['Payment Service', 'transactions', 'gateway', 'String', 'VarChar(50)'],
  ['Payment Service', 'transactions', 'amount', 'Decimal(12,2)', ''],
  
  ['Operation Service', 'room_inventories', 'id', 'UUID', 'PK'],
  ['Operation Service', 'room_inventories', 'hotel_id', 'UUID', 'FK -> hotels(id)'],
  ['Operation Service', 'room_inventories', 'room_type_id', 'UUID', 'FK -> room_types(id)'],
  ['Operation Service', 'room_inventories', 'date', 'Date', ''],
  ['Operation Service', 'room_inventories', 'total_rooms', 'Int', ''],
  ['Operation Service', 'room_inventories', 'booked_rooms', 'Int', ''],
  
  ['Review Service', 'reviews', 'id', 'UUID', 'PK'],
  ['Review Service', 'reviews', 'booking_id', 'UUID', 'FK -> bookings(id)'],
  ['Review Service', 'reviews', 'user_id', 'UUID', 'FK -> users(id)'],
  ['Review Service', 'reviews', 'rating', 'Int', ''],
  ['Review Service', 'reviews', 'comment', 'Text', 'Nullable'],
];

async function updateSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const TAB_NAME = 'Database Models Team';

  try {
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
    const sheetExists = spreadsheet.data.sheets.some(s => s.properties.title === TAB_NAME);
    
    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SHEET_ID,
        requestBody: {
          requests: [{
            addSheet: { properties: { title: TAB_NAME } }
          }]
        }
      });
    }

    await sheets.spreadsheets.values.clear({
      spreadsheetId: SHEET_ID,
      range: `${TAB_NAME}!A:E`,
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `${TAB_NAME}!A1`,
      valueInputOption: 'RAW',
      resource: { values: modelsData },
    });

    console.log(`Đã đẩy toàn bộ schema chuẩn của Team lên Tab "${TAB_NAME}"!`);
  } catch (error) {
    console.error('Lỗi khi đẩy dữ liệu lên Google Sheets:', error);
  }
}

updateSheet();
