import { Request, Response } from 'express';
import * as analyticsService from '../services/analytics.service';

export const getDashboard = async (req: Request, res: Response) => {
  try {
    // Nhận DateRange từ Query Parameters (Ví dụ: ?startDate=2026-07-01&endDate=2026-07-16)
    const { startDate, endDate } = req.query;
    
    const dashboardDto = await analyticsService.getDashboardData(
      startDate as string,
      endDate as string
    );
    
    return res.status(200).json({
      success: true,
      message: "Lấy dữ liệu dashboard thành công",
      data: dashboardDto
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};