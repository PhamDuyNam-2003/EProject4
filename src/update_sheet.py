import os
from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SERVICE_ACCOUNT_FILE = 'credentials.json'
SPREADSHEET_ID = '1wgF0TeTV6nghyjurKFVHiso86CbBrDb8_eqzp4vNaHk'

def format_sheet(service, sheet_id):
    requests = [
        {
            "repeatCell": {
                "range": {
                    "sheetId": sheet_id
                },
                "cell": {
                    "userEnteredFormat": {
                        "wrapStrategy": "WRAP"
                    }
                },
                "fields": "userEnteredFormat.wrapStrategy"
            }
        },
        {
            "autoResizeDimensions": {
                "dimensions": {
                    "sheetId": sheet_id,
                    "dimension": "ROWS"
                }
            }
        }
    ]
    service.spreadsheets().batchUpdate(
        spreadsheetId=SPREADSHEET_ID,
        body={'requests': requests}
    ).execute()

def main():
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = build('sheets', 'v4', credentials=creds)

    # 1. Prepare Backend data
    backend_headers = [
      "Nhiệm vụ/Service (BE & Infra)", "Người đảm nhận", "Trạng thái",
      "Đợt triển khai (Phase)", "Timeline", "Tiêu chuẩn hoàn thành (DoD)",
      "Các Models chính / Công việc cần làm", "Mô tả nhiệm vụ"
    ]
    backend_rows = [
      backend_headers,
      ["infrastructure", "", "Chưa nhận", "Đợt 1 (Móng)", "", "Chạy được Docker Compose (Postgres/Mongo/RabbitMQ/Redis/ElasticSearch) và check connection", "Setup Docker Compose", "Chuẩn bị toàn bộ môi trường database và message queue cho cả team dùng chung"],
      ["api-gateway", "", "Chưa nhận", "Đợt 1 (Móng)", "", "Định tuyến chạy thông suốt đến các service / Validate JWT Token thành công", "Cấu hình Gateway định tuyến", "Định tuyến API và validate JWT tập trung để bảo mật hệ thống"],
      ["Identity Service", "", "Chưa nhận", "Đợt 1 (Móng)", "", "Hoàn thành API Đăng ký / Đăng nhập / Lấy Profile + Unit Test > 80%", "User, Role, Permission, UserRole, RolePermission, RefreshToken, UserSession, UserAddress, LoyaltyPoint", "Quản lý đăng ký/đăng nhập/phân quyền/hồ sơ khách hàng/điểm tích lũy"],
      ["Catalog & Discovery Service", "", "Chưa nhận", "Đợt 2 (Lõi)", "", "CRUD Khách sạn, Lock phòng an toàn, Đồng bộ ES tìm kiếm < 100ms, Đánh giá và trả lời đánh giá", "Hotel, Room, RoomAvailability, RoomLock, SearchIndex, Review...", "Quản lý thông tin tĩnh của KS, phòng trống thay đổi giá, tối ưu tìm kiếm siêu tốc bằng ES, và phản hồi/đánh giá của khách"],
      ["Order & Finance Service", "", "Chưa nhận", "Đợt 2 (Lõi)", "", "Tạo hủy đơn chuẩn, thanh toán và chuyển trạng thái thành công, áp dụng đúng mã giảm giá", "Booking, Guest, Payment, Invoice, Promotion, Coupon...", "Xử lý vòng đời đơn phòng, tích hợp thanh toán (VNPay/Stripe) và áp dụng voucher"],
      ["Operation & Analytics Service", "", "Chưa nhận", "Đợt 3 (Phụ)", "", "Gửi notification chuẩn, chat socket không rớt, dashboard thống kê doanh thu đúng", "Notification, DeviceToken, Conversation, Message, RevenueReport...", "Gửi Email/SMS/Push, chat realtime websocket, báo cáo thống kê doanh thu"]
    ]

    # Clear Backend sheet and update
    service.spreadsheets().values().clear(spreadsheetId=SPREADSHEET_ID, range='Backend').execute()
    service.spreadsheets().values().update(
        spreadsheetId=SPREADSHEET_ID,
        range='Backend!A1',
        valueInputOption='RAW',
        body={'values': backend_rows}
    ).execute()

    # 2. Update Frontend data (just clear assignee column)
    fe_result = service.spreadsheets().values().get(spreadsheetId=SPREADSHEET_ID, range='Frontend').execute()
    fe_rows = fe_result.get('values', [])
    for i in range(1, len(fe_rows)):
        if len(fe_rows[i]) > 1:
            fe_rows[i][1] = "" # Clear "Người đảm nhận"

    service.spreadsheets().values().update(
        spreadsheetId=SPREADSHEET_ID,
        range='Frontend!A1',
        valueInputOption='RAW',
        body={'values': fe_rows}
    ).execute()

    # 3. Format sheets
    sheet_metadata = service.spreadsheets().get(spreadsheetId=SPREADSHEET_ID).execute()
    for sheet in sheet_metadata.get('sheets', ''):
        sheet_id = sheet.get("properties", {}).get("sheetId", 0)
        format_sheet(service, sheet_id)

if __name__ == '__main__':
    main()
