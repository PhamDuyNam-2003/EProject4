import { Request, Response } from 'express';
import * as hotelService from '../services/hotel.service';

export const getAllHotels = async (req: Request, res: Response) => {
  try {
    
    const search = req.query.search as string;
    const hotels = await hotelService.getAllHotels(search || undefined);
    res.status(200).json({ success: true, data: hotels });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};