# ⚙️ Infrastructure (Hạ tầng & Vận hành)

Thư mục này đóng vai trò là **"Trung tâm điều hành"** toàn bộ hạ tầng phần mềm chạy phía dưới của dự án. 

## 📂 Các thành phần chính và nhiệm vụ của chúng

Hiện tại thư mục này đang chứa file quan trọng nhất:
*   **`docker-compose.yml`**: Chứa cấu hình chạy 5 loại Database và Message Queue (PostgreSQL, MongoDB, Redis, RabbitMQ, ElasticSearch).

## 🔮 Trong tương lai khi code, thư mục này sẽ làm thêm gì?

Khi bắt tay vào code thực tế, bạn sẽ bổ sung thêm các file sau vào đây:

1.  **Cấu hình API Gateway:**
    *   Ví dụ: Nếu dùng **Nginx**, **Ocelot** (nếu dùng .NET) hoặc **Kong API Gateway**, bạn sẽ đặt các file config như `nginx.conf` hay `ocelot.json` vào đây để cấu hình định tuyến (Ví dụ: request vào `/api/v1/users` thì đẩy về `identity-service`).
2.  **Cấu hình Message Broker (RabbitMQ):**
    *   Các file script hoặc config để định nghĩa sẵn các Exchange, Queue và Routing Key ban đầu nếu cần thiết.
3.  **File cấu hình môi trường (.env):**
    *   Lưu trữ các biến môi trường chạy local như Port, User/Password mặc định của database để docker-compose đọc vào.
4.  **Hạ tầng deploy (CI/CD):**
    *   Nếu nhóm muốn deploy lên VPS để chạy thử, bạn sẽ đặt các file cấu hình Dockerfile tổng hợp, hoặc cấu hình runner của GitHub Actions / GitLab CI tại đây.
