import { Request, Response } from 'express';
import * as promotionService from '../services/promotion.service';

export const create = async (req: Request, res: Response) => {
  try {
    const { code, discountType, discountValue, maxDiscount, startDate, endDate } = req.body;
    const promotion = await promotionService.createPromotion({
      code,
      discountType,
      discountValue: Number(discountValue),
      maxDiscount: maxDiscount ? Number(maxDiscount) : null,
      startDate: new Date(startDate),
      endDate: new Date(endDate)
    });
    return res.status(201).json({ success: true, data: promotion });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const validate = async (req: Request, res: Response) => {
  try {
    const { code, originalPrice } = req.body;
    if (!code || originalPrice === undefined) {
      return res.status(400).json({ message: 'Thiếu mã code hoặc giá gốc' });
    }
    const result = await promotionService.validateVoucher(code, Number(originalPrice));
    return res.json({ success: true, data: result });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};