import swaggerAutogen from "swagger-autogen";

const services = [
  {
    name: "Booking Service",
    description: "Tài liệu API của riêng Module Booking",
    basePath: "/api/bookings",
    outputFile: "./src/modules/booking/docs/swagger-booking.json",
    routerFiles: ["./src/modules/booking/BookingRouter.ts"],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        CreateBookingDto: {
          type: "object",
          properties: {
            hotelId: { type: "string", example: "1da9801c-2325-43c4-91ea-a76bc8813f01" },
            checkInDate: { type: "string", example: "2026-08-01" },
            checkOutDate: { type: "string", example: "2026-08-05" },
            rooms: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  roomId: { type: "string", example: "46fd1b9f-1a7d-4b41-a7af-928a8c0fff65" },
                  quantity: { type: "number", example: 1 }
                }
              }
            },
            guestInfo: {
              type: "object",
              properties: {
                fullName: { type: "string", example: "Test User" },
                email: { type: "string", example: "test@example.com" },
                phone: { type: "string", example: "0123456789" },
                specialRequests: { type: "string", example: "Late checkin" }
              }
            }
          },
        },
      },
    },
  },
  {
    name: "Payment Service",
    description: "Tài liệu API của riêng Module Payment",
    basePath: "/api/payment",
    outputFile: "./src/modules/payment/docs/swagger-payment.json",
    routerFiles: ["./src/modules/payment/PaymentRouter.ts"],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        CreatePaymentUrlDto: {
          type: "object",
          properties: {
            bookingId: {
              type: "string",
              example: "205c04a6-ac44-4255-b7de-c2e7a8f6d9c2",
            },
          },
          required: ["bookingId"],
        }
      },
    },
  },
];

const autogen = swaggerAutogen({ openapi: "3.0.0", autoHeaders: false });

for (const service of services) {
  const doc = {
    info: {
      title: `${service.name} API`,
      description: service.description,
      version: "1.0.0",
    },
    host: "localhost:3000",
    schemes: ["http"],
    basePath: "",
    components: service.components || {},
  };

  autogen(service.outputFile, service.routerFiles, doc).then(() => {
    console.log(` Đã build thành công tài liệu Swagger cho [${service.name}]`);
  });
}
