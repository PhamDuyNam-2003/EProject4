import { Request, Response } from 'express';
import * as hotelService from '../services/hotel.service.js';

export const getAllHotels = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string;
    const category = req.query.category as string;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    
    const filters = {
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      rating: req.query.rating,
      petFriendly: req.query.petFriendly,
      amenities: req.query.amenities
    };
    
    const result = await hotelService.getAllHotels(search || undefined, category || undefined, page, limit, filters);
    res.status(200).json({ success: true, ...result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getHotelById = async (req: Request, res: Response) => {
  try {
    const hotel = await hotelService.getHotelById(req.params.id as string);
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

export const getRoomTypes = async (req: Request, res: Response) => {
  try {
    const roomTypes = await hotelService.getRoomTypesByHotelId(req.params.id as string);
    res.status(200).json({ success: true, data: roomTypes });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await hotelService.getReviewsByHotelId(req.params.id as string);
    res.status(200).json({ success: true, data: reviews });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const lockRoom = async (req: Request, res: Response) => {
  try {
    const { roomTypeId, quantity, checkIn, checkOut } = req.body;
    const result = await hotelService.lockRoom(roomTypeId, quantity, new Date(checkIn), new Date(checkOut));
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};