import { Request, Response, NextFunction } from 'express';
import { RoomTypeService } from './room-type.service.js';

export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  createRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomType = await this.roomTypeService.createRoomType(req.params.hotelId as string, req.body);
      res.status(201).json({ success: true, data: roomType });
    } catch (error) {
      next(error);
    }
  };

  updateRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomType = await this.roomTypeService.updateRoomType(req.params.id as string, req.body);
      res.status(200).json({ success: true, data: roomType });
    } catch (error) {
      next(error);
    }
  };

  getRoomTypeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomType = await this.roomTypeService.getRoomTypeById(req.params.id as string);
      if (!roomType || !roomType.isActive) {
        res.status(404).json({ success: false, message: 'RoomType not found' });
        return;
      }
      res.status(200).json({ success: true, data: roomType });
    } catch (error) {
      next(error);
    }
  };

  getRoomTypesByHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomTypes = await this.roomTypeService.getRoomTypesByHotel(req.params.hotelId as string);
      res.status(200).json({ success: true, data: roomTypes });
    } catch (error) {
      next(error);
    }
  };

  deleteRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.roomTypeService.deleteRoomType(req.params.id as string);
      res.status(200).json({ success: true, message: 'RoomType deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
