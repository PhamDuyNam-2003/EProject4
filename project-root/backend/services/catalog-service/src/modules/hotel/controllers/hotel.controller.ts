import { Request, Response } from 'express';
import * as hotelService from '../services/hotel.service.js';

export const getAllHotels = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string;
    const hotels = await hotelService.getAllHotels(search || undefined);
    res.status(200).json({ success: true, data: hotels });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getHotelById = async (req: Request, res: Response) => {
  try {
    const hotel = await hotelService.getHotelById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ success: false, message: 'Hotel not found' });
    }
    res.status(200).json({ success: true, data: hotel });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await hotelService.createHotel(req.body);
    res.status(201).json({ success: true, data: hotel });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};