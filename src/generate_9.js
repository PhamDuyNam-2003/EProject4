const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'project-root');

const data = {
  services: [
    {
      name: "identity-service",
      purp: "Quản lý tập trung Bảo mật (Auth), Hồ sơ Khách hàng (User) và Hồ sơ Đối tác (Agent).",
      calls: [], cby: ["API Gateway"],
      pub: ["AccountCreated", "ProfileUpdated", "AgentVerified"], sub: [],
      db: "identity_db", seed: ["Role", "Permission", "Province"],
      models: [
        {name: "Account", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "Username", t: "String", nul: "No", d: "Tên đăng nhập", p: "No", f: "No", r: "-"},
          {n: "PasswordHash", t: "String", nul: "No", d: "Mật khẩu", p: "No", f: "No", r: "-"},
          {n: "Role", t: "String", nul: "No", d: "Quyền (Admin/User/Agent)", p: "No", f: "No", r: "-"}
        ]},
        {name: "UserProfile", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "AccountId", t: "UUID", nul: "No", d: "Auth Account", p: "No", f: "Yes", r: "1-1 Account"},
          {n: "FullName", t: "String", nul: "Yes", d: "Họ tên", p: "No", f: "No", r: "-"}
        ]},
        {name: "AgentProfile", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "AccountId", t: "UUID", nul: "No", d: "Auth Account", p: "No", f: "Yes", r: "1-1 Account"},
          {n: "CompanyName", t: "String", nul: "No", d: "Tên cty", p: "No", f: "No", r: "-"},
          {n: "Commission", t: "Decimal", nul: "No", d: "Hoa hồng", p: "No", f: "No", r: "-"}
        ]}
      ],
      api: [
        {m: "POST", e: "/api/v1/identity/login", d: "Đăng nhập", a: "No", rq: "LoginDto", rs: "TokenDto", s: "200"},
        {m: "GET", e: "/api/v1/identity/users/me", d: "Lấy profile", a: "Yes", rq: "-", rs: "ProfileDto", s: "200"}
      ]
    },
    {
      name: "hotel-service",
      purp: "Quản lý thông tin tĩnh của khách sạn và phòng (Tên, Ảnh, Tiện ích).",
      calls: ["identity-service"], cby: ["search-service", "booking-service"],
      pub: ["HotelCreated", "RoomTypeCreated"], sub: ["AgentVerified"],
      db: "hotel_db", seed: ["Amenity"],
      models: [
        {name: "Hotel", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "AgentId", t: "UUID", nul: "No", d: "Agent", p: "No", f: "Yes", r: "N-1 AgentProfile"},
          {n: "Name", t: "String", nul: "No", d: "Tên", p: "No", f: "No", r: "-"}
        ]},
        {name: "RoomType", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "HotelId", t: "UUID", nul: "No", d: "Hotel", p: "No", f: "Yes", r: "N-1 Hotel"}
        ]}
      ],
      api: [
        {m: "GET", e: "/api/v1/hotels", d: "List hotels", a: "No", rq: "Query", rs: "List<Hotel>", s: "200"}
      ]
    },
    {
      name: "inventory-service",
      purp: "Quản lý số lượng phòng trống và giá theo ngày (Lock phòng).",
      calls: [], cby: ["booking-service", "search-service"],
      pub: ["InventoryChanged"], sub: ["BookingCreated", "BookingCancelled", "RoomTypeCreated"],
      db: "inventory_db", seed: [],
      models: [
        {name: "Availability", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "RoomTypeId", t: "UUID", nul: "No", d: "Type", p: "No", f: "Yes", r: "-"},
          {n: "Date", t: "Date", nul: "No", d: "Ngày", p: "No", f: "No", r: "-"},
          {n: "AvailableCount", t: "Int", nul: "No", d: "Số lượng", p: "No", f: "No", r: "-"}
        ]}
      ],
      api: [
        {m: "POST", e: "/api/v1/inventory/lock", d: "Lock phòng", a: "Yes", rq: "LockReq", rs: "LockRes", s: "200"}
      ]
    },
    {
      name: "search-service",
      purp: "Cỗ máy tìm kiếm siêu tốc bằng ElasticSearch.",
      calls: [], cby: ["API Gateway"],
      pub: [], sub: ["HotelCreated", "InventoryChanged"],
      db: "elasticsearch", seed: [],
      models: [
        {name: "SearchDocument", fld: [
          {n: "Id", t: "String", nul: "No", d: "Document ID", p: "Yes", f: "No", r: "-"}
        ]}
      ],
      api: [
        {m: "GET", e: "/api/v1/search", d: "Tìm khách sạn", a: "No", rq: "Query", rs: "List<SearchDto>", s: "200"}
      ]
    },
    {
      name: "booking-service",
      purp: "Quản lý vòng đời đơn đặt phòng (Pending, Confirmed, Cancelled).",
      calls: ["inventory-service", "payment-service"], cby: ["API Gateway"],
      pub: ["BookingCreated", "BookingCancelled"], sub: ["PaymentCompleted"],
      db: "booking_db", seed: ["BookingStatus"],
      models: [
        {name: "Booking", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "UserId", t: "UUID", nul: "No", d: "User", p: "No", f: "Yes", r: "-"},
          {n: "TotalAmount", t: "Decimal", nul: "No", d: "Tổng tiền", p: "No", f: "No", r: "-"}
        ]},
        {name: "BookingDetail", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "BookingId", t: "UUID", nul: "No", d: "Booking", p: "No", f: "Yes", r: "N-1 Booking"}
        ]}
      ],
      api: [
        {m: "POST", e: "/api/v1/bookings", d: "Đặt phòng", a: "Yes", rq: "BookingReq", rs: "BookingRes", s: "201"}
      ]
    },
    {
      name: "payment-service",
      purp: "Quản lý thanh toán tích hợp VNPay/Stripe.",
      calls: [], cby: ["booking-service"],
      pub: ["PaymentCompleted", "PaymentFailed"], sub: ["BookingCreated"],
      db: "payment_db", seed: ["PaymentMethod"],
      models: [
        {name: "Payment", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "BookingId", t: "UUID", nul: "No", d: "Booking", p: "No", f: "Yes", r: "-"},
          {n: "Status", t: "String", nul: "No", d: "Trạng thái", p: "No", f: "No", r: "-"}
        ]}
      ],
      api: [
        {m: "POST", e: "/api/v1/payments/webhook", d: "VNPay Webhook", a: "No", rq: "Webhook", rs: "Ok", s: "200"}
      ]
    },
    {
      name: "notification-service",
      purp: "Trung tâm thông báo (Email, SMS, Push).",
      calls: [], cby: ["identity-service", "booking-service"],
      pub: ["NotificationSent"], sub: ["BookingCreated", "PaymentCompleted", "AccountCreated"],
      db: "notification_db", seed: ["Templates"],
      models: [
        {name: "NotificationLog", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "Content", t: "String", nul: "No", d: "Nội dung", p: "No", f: "No", r: "-"}
        ]}
      ],
      api: [
        {m: "GET", e: "/api/v1/notifications", d: "Lấy thông báo", a: "Yes", rq: "-", rs: "List<Noti>", s: "200"}
      ]
    },
    {
      name: "chat-service",
      purp: "WebSocket Chat Realtime giữa Khách hàng và Khách sạn.",
      calls: [], cby: [],
      pub: ["MessageSent"], sub: [],
      db: "chat_db", seed: [],
      models: [
        {name: "Message", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "Content", t: "String", nul: "No", d: "Text", p: "No", f: "No", r: "-"}
        ]}
      ],
      api: [
        {m: "WS", e: "/ws/chat", d: "Kết nối WS", a: "Yes", rq: "-", rs: "-", s: "101"}
      ]
    },
    {
      name: "analytics-service",
      purp: "Báo cáo thống kê, tổng hợp doanh thu cuối ngày.",
      calls: [], cby: [],
      pub: [], sub: ["PaymentCompleted", "BookingCreated"],
      db: "analytics_db", seed: [],
      models: [
        {name: "DailyReport", fld: [
          {n: "Id", t: "UUID", nul: "No", d: "PK", p: "Yes", f: "No", r: "-"},
          {n: "Revenue", t: "Decimal", nul: "No", d: "Doanh thu", p: "No", f: "No", r: "-"}
        ]}
      ],
      api: [
        {m: "GET", e: "/api/v1/analytics", d: "Báo cáo", a: "Yes", rq: "DateRange", rs: "Report", s: "200"}
      ]
    }
  ]
};

function writeUTF8(relPath, content) {
    const fullPath = path.join(basePath, relPath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, content, 'utf8');
}

function mapCsharpType(t, nul) {
    let type = t;
    if (t === 'UUID') type = 'Guid';
    if (t === 'String') type = 'string';
    if (t === 'Int') type = 'int';
    if (t === 'Decimal') type = 'decimal';
    if (t === 'Date') type = 'DateTime';
    if (t === 'Boolean') type = 'bool';
    if (t === 'Array') type = 'List<string>';
    if (t === 'JSON') type = 'string';
    if (nul === 'Yes' && type !== 'string' && type !== 'List<string>') type += '?';
    return type;
}

// Clean entire backend/services directory
const servicesDir = path.join(basePath, 'backend/services');
if (fs.existsSync(servicesDir)) {
    fs.rmSync(servicesDir, { recursive: true, force: true });
}
fs.mkdirSync(servicesDir, { recursive: true });

data.services.forEach(s => {
    const dir = `backend/services/${s.name}`;
    
    const calls = s.calls && s.calls.length ? s.calls.join(', ') : 'None';
    const cby = s.cby && s.cby.length ? s.cby.join(', ') : 'None';
    const pub = s.pub && s.pub.length ? s.pub.join(', ') : 'None';
    const sub = s.sub && s.sub.length ? s.sub.join(', ') : 'None';
    const seed = s.seed && s.seed.length ? s.seed.join(', ') : 'None';

    let modelsStr = "```csharp\n";
    s.models.forEach(m => {
        modelsStr += `public class ${m.name} {\n`;
        m.fld.forEach(f => {
            let csType = mapCsharpType(f.t, f.nul);
            let comment = f.d;
            if (f.p === 'Yes') comment += " (PK)";
            if (f.f === 'Yes') comment += ` (FK: ${f.r})`;
            modelsStr += `    public ${csType} ${f.n} { get; set; } // ${comment}\n`;
        });
        modelsStr += `}\n\n`;
    });
    modelsStr += "```\n";

    let apiStr = "| Method | Endpoint | Description | Auth | Request | Response | Status |\n|---|---|---|---|---|---|---|\n";
    if (s.api && s.api.length) {
        s.api.forEach(a => {
            apiStr += `| ${a.m} | ${a.e} | ${a.d} | ${a.a} | ${a.rq} | ${a.rs} | ${a.s} |\n`;
        });
    } else {
        apiStr += "| - | - | - | - | - | - | - |\n";
    }

    const readme = `# ${s.name}

**Mục đích:** ${s.purp}
**Dependencies:** Calls: \`${calls}\` | Gọi bởi: \`${cby}\`

---

## 1. Database Schema
- **Database:** \`${s.db}\`
- **Seed Data:** ${seed}

${modelsStr}

## 2. API Endpoints
${apiStr}

## 3. Message Queue
- **Publish:** ${pub}
- **Subscribe:** ${sub}

## 4. Checklist Triển Khai
- [ ] Tạo CSDL \`${s.db}\` & Seed Data
- [ ] Tạo Models & DTOs
- [ ] Viết Logic Service & REST API
- [ ] Tích hợp Message Queue (Publish/Subscribe)
- [ ] Viết Unit Test & Build Dockerfile
`;
    
    writeUTF8(`${dir}/README.md`, readme);
});

console.log("Generated exactly 9 services!");
