import { Request, Response, NextFunction } from 'express';
import { HotelService } from './hotel.service.js';

export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  createHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hotelData = {
        ...req.body,
        ownerId: req.user!.id
      };
      const hotel = await this.hotelService.createHotel(hotelData);
      res.status(201).json({ success: true, data: hotel });
    } catch (error) {
      next(error);
    }
  };

  updateHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hotel = await this.hotelService.updateHotel(req.params.id as string, req.body);
      res.status(200).json({ success: true, data: hotel });
    } catch (error) {
      next(error);
    }
  };

  getHotelById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hotel = await this.hotelService.getHotelById(req.params.id as string);
      if (!hotel || (hotel as any).deletedAt) {
        res.status(404).json({ success: false, message: 'Hotel not found' });
        return;
      }
      res.status(200).json({ success: true, data: hotel });
    } catch (error) {
      next(error);
    }
  };

  getAllHotels = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hotels = await this.hotelService.getAllHotels(req.query);
      res.status(200).json({ success: true, data: hotels });
    } catch (error) {
      next(error);
    }
  };

  deleteHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.hotelService.deleteHotel(req.params.id as string);
      res.status(200).json({ success: true, message: 'Hotel deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
