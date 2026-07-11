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
    sheet_metadata = service.spreadsheets().get(spreadsheetId=SPREADSHEET_ID).execute()
    sheets = sheet_metadata.get('sheets', '')

    backend_col6 = [
        # infrastructure
        "1. Network Configuration\n2. PostgreSQL Volumes\n3. MongoDB Volumes\n4. Redis Volumes\n5. RabbitMQ/Kafka Topics & Queues\n6. ElasticSearch Index Setup\n7. Dockerfile for each microservice\n8. docker-compose.yml configuration\n9. Initialization Scripts (seed data)\n10. Environment Variables (.env)",
        # api-gateway
        "1. Route Configuration\n2. JWT Middleware\n3. Rate Limiter Policy\n4. CORS Settings\n5. Logging Interceptor\n6. Error Handler Wrapper\n7. Proxy Forwarding Logic\n8. Timeout Configuration\n9. Circuit Breaker States\n10. Cache Headers Configuration",
        # Identity
        "1. User\n2. Role\n3. Permission\n4. UserRole\n5. RolePermission\n6. RefreshToken\n7. UserSession\n8. UserAddress\n9. LoyaltyPoint\n10. PasswordResetToken",
        # Catalog
        "1. Hotel\n2. HotelAmenity\n3. RoomType\n4. Room\n5. RoomAvailability (Inventory)\n6. RoomLock\n7. SearchIndex\n8. Review\n9. ReviewReply\n10. FavoriteHotel",
        # Order
        "1. Booking\n2. BookingRoom\n3. GuestInfo\n4. BookingHistory\n5. CancellationPolicy\n6. PaymentTransaction\n7. Invoice\n8. Promotion (Campaign)\n9. Coupon\n10. RefundRequest",
        # Operation
        "1. NotificationTemplate\n2. DeviceToken\n3. AppNotification\n4. Conversation\n5. Message\n6. MessageAttachment\n7. RevenueReport\n8. HotelOccupancyReport\n9. SystemLog\n10. AdminDashboardConfig"
    ]

    backend_col7 = [
        # infra
        "1. Khởi tạo toàn bộ mạng riêng ảo (VPC/Docker Network) cho các dịch vụ.\n2. Thiết lập cơ sở dữ liệu PostgreSQL cho dữ liệu giao dịch chính.\n3. Setup MongoDB cho việc lưu trữ log và tin nhắn chat.\n4. Triển khai Redis để làm bộ nhớ đệm (Cache) siêu tốc.\n5. Cấu hình RabbitMQ để trao đổi thông điệp (Message Queue) giữa các service.\n6. Tích hợp ElasticSearch phục vụ tính năng tìm kiếm văn bản full-text.\n7. Cấu hình ánh xạ thư mục dữ liệu (Bind mounts/Volumes) để chống mất data.\n8. Thiết lập các thông số về giới hạn bộ nhớ (mem_limit) để tránh chết server.\n9. Triển khai các công cụ giám sát (nếu có) như pgAdmin.\n10. Quản lý toàn bộ cấu hình bằng mã nguồn (Infrastructure as Code) qua docker-compose.",
        # gateway
        "1. Chặn toàn bộ request từ bên ngoài và định tuyến chúng đến đúng service.\n2. Bóc tách và xác thực tính hợp lệ của chữ ký JWT Token trên từng request.\n3. Loại bỏ token không hợp lệ hoặc đã hết hạn trước khi cho phép đi tiếp.\n4. Gắn thêm thông tin UserId hoặc Role vào Header gửi cho các service con.\n5. Giới hạn số lượng request (Rate limiting) dựa trên địa chỉ IP.\n6. Ghi log toàn bộ lịch sử truy cập (Access log) cho mục đích debug.\n7. Ẩn toàn bộ cấu trúc mạng và các port bên trong của hệ thống microservices.\n8. Xử lý chuẩn hóa các mã lỗi HTTP (401, 403, 500, 502, 504) trả về client.\n9. Đảm bảo hỗ trợ HTTPS (SSL/TLS termination) tại tầng ngoài cùng.\n10. Chống lại các cuộc tấn công CSRF và cấu hình các header bảo mật (Helmet).",
        # Identity
        "1. Quản lý toàn bộ thông tin tài khoản người dùng, mã hóa mật khẩu an toàn.\n2. Cung cấp luồng sinh JWT và Refresh Token với hạn sử dụng an toàn.\n3. Quản lý danh sách phiên đăng nhập (Sessions) hiện tại của người dùng.\n4. Cung cấp API để kiểm tra nhanh quyền truy cập (Authorization) dựa trên Role.\n5. Quản lý thông tin hồ sơ khách hàng (Tên, SDT, Avatar).\n6. Xử lý luồng lấy lại mật khẩu an toàn thông qua email (OTP/Link).\n7. Tính toán điểm thưởng Loyalty khi khách hàng sử dụng dịch vụ thường xuyên.\n8. Khóa tài khoản vĩnh viễn hoặc tạm thời đối với các User vi phạm.\n9. Hỗ trợ đăng nhập qua các bên thứ ba (Google/Facebook OAuth2).\n10. Đồng bộ thông tin người dùng cho các service khác khi có cập nhật.",
        # Catalog
        "1. Quản lý danh mục khách sạn: Tên, địa chỉ, số sao, nội quy, kinh độ/vĩ độ.\n2. Quản lý phân loại hạng phòng (Standard, Deluxe) và thông tin giường ngủ.\n3. Theo dõi số lượng phòng trống thực tế theo từng ngày/tháng (Inventory).\n4. Xử lý khóa phòng (Lock) tạm thời trong 15 phút khi người dùng bắt đầu thanh toán.\n5. Khôi phục (Unlock) phòng nếu giao dịch bị hủy hoặc thanh toán thất bại.\n6. Đẩy dữ liệu tĩnh (Khách sạn, Tiện ích) vào ElasticSearch để lập chỉ mục.\n7. Cung cấp API tìm kiếm siêu nhanh kết hợp bộ lọc (Filter) đa dạng.\n8. Xử lý luồng nhận đánh giá từ khách hàng và trả lời từ phía chủ KS.\n9. Tính toán tự động điểm đánh giá trung bình (Rating) dựa trên số lượng review.\n10. Cập nhật và lưu lại lịch sử thay đổi giá phòng theo các dịp lễ, mùa vụ.",
        # Order
        "1. Khởi tạo đơn đặt phòng với đầy đủ thông tin: Ngày check-in/out, số người.\n2. Áp dụng mã giảm giá, kiểm tra kỹ điều kiện (hạn dùng, giá trị đơn tối thiểu).\n3. Tính toán tổng tiền chính xác bao gồm Thuế, Phí dịch vụ, Tiền phòng và Giảm giá.\n4. Gọi API thanh toán bên thứ ba (VNPay/Stripe) và lưu lại mã giao dịch gốc.\n5. Lắng nghe Webhook từ cổng thanh toán để cập nhật trạng thái đơn (Thành công/Thất bại).\n6. Cập nhật trạng thái vòng đời Booking: Chờ thanh toán -> Đã xác nhận -> Check-in -> Hoàn tất.\n7. Xử lý yêu cầu hủy phòng (Cancel) từ khách hàng dựa trên chính sách hoàn tiền của khách sạn.\n8. Xuất hóa đơn điện tử (PDF) và gửi đi sau khi thanh toán thành công.\n9. Chặn tuyệt đối việc chỉnh sửa thông tin đơn hàng sau khi đã chuyển sang trạng thái Thanh toán.\n10. Hỗ trợ luồng hoàn tiền (Refund) một phần hoặc toàn phần cho khách hàng.",
        # Operation
        "1. Lắng nghe các event (RabbitMQ) như Tạo đơn, Hủy đơn để kích hoạt thông báo.\n2. Dịch vụ gửi Email tự động bằng SendGrid/Mailgun qua các template HTML định sẵn.\n3. Bắn Push Notification xuống thiết bị di động (Android/iOS) thông qua Firebase FCM.\n4. Xử lý kết nối WebSocket/SignalR duy trì luồng chat 2 chiều giữa Khách và Lễ tân.\n5. Lưu trữ lịch sử chat vào DB (MongoDB) để không bị mất tin nhắn khi tải lại.\n6. Xử lý gửi hình ảnh và file đính kèm trong tin nhắn chat.\n7. Chạy các tác vụ nền (Cronjob) hàng đêm để tổng hợp dữ liệu doanh thu của ngày/tháng.\n8. Cung cấp API trích xuất báo cáo doanh thu dưới dạng Excel/CSV cho kế toán.\n9. Phân tích các từ khóa được tìm kiếm nhiều nhất để gợi ý chiến dịch Marketing.\n10. Thống kê tỷ lệ phòng trống, phòng được đặt nhiều nhất để tối ưu giá."
    ]

    frontend_col6 = [
        # Login
        "1. Form Login (Email/Password)\n2. Form Register (Name, Email, Password, Confirm)\n3. Password Visibility Toggle\n4. Error Text/Tooltip Widget\n5. OTP Input Fields\n6. Loading Spinner/Overlay\n7. Social Login Buttons (Google/FB)\n8. Forgot Password Dialog\n9. Terms & Conditions Checkbox\n10. Form Validator Helpers",
        # Home
        "1. Search Appbar (Sticky)\n2. Date Picker (Range Selection)\n3. Guest Count Selector\n4. Promotional Carousel/Banner\n5. Top Destinations List\n6. Recent Searches Widget\n7. Hotel Card Item (Image, Price, Rating)\n8. Filter Bottom Sheet (Sliders)\n9. Skeleton Loading UI\n10. Empty State Illustration",
        # Detail
        "1. Full-screen Image Gallery\n2. Floating Action Button (Book Now)\n3. Amenities Grid (Icons + Text)\n4. Map Snippet View\n5. Room Type List Item\n6. Expandable Text (Read More)\n7. Review & Rating Summary Card\n8. Review List (Avatar, Stars, Comment)\n9. Share Bottom Sheet\n10. Favorite Toggle Button",
        # Booking
        "1. Booking Summary Header\n2. Guest Information Form\n3. Promo Code Input & Apply Button\n4. Invoice Breakdown (Subtotal, Tax, Discount)\n5. Special Request Textarea\n6. Cancellation Policy Card\n7. Terms Agreement Checkbox\n8. Confirm Payment Button\n9. Loading Overlay\n10. Error Snackbar",
        # Payment
        "1. Payment Method Selector (Radio Buttons)\n2. Payment WebView Container\n3. Countdown Timer Text\n4. Transaction Success Illustration\n5. Transaction Failed Illustration\n6. Retry Payment Button\n7. Back to Home Button\n8. View Booking Details Button\n9. Bank Logo Grid\n10. Secure Checkout Badge",
        # Chat
        "1. Chat List View\n2. Message Bubble (Sent / Received)\n3. Chat Input TextField\n4. Send Button / Attachment Button\n5. Typing Indicator (...)\n6. Read Receipt Icons (Ticks)\n7. Connection Status Banner\n8. Image Preview Dialog\n9. Timestamp Header (Today, Yesterday)\n10. Scroll to Bottom FAB",
        # Profile
        "1. Profile Header (Avatar, Name, Edit Icon)\n2. Loyalty Card Widget (Tier, Points)\n3. TabBar (Upcoming, Completed, Cancelled)\n4. Booking History Card\n5. Write Review Dialog\n6. Settings Menu List\n7. Language Selection Dialog\n8. Theme Switcher (Dark/Light)\n9. PDF Viewer (for Invoice)\n10. Cancel Booking Confirmation Dialog",
        # Push
        "1. Notification Center (Inbox List)\n2. Notification Item (Icon, Title, Body, Time)\n3. Unread Badge (Red Dot)\n4. Empty Inbox Illustration\n5. Notification Settings Toggles\n6. Swipe-to-Delete Action\n7. Mark All as Read Button\n8. Firebase Cloud Messaging SDK\n9. In-App Banner/Toast\n10. Device Token Manager"
    ]

    frontend_col7 = [
        # Login
        "1. Giao diện chào mừng thân thiện, dễ nhìn với logo hệ thống nổi bật.\n2. Ràng buộc (Validate) chặt chẽ dữ liệu người dùng nhập ngay trên thiết bị.\n3. Khóa nút (Disable button) trong quá trình đang kết nối với máy chủ để tránh spam.\n4. Màn hình nhập mã OTP chia thành 6 ô riêng biệt, tự chuyển trỏ chuột mượt mà.\n5. Có liên kết chuyển đổi nhanh giữa Đăng nhập và Đăng ký.\n6. Hỗ trợ đăng nhập nhanh bằng tài khoản Google (OAuth2).\n7. Lưu và tự động điền lại Email nếu người dùng đã từng đăng nhập trước đó.\n8. Hỗ trợ hiển thị cảnh báo (Toast) khi mạng lỗi hoặc sai thông tin.\n9. Luồng lấy lại mật khẩu yêu cầu nhập email và gửi link reset qua email.\n10. Điều hướng tự động thẳng vào Trang chủ nếu máy đã lưu Token hợp lệ từ trước.",
        # Home
        "1. Trang chủ là nơi cung cấp cảm hứng với các ảnh banner đẹp mắt và sắc nét.\n2. Thanh công cụ tìm kiếm luôn nằm ở vị trí trung tâm, dễ thao tác nhất.\n3. Giao diện lịch chọn ngày (Date Range) trực quan, chặn chọn các ngày trong quá khứ.\n4. Nút chọn số lượng người tự động tăng/giảm số phòng hợp lý.\n5. Cung cấp nút Lọc (Filter) mở ra bảng chọn khoảng giá và tích chọn tiện ích.\n6. Danh sách kết quả được render dưới dạng lưới (Grid) hoặc danh sách (List) linh hoạt.\n7. Gắn hiệu ứng loading (Skeleton) khi đang chờ server phản hồi.\n8. Có nhãn (Badge) \"Giá sốc\" hoặc \"Sắp hết\" để thu hút click.\n9. Hiển thị gợi ý các thành phố du lịch đang hot.\n10. Giao diện trống (Empty state) ngộ nghĩnh nếu tìm kiếm không ra kết quả.",
        # Detail
        "1. Gây ấn tượng thị giác ngay lập tức với album ảnh chất lượng cao vuốt ngang.\n2. Nút \"Yêu thích\" thay đổi trạng thái (trắng -> đỏ) khi click.\n3. Nêu bật các tiện ích chính (Wifi miễn phí, Hồ bơi, Bãi đỗ xe) bằng icon dễ hiểu.\n4. Phần chọn phòng hiển thị hình ảnh riêng của từng hạng phòng.\n5. Thể hiện rõ giá cuối cùng đã bao gồm hoặc chưa bao gồm thuế phí.\n6. Tích hợp bản đồ thu nhỏ, click vào sẽ chuyển qua Google Maps để chỉ đường.\n7. Danh sách bình luận chia trang gọn gàng, hiển thị số sao trung bình to rõ.\n8. Nút \"Đặt phòng ngay\" luôn ghim cố định ở cạnh dưới (Bottom Bar) không bị trôi đi.\n9. Phân định rõ ràng các khu vực bằng các đường kẻ ngang hoặc card bo góc mượt.\n10. Hiển thị nhắc nhở nếu hạng phòng đó chỉ còn lại 1-2 phòng cuối cùng.",
        # Booking
        "1. Tóm tắt lại thông tin phòng (Tên KS, Loại phòng, Ngày đi-về) để khách check lại lần cuối.\n2. Form thông tin liên hệ được thiết kế chuẩn mực, bắt buộc điền các ô quan trọng (*).\n3. Khung nhập mã giảm giá (Promo code) đi kèm nút \"Áp dụng\", hiển thị trạng thái thành công/thất bại ngay.\n4. Bảng tính tiền chi tiết liệt kê từng khoản mục để khách thấy rõ độ minh bạch.\n5. Cung cấp ô nhập \"Yêu cầu đặc biệt\" (Ghi chú) để gửi thẳng đến lễ tân.\n6. Hiển thị nổi bật quy định \"Có hoàn tiền\" hay \"Không hoàn tiền\" bằng màu sắc.\n7. Cố định nút \"Tiếp tục thanh toán\" kèm tổng tiền cuối cùng dưới đáy màn hình.\n8. Thực hiện kiểm tra toàn bộ Form (Validation) khi người dùng nhấn thanh toán.\n9. Chặn thao tác (Loading indicator) trong lúc chờ hệ thống tạo luồng đặt phòng.\n10. Tự động fill sẵn thông tin người đặt nếu họ đã đăng nhập.",
        # Payment
        "1. Cung cấp danh sách các cổng thanh toán (Thẻ tín dụng, VNPay, Momo) để lựa chọn.\n2. Điều hướng mượt mà sang giao diện của cổng thanh toán bằng WebView bảo mật.\n3. Hiển thị đồng hồ đếm ngược nhắc nhở khách hàng nhanh chóng giao dịch.\n4. Màn hình báo thành công (Success) được thiết kế màu xanh chủ đạo, kèm pháo hoa/animation.\n5. Màn hình báo lỗi (Failed) thiết kế thân thiện, không gây hoang mang, kèm nút thử lại.\n6. Khóa nút Back cứng trên Android nếu đang ở giữa chừng luồng thanh toán quan trọng.\n7. Cung cấp liên kết thẳng đến trang \"Hồ sơ cá nhân\" để kiểm tra vé/voucher sau khi xong.\n8. Đảm bảo giao diện luôn hiển thị trạng thái an toàn (HTTPS/Secure) để tạo lòng tin.\n9. Gửi yêu cầu kiểm tra (Polling API) xuống backend nếu WebView bị đóng ngang.\n10. Không hiển thị bất kỳ hộp nhập số thẻ ngân hàng nào trực tiếp trên app để tránh rủi ro.",
        # Chat
        "1. Không gian chat được thiết kế giống các ứng dụng quen thuộc (Zalo, Messenger) để dễ dùng.\n2. Khung nhập tin nhắn tự động mở rộng theo nhiều dòng khi chữ dài ra.\n3. Tin nhắn của khách hàng nằm bên phải (màu chủ đạo), KS nằm bên trái (màu xám).\n4. Hỗ trợ hiển thị \"Đang kết nối lại...\" trên cùng màn hình nếu rớt mạng.\n5. Hiển thị dấu \"Đã xem\" nhỏ xíu dưới góc tin nhắn khi đối phương đọc.\n6. Cung cấp nút icon máy ảnh/kẹp ghim để chọn ảnh từ thư viện điện thoại.\n7. Bấm vào ảnh trong chat sẽ mở to (Full-screen) và có thể vuốt để đóng.\n8. Tự động cuộn xuống dòng tin nhắn mới nhất khi có tin đến.\n9. Phân chia rõ ngày tháng (Hôm nay, Hôm qua) ở giữa màn hình chat.\n10. Lưu tạm tin nhắn nháp (Draft) nếu khách hàng gõ nhưng chưa gửi và thoát ra ngoài.",
        # Profile
        "1. Màn hình cá nhân hóa với hình nền và ảnh đại diện (Avatar) hiển thị tròn trịa.\n2. Thẻ thành viên (Loyalty) thiết kế nổi bật, có hiệu ứng lấp lánh (Shimmer) cho các hạng thẻ cao.\n3. Danh sách lịch sử phân chia rõ ràng bằng các Tab vuốt sang trái/phải mượt mà.\n4. Đơn sắp tới (Upcoming) hiển thị mã QRCode hoặc Mã đặt chỗ to rõ để check-in dễ dàng.\n5. Cung cấp nút \"Hủy phòng\" màu đỏ kèm popup xác nhận kỹ càng (Có thể mất phí).\n6. Tích hợp form đánh giá (Chọn số sao và nhập chữ) ngay tại màn hình lịch sử.\n7. Giao diện thay đổi mật khẩu cũ/mới an toàn.\n8. Danh sách menu Cài đặt (Settings) trình bày sạch sẽ với các icon minh họa.\n9. Hỗ trợ bấm vào nút Hóa đơn để tải và xem ngay PDF trong ứng dụng.\n10. Tích hợp Dark Mode đồng bộ tự động với cài đặt của hệ điều hành.",
        # Push
        "1. Xây dựng màn hình \"Hộp thư\" lưu lại tất cả các thông báo từng được gửi đến.\n2. Thông báo chưa đọc được làm nổi bật (in đậm, nền màu nhạt), đã đọc sẽ in thường.\n3. Hỗ trợ thao tác vuốt sang trái (Swipe) để xóa thông báo rác nhanh chóng.\n4. Hiển thị banner rơi từ cạnh trên màn hình xuống (Heads-up) khi có thông báo mới lúc đang dùng app.\n5. Chạm vào bất kỳ thông báo nào cũng sẽ tự điều hướng đến đúng chức năng (Chat, Hóa đơn).\n6. Cung cấp nút \"Đánh dấu tất cả là đã đọc\" để dọn dẹp Hộp thư gọn gàng.\n7. Giao diện quản lý thông báo cho phép bật/tắt nhận tin khuyến mãi để không làm phiền khách.\n8. Tích hợp huy hiệu (Badge) số màu đỏ trên icon ứng dụng ngoài màn hình chính của điện thoại.\n9. Xử lý triệt để việc reset (xóa token) thông báo khi người dùng đăng xuất.\n10. Thiết kế UI cho thông báo đẩy có hỗ trợ hiển thị hình ảnh nhỏ (Rich Notification)."
    ]

    requests = []

    # Backend updates (cols G, H -> index 6, 7)
    for i in range(len(backend_col6)):
        row = i + 1 # 0-indexed, but range is 2 onwards so index 1 is row 2
        range_col6 = f"Backend!G{row + 1}"
        range_col7 = f"Backend!H{row + 1}"
        service.spreadsheets().values().update(spreadsheetId=SPREADSHEET_ID, range=range_col6, valueInputOption="RAW", body={"values": [[backend_col6[i]]]}).execute()
        service.spreadsheets().values().update(spreadsheetId=SPREADSHEET_ID, range=range_col7, valueInputOption="RAW", body={"values": [[backend_col7[i]]]}).execute()

    # Frontend updates (cols G, H -> index 6, 7)
    for i in range(len(frontend_col6)):
        row = i + 1
        range_col6 = f"Frontend!G{row + 1}"
        range_col7 = f"Frontend!H{row + 1}"
        service.spreadsheets().values().update(spreadsheetId=SPREADSHEET_ID, range=range_col6, valueInputOption="RAW", body={"values": [[frontend_col6[i]]]}).execute()
        service.spreadsheets().values().update(spreadsheetId=SPREADSHEET_ID, range=range_col7, valueInputOption="RAW", body={"values": [[frontend_col7[i]]]}).execute()

    # Resize rows
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

    print("Columns updated successfully.")

if __name__ == '__main__':
    main()
