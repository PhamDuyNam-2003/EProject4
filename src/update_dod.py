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

    # Fetch sheets metadata
    sheet_metadata = service.spreadsheets().get(spreadsheetId=SPREADSHEET_ID).execute()
    sheets = sheet_metadata.get('sheets', '')

    # --- BACKEND DOD DATA ---
    backend_dod = [
        # infrastructure
        "1. Đảm bảo cấu hình Docker Compose chạy ổn định cho toàn bộ các dịch vụ (PostgreSQL, MongoDB, RabbitMQ, Redis, ElasticSearch).\n"
        "2. Tách biệt rõ ràng các network (backend-network, db-network) trong Docker để đảm bảo bảo mật.\n"
        "3. Cấu hình volumes đầy đủ để không bị mất dữ liệu (data persistence) khi container khởi động lại.\n"
        "4. Setup các script khởi tạo database (init.sql, init-mongo.js) tự động chạy khi build.\n"
        "5. Cấu hình giới hạn tài nguyên (CPU, RAM) cho từng container để tránh crash hệ thống.\n"
        "6. Thiết lập tài khoản, mật khẩu mạnh cho các services và truyền qua biến môi trường (.env).\n"
        "7. Mở và map đúng các port cần thiết ra máy host để team có thể debug dễ dàng.\n"
        "8. Cài đặt các công cụ quản lý giao diện đi kèm (như pgAdmin, Mongo Express) để tiện kiểm tra dữ liệu.\n"
        "9. Có file README hướng dẫn chi tiết cách run, stop, và clean môi trường Docker.\n"
        "10. Hệ thống có khả năng tự động restart (restart: always) các container nếu xảy ra lỗi.",

        # api-gateway
        "1. Định tuyến (Routing) thành công tất cả các request từ Client đến đúng Microservices tương ứng.\n"
        "2. Tích hợp JWT Middleware để xác thực (Authentication) mọi request trước khi cho qua.\n"
        "3. Từ chối và trả về HTTP 401/403 chuẩn xác cho các request không có hoặc sai token.\n"
        "4. Cấu hình Load Balancing cơ bản để phân tải nếu có nhiều instance của một service.\n"
        "5. Setup cơ chế Rate Limiting để chống spam request và tấn công DDoS cơ bản.\n"
        "6. Cấu hình CORS (Cross-Origin Resource Sharing) hợp lệ để Frontend có thể gọi API mà không bị block.\n"
        "7. Triển khai cơ chế Retry/Circuit Breaker nếu một service bị chết, tránh làm treo toàn bộ gateway.\n"
        "8. Ghi log (Logging) tập trung toàn bộ các request (URL, Method, Thời gian phản hồi, Status code).\n"
        "9. Loại bỏ hoặc ẩn các thông tin nhạy cảm trong Header trước khi forward đến các service.\n"
        "10. Đạt điểm Unit Test / Integration Test > 80% cho các luồng xác thực và định tuyến.",

        # Identity Service
        "1. Hoàn thành API Đăng ký tài khoản với mã hóa mật khẩu an toàn (Bcrypt/Argon2).\n"
        "2. Hoàn thành API Đăng nhập, cấp phát JWT (Access Token) và Refresh Token bảo mật.\n"
        "3. Xử lý triệt để luồng gia hạn token (Refresh Token) mà không bắt người dùng đăng nhập lại.\n"
        "4. Hoàn thành chức năng phân quyền (Role-Based Access Control), kiểm tra quyền Admin/User.\n"
        "5. Cung cấp API nội bộ (gRPC/HTTP) để các service khác lấy thông tin User/Role nhanh chóng.\n"
        "6. Hoàn thành API CRUD hồ sơ người dùng (Cập nhật thông tin cá nhân, thay đổi mật khẩu).\n"
        "7. Cấu hình chặn khóa tài khoản tự động nếu đăng nhập sai quá nhiều lần (Brute-force protection).\n"
        "8. Hoàn thành luồng cấp điểm tích lũy (Loyalty Point) và lấy hạng thành viên của khách.\n"
        "9. Không lưu trữ bất kỳ mật khẩu dạng plain text nào trong Database.\n"
        "10. Viết Unit Test coverage > 80% cho các hàm xử lý mã hóa, sinh token và phân quyền.",

        # Catalog & Discovery Service
        "1. API tìm kiếm khách sạn trả về kết quả dưới 100ms (tích hợp thành công ElasticSearch/Redis).\n"
        "2. Quản lý đồng bộ dữ liệu (CDC) từ DB chính sang ElasticSearch theo thời gian thực.\n"
        "3. Hoàn thành luồng Lock phòng an toàn (Distributed Lock) khi khách hàng bắt đầu tạo booking, tránh overbooking.\n"
        "4. CRUD Khách sạn, loại phòng, hình ảnh, tiện ích hoạt động ổn định và hỗ trợ upload ảnh lên Cloud.\n"
        "5. Xây dựng bộ lọc tìm kiếm động nhiều tiêu chí (theo giá, đánh giá, tiện ích).\n"
        "6. Tính toán và hiển thị chính xác phòng trống (Inventory) theo từng ngày cụ thể.\n"
        "7. Xử lý thay đổi giá phòng linh hoạt theo mùa vụ (Peak season) hoặc cuối tuần.\n"
        "8. Khách hàng đăng được đánh giá (Review) kèm hình ảnh, chỉ áp dụng cho người đã từng ở.\n"
        "9. Chủ khách sạn có thể phản hồi đánh giá và hệ thống tự động tính điểm trung bình (Rating).\n"
        "10. Hệ thống Cache hoạt động tốt cho các danh sách khách sạn phổ biến (Top trend).",

        # Order & Finance Service
        "1. Đảm bảo tính toàn vẹn dữ liệu (ACID/Saga Pattern) cho giao dịch: Đặt phòng thành công thì phải giữ được phòng.\n"
        "2. Tích hợp thành công cổng thanh toán VNPay/Stripe, gọi Webhook và xử lý callback chính xác.\n"
        "3. Xử lý tự động hủy đơn (Auto Cancel) và nhả phòng nếu khách không thanh toán trong thời gian quy định.\n"
        "4. Áp dụng mã giảm giá (Voucher) chính xác vào tổng tiền, chặn các mã hết hạn hoặc không đủ điều kiện.\n"
        "5. Cập nhật đúng trạng thái Booking (Pending, Confirmed, Cancelled, Completed) xuyên suốt vòng đời.\n"
        "6. Xử lý luồng hoàn tiền (Refund) khi khách hàng hủy phòng theo đúng chính sách hoàn hủy.\n"
        "7. Xuất hóa đơn (Invoice) dạng PDF tự động sau khi thanh toán thành công.\n"
        "8. Validate chặt chẽ số tiền khách hàng thanh toán để chống giả mạo request.\n"
        "9. Lưu vết toàn bộ lịch sử giao dịch (Transaction History) để đối soát kế toán.\n"
        "10. Unit Test đầy đủ cho các công thức tính tiền, thuế phí và giảm giá.",

        # Operation & Analytics Service
        "1. Gửi Email xác nhận đặt phòng thành công ngay lập tức bằng template HTML đẹp mắt.\n"
        "2. Tích hợp gửi SMS/OTP ổn định với tỷ lệ gửi thành công cao.\n"
        "3. Kết nối WebSocket/SignalR cho luồng Chat realtime giữa Khách và Khách sạn không bị rớt mạng.\n"
        "4. Hiển thị thông báo (Push Notification) realtime khi có cập nhật trạng thái đơn hàng.\n"
        "5. Có cơ chế tự động gửi lại (Retry) email/tin nhắn nếu nhà cung cấp dịch vụ bị lỗi mạng.\n"
        "6. Thu thập được Event từ các service khác qua Message Queue để phân tích dữ liệu.\n"
        "7. Xây dựng Dashboard báo cáo doanh thu theo ngày/tháng/năm chính xác cho Admin.\n"
        "8. Báo cáo tỷ lệ lấp đầy phòng (Occupancy rate) và top các khách sạn được đặt nhiều nhất.\n"
        "9. Lưu trữ tin nhắn chat vào database để khách có thể xem lại lịch sử.\n"
        "10. Xử lý bất đồng bộ (Background processing) hoàn toàn, không làm nghẽn các API của khách."
    ]

    # --- FRONTEND DOD DATA ---
    frontend_dod = [
        # Màn hình Đăng nhập / Đăng ký
        "1. Lưu trữ Access Token an toàn vào Secure Storage/Keychain, không dùng Shared Preferences thường.\n"
        "2. Validate định dạng Email/SĐT và mật khẩu ngay tại form trước khi gọi API.\n"
        "3. Hiển thị thông báo lỗi (Toast/Snackbar) rõ ràng khi sai tài khoản hoặc mật khẩu.\n"
        "4. Cấu hình tự động renew token ngầm (Interceptor) khi Access Token hết hạn.\n"
        "5. Hỗ trợ hiển thị/ẩn mật khẩu (biểu tượng con mắt) cho trải nghiệm người dùng.\n"
        "6. Xử lý OTP màn hình nhập mượt mà, tự động focus sang ô tiếp theo.\n"
        "7. Nút Đăng nhập/Đăng ký phải bị disable (loading state) để tránh spam click khi đang gọi API.\n"
        "8. Giao diện thiết kế Responsive, không bị vỡ layout khi bàn phím ảo bật lên.\n"
        "9. Đăng xuất phải xóa hoàn toàn token cục bộ và chuyển hướng về màn hình Đăng nhập.\n"
        "10. Hỗ trợ tính năng \"Quên mật khẩu\" với luồng nhập email lấy lại pass.",

        # Màn hình Trang chủ & Tìm kiếm
        "1. Tích hợp thanh tìm kiếm hoạt động phản hồi nhanh (Debounce) khi gõ từ khóa.\n"
        "2. Bộ lọc (Filter) đa dạng: Tầm giá (Slider), số sao, tiện ích (Wifi, Bể bơi), loại giường.\n"
        "3. Phân trang (Pagination) hoặc Tải thêm (Infinite Scroll) mượt mà khi danh sách khách sạn dài.\n"
        "4. Bố cục Card Khách sạn hiển thị đầy đủ: Ảnh thu nhỏ, tên, địa chỉ, rating, và giá tiền nổi bật.\n"
        "5. Có hiệu ứng Skeleton Loading hiển thị đẹp mắt trong khi chờ dữ liệu từ API.\n"
        "6. Xử lý cache hình ảnh (CachedNetworkImage) để cuộn danh sách không bị lag.\n"
        "7. Xử lý Empty State (Hiển thị hình ảnh thân thiện khi không tìm thấy kết quả phù hợp).\n"
        "8. Banner khuyến mãi ở đầu trang có thể tự động chạy (Carousel).\n"
        "9. Lưu và hiển thị được Lịch sử tìm kiếm gần đây.\n"
        "10. Hỗ trợ chọn nhanh các Thành phố phổ biến.",

        # Màn hình Chi tiết Khách sạn
        "1. Carousel thư viện ảnh full màn hình, vuốt mượt và có thể zoom ảnh.\n"
        "2. Hiển thị chi tiết và trực quan các tiện ích của khách sạn (icon + text).\n"
        "3. Section Loại phòng hiển thị rõ thông tin giường, số người tối đa, có/không bữa sáng.\n"
        "4. Bản đồ mini hiển thị đúng vị trí khách sạn (có thể click để mở Google Maps).\n"
        "5. Load và hiển thị danh sách đánh giá (Review) có phân trang.\n"
        "6. Xử lý trạng thái Hết phòng (Disable nút Đặt phòng) đối với các loại phòng không còn trống.\n"
        "7. Có nút thả tim (Favorite) lưu khách sạn vào danh sách yêu thích, animation mượt.\n"
        "8. Có nút Share để chia sẻ link khách sạn cho người khác.\n"
        "9. Floating Action Button hoặc nút Đặt ngay ghim ở đáy màn hình luôn hiển thị.\n"
        "10. Giao diện mở rộng/thu gọn (Read more) cho phần mô tả khách sạn quá dài.",

        # Màn hình Đặt phòng (Booking)
        "1. Truyền và hiển thị đúng thông tin hạng phòng, ngày check-in/check-out từ trang trước.\n"
        "2. Form nhập thông tin người đại diện (Tên, CCCD/Passport, SĐT, Email) có validate chặt chẽ.\n"
        "3. Tính toán lại tổng tiền hiển thị ngay lập tức khi nhập/chọn mã giảm giá hợp lệ.\n"
        "4. Chỗ nhập mã Voucher có thông báo rõ ràng mã đúng, mã sai hoặc hết hạn.\n"
        "5. Hiển thị chi tiết hóa đơn: Giá phòng x Số đêm, Thuế, Phí dịch vụ, Tiền trừ từ Voucher.\n"
        "6. Cho phép tùy chọn yêu cầu đặc biệt (Phòng hút thuốc, check-in muộn, v.v.).\n"
        "7. Hiển thị rõ chính sách hoàn hủy của khách sạn trước khi bấm xác nhận.\n"
        "8. Nút \"Thanh toán\" hiển thị loading và vô hiệu hóa các field để tránh lỗi double-booking.\n"
        "9. Bắt buộc người dùng tick chọn \"Đồng ý với điều khoản\" trước khi đi tiếp.\n"
        "10. Xử lý mượt luồng chuyển qua màn hình chọn Phương thức thanh toán.",

        # Màn hình Thanh toán (Payment)
        "1. Mở WebView hoặc Deep link (App-to-App) để thanh toán VNPay/Momo bảo mật và an toàn.\n"
        "2. Lắng nghe deeplink hoặc poll API để nhận biết trạng thái giao dịch ngay khi đóng WebView.\n"
        "3. Màn hình kết quả giao dịch (Success/Failed) hiển thị rõ ràng thông tin mã đơn hàng.\n"
        "4. Cung cấp nút \"Thử lại thanh toán\" nếu giao dịch thất bại.\n"
        "5. Cung cấp nút \"Xem chi tiết đơn\" chuyển thẳng về hồ sơ sau khi thành công.\n"
        "6. Đảm bảo luồng Back (quay lại) không làm gián đoạn logic hoặc sinh ra giao dịch rác.\n"
        "7. Không lưu bất kỳ thông tin thẻ tín dụng/tài khoản ngân hàng nào trên client.\n"
        "8. Đếm ngược thời gian thanh toán (Countdown timer 15 phút), hết giờ tự động quay về trang chủ.\n"
        "9. Xử lý trường hợp người dùng tắt app giữa chừng khi đang ở cổng thanh toán.\n"
        "10. Giao diện tối giản, tập trung vào số tiền cuối cùng và nút xác nhận.",

        # Màn hình Chat Realtime
        "1. Kết nối WebSocket/SignalR thành công, hiển thị trạng thái \"Đang kết nối\" / \"Đã kết nối\".\n"
        "2. Khả năng tự động kết nối lại (Auto-reconnect) khi rớt mạng 3G/4G/Wifi.\n"
        "3. Gửi và nhận tin nhắn hiển thị tức thời không cần load lại trang.\n"
        "4. Phân biệt rõ ràng tin nhắn của Khách (bên phải) và KS/Admin (bên trái).\n"
        "5. Hiển thị trạng thái tin nhắn: Đang gửi, Đã gửi, Đã xem.\n"
        "6. Hỗ trợ tính năng đính kèm và gửi hình ảnh trong khung chat.\n"
        "7. Giao diện cuộn xuống đáy (Scroll to bottom) tự động khi có tin nhắn mới.\n"
        "8. Hiển thị \"Đang gõ...\" (Typing indicator) khi đầu bên kia soạn tin.\n"
        "9. Lưu cache tin nhắn cục bộ (SQLite/Hive) để xem lại khi offline.\n"
        "10. Có timestamp (thời gian gửi) chính xác cho từng đoạn tin nhắn.",

        # Màn hình Hồ sơ & Lịch sử
        "1. Chia tab rõ ràng cho Lịch sử đặt phòng: Sắp tới, Đã hoàn thành, Đã hủy.\n"
        "2. Hiển thị thẻ thành viên (Loyalty Card) đẹp mắt với cấp bậc và thanh tiến trình.\n"
        "3. Màn hình chi tiết đơn đặt phòng cho phép tải xuống Hóa đơn PDF.\n"
        "4. Có nút \"Đánh giá ngay\" đối với các booking Đã hoàn thành.\n"
        "5. Cung cấp nút \"Hủy phòng\" với các booking Sắp tới (nếu chính sách cho phép).\n"
        "6. Form cập nhật thông tin cá nhân (Avatar, Tên, Số điện thoại) hoạt động tốt.\n"
        "7. Xử lý upload ảnh đại diện (Avatar) lên server mượt mà, có crop ảnh.\n"
        "8. Hiển thị đầy đủ danh sách Khách sạn đã thích (Favorites).\n"
        "9. Giao diện cài đặt: Đổi ngôn ngữ, Giao diện Sáng/Tối (Dark Mode).\n"
        "10. Có tùy chọn Xóa tài khoản (Account Deletion) tuân thủ chính sách App Store/Google Play.",

        # Hệ thống Push Notification
        "1. Đăng ký thành công Device Token với Firebase Cloud Messaging (FCM).\n"
        "2. Xử lý nhận thông báo khi App đang mở (Foreground) - hiển thị In-app notification.\n"
        "3. Xử lý nhận thông báo khi App đang chạy ngầm (Background) hoặc tắt hẳn (Terminated).\n"
        "4. Click vào thông báo sẽ điều hướng (Deep routing) đúng đến màn hình tương ứng.\n"
        "5. Phân loại thông báo rõ ràng (Khuyến mãi, Cập nhật đơn hàng, Tin nhắn mới).\n"
        "6. Tích hợp màn hình \"Hộp thư\" lưu trữ danh sách các thông báo đã nhận.\n"
        "7. Đánh dấu Đã đọc/Chưa đọc (Read/Unread status) cho từng thông báo.\n"
        "8. Có tùy chọn trong Cài đặt để tắt/mở từng loại thông báo.\n"
        "9. Gắn badge number (số chấm đỏ) lên icon App ở màn hình chính của điện thoại.\n"
        "10. Gửi Device Token mới lên server nếu user đổi điện thoại hoặc đăng xuất/đăng nhập lại."
    ]

    requests = []

    # Prepare batch update for Backend
    backend_range = "Backend!F2:F7"
    body_backend = {
        "values": [[item] for item in backend_dod]
    }
    service.spreadsheets().values().update(
        spreadsheetId=SPREADSHEET_ID,
        range=backend_range,
        valueInputOption="RAW",
        body=body_backend
    ).execute()

    # Prepare batch update for Frontend
    frontend_range = "Frontend!F2:F9"
    body_frontend = {
        "values": [[item] for item in frontend_dod]
    }
    service.spreadsheets().values().update(
        spreadsheetId=SPREADSHEET_ID,
        range=frontend_range,
        valueInputOption="RAW",
        body=body_frontend
    ).execute()

    # Apply resizing to fix row height after inserting large text
    for sheet in sheets:
        sheet_id = sheet.get("properties", {}).get("sheetId", 0)
        requests.append({
            "autoResizeDimensions": {
                "dimensions": {
                    "sheetId": sheet_id,
                    "dimension": "ROWS"
                }
            }
        })
    
    if requests:
        service.spreadsheets().batchUpdate(
            spreadsheetId=SPREADSHEET_ID,
            body={'requests': requests}
        ).execute()

    print("DoD updated successfully for both sheets.")

if __name__ == '__main__':
    main()
