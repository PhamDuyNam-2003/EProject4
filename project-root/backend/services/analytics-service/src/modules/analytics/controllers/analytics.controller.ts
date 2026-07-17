import { Request, Response } from 'express';
import * as analyticsService from '../services/analytics.service';

export const getDashboard = async (req: Request, res: Response) => {
  try {
    const data = await analyticsService.getDashboardData();
    return res.json({ success: true, data });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};