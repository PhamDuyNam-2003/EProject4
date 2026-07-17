import express from 'express';
import analyticsRouter from './modules/analytics/routes/analytics.route';

const app = express();
app.use(express.json());

// Kết nối phần route báo đỏ vào hệ thống
app.use('/api/v1/analytics', analyticsRouter);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Analytics service đang chạy trên port ${PORT}`);
});