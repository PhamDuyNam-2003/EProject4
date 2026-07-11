import os
from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SERVICE_ACCOUNT_FILE = 'credentials.json'
SPREADSHEET_ID = '1wgF0TeTV6nghyjurKFVHiso86CbBrDb8_eqzp4vNaHk'

def main():
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = build('sheets', 'v4', credentials=creds)

    # 1. Row 6 data: Operation & Communication Service
    row6 = [
        "Operation & Communication Service", # A
        "", # B (Người đảm nhận)
        "Chưa nhận", # C (Trạng thái)
        "Đợt 3 (Phụ)", # D (Phase)
        "", # E (Timeline)
        # F: DoD
        "1. Gửi Email xác nhận đặt phòng thành công ngay lập tức bằng template chuẩn.\n2. Tích hợp gửi SMS/OTP ổn định với tỷ lệ gửi thành công cao.\n3. Kết nối WebSocket/SignalR chat realtime không bị rớt mạng.\n4. Hiển thị thông báo (Push Notification) realtime khi cập nhật trạng thái đơn hàng.\n5. Cơ chế Retry hoạt động hiệu quả khi mạng chập chờn.\n6. Chat hỗ trợ tải lên file đính kèm nhanh chóng.\n7. Không làm chậm hệ thống chính, mọi tác vụ đều chạy ngầm (Background Task).\n8. Hiển thị rõ tin nhắn đã xem/chưa xem (Read Receipt).\n9. Socket connection tự động reconnect khi đường truyền internet thay đổi.\n10. Xử lý và đánh dấu chính xác hàng nghìn thông báo chưa đọc của user.",
        # G: Models
        "1. NotificationTemplate\n2. DeviceToken\n3. AppNotification\n4. Conversation\n5. Message\n6. MessageAttachment\n7. ChatParticipant\n8. ConnectionState\n9. EmailLog\n10. SMSLog",
        # H: Mô tả
        "1. Lắng nghe các event (RabbitMQ) như Tạo đơn, Hủy đơn để kích hoạt thông báo.\n2. Dịch vụ gửi Email tự động bằng SendGrid/Mailgun qua các template HTML.\n3. Bắn Push Notification xuống thiết bị di động (Android/iOS) thông qua Firebase FCM.\n4. Xử lý kết nối WebSocket/SignalR duy trì luồng chat 2 chiều giữa Khách và Lễ tân.\n5. Lưu trữ lịch sử chat vào DB (MongoDB) để không bị mất tin nhắn khi tải lại.\n6. Xử lý gửi hình ảnh và file đính kèm trong tin nhắn chat.\n7. Theo dõi trạng thái online/offline của người dùng qua socket connection.\n8. Gửi mã OTP xác thực qua SMS/Email và quản lý bộ đếm retry.\n9. Phân quyền và định tuyến tin nhắn đến đúng bộ phận hỗ trợ (Lễ tân/CSKH).\n10. Có cơ chế tự động gửi lại (Retry) thông báo nếu nhà cung cấp dịch vụ bị lỗi mạng."
    ]

    # 2. Row 7 data: Data & Analytics Service
    row7 = [
        "Data & Analytics Service (C# / .NET)", # A
        "", # B
        "Chưa nhận", # C
        "Đợt 3 (Phụ)", # D
        "", # E
        # F: DoD
        "1. Service C# hứng và xử lý 10,000+ message từ RabbitMQ mà không bị crash.\n2. Dashboard báo cáo doanh thu trả kết quả truy vấn dữ liệu lớn dưới 500ms.\n3. Batch job chạy đúng giờ mỗi đêm và không bị lặp lại hoặc lỗi data.\n4. Trích xuất chính xác file Excel/CSV báo cáo kế toán (không lệch 1 đồng).\n5. Báo cáo top khách sạn được đặt nhiều nhất luôn cập nhật realtime/near-realtime.\n6. Các biểu đồ (Line, Bar chart) có đủ API cung cấp dữ liệu theo trục X/Y chuẩn xác.\n7. Quản lý lỗi (Error handling) tốt khi import dữ liệu lỗi từ service khác.\n8. Tách biệt hoàn toàn DB phân tích (OLAP) với DB giao dịch (OLTP).\n9. Đo lường chính xác tỷ lệ chuyển đổi (Từ lúc search đến lúc book thành công).\n10. API được bảo mật, chỉ có Role Admin mới được quyền truy xuất số liệu nhạy cảm.",
        # G: Models
        "1. RevenueReport\n2. HotelOccupancyReport\n3. UserActivityLog\n4. SearchKeywordTrend\n5. BookingCancellationStats\n6. PromotionUsageStats\n7. DataWarehouseSyncTask\n8. ExportedDocument\n9. AnalyticsDashboardConfig\n10. MLPredictionModel",
        # H: Mô tả
        "1. Viết bằng C# (.NET Core), sử dụng BackgroundService để liên tục hứng event từ Kafka/RabbitMQ.\n2. Thu thập và chuẩn hóa (ETL) toàn bộ log dữ liệu từ các service khác (User Log, Booking Log).\n3. Chạy các tác vụ nền (Cronjob) hàng đêm để tổng hợp doanh thu theo ngày/tháng/năm.\n4. Tính toán tỷ lệ lấp đầy phòng (Occupancy Rate) của từng khách sạn.\n5. Phân tích các từ khóa được tìm kiếm nhiều nhất (Trends) để cung cấp insight cho Marketing.\n6. Cung cấp API siêu tốc (gRPC/Redis) để Admin Dashboard vẽ biểu đồ realtime.\n7. Xuất các báo cáo thống kê phức tạp ra định dạng Excel/CSV cho bộ phận kế toán.\n8. Xử lý tập dữ liệu lớn (Big Data) bằng Entity Framework Core Batch Insert hoặc Dapper.\n9. Thống kê hành vi hủy phòng để đánh giá chất lượng dịch vụ của khách sạn.\n10. Làm tiền đề để sau này áp dụng ML.NET dự đoán giá phòng hoặc gợi ý KS cho khách."
    ]

    # Update Row 6
    service.spreadsheets().values().update(
        spreadsheetId=SPREADSHEET_ID,
        range="Backend!A7:H7",
        valueInputOption="RAW",
        body={"values": [row6]}
    ).execute()

    # Append / Update Row 7
    service.spreadsheets().values().update(
        spreadsheetId=SPREADSHEET_ID,
        range="Backend!A8:H8",
        valueInputOption="RAW",
        body={"values": [row7]}
    ).execute()

    # Apply formatting and resizing for the new row 8
    # Fetch sheet ID for Backend
    sheet_metadata = service.spreadsheets().get(spreadsheetId=SPREADSHEET_ID).execute()
    backend_sheet_id = None
    for sheet in sheet_metadata.get('sheets', ''):
        if sheet['properties']['title'] == 'Backend':
            backend_sheet_id = sheet['properties']['sheetId']
            break

    if backend_sheet_id is not None:
        requests = [
            # Auto resize
            {
                "autoResizeDimensions": {
                    "dimensions": {
                        "sheetId": backend_sheet_id,
                        "dimension": "ROWS"
                    }
                }
            },
            # Borders for row 8
            {
                "updateBorders": {
                    "range": {
                        "sheetId": backend_sheet_id,
                        "startRowIndex": 7,
                        "endRowIndex": 8,
                        "startColumnIndex": 0,
                        "endColumnIndex": 8
                    },
                    "top": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}},
                    "bottom": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}},
                    "left": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}},
                    "right": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}},
                    "innerVertical": {"style": "SOLID", "width": 1, "color": {"red": 0.8, "green": 0.8, "blue": 0.8}}
                }
            },
            # Font Arial 12 for row 8
            {
                "repeatCell": {
                    "range": {
                        "sheetId": backend_sheet_id,
                        "startRowIndex": 7,
                        "endRowIndex": 8,
                        "startColumnIndex": 0,
                        "endColumnIndex": 8
                    },
                    "cell": {
                        "userEnteredFormat": {
                            "textFormat": {
                                "fontFamily": "Arial",
                                "fontSize": 12
                            },
                            "verticalAlignment": "MIDDLE",
                            "wrapStrategy": "WRAP",
                            "backgroundColor": {"red": 1.0, "green": 1.0, "blue": 1.0} # White for row 8 (even row)
                        }
                    },
                    "fields": "userEnteredFormat(textFormat(fontFamily,fontSize),verticalAlignment,wrapStrategy,backgroundColor)"
                }
            }
        ]
        service.spreadsheets().batchUpdate(
            spreadsheetId=SPREADSHEET_ID,
            body={'requests': requests}
        ).execute()

    print("Successfully separated Analytics into a C# service!")

if __name__ == '__main__':
    main()
