import { Request, Response, NextFunction } from 'express';
import { RoomService } from './room.service.js';

export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  createRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const room = await this.roomService.createRoom(req.params.hotelId as string, req.params.roomTypeId as string, req.body);
      res.status(201).json({ success: true, data: room });
    } catch (error) {
      next(error);
    }
  };

  updateRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const room = await this.roomService.updateRoom(req.params.id as string, req.body);
      res.status(200).json({ success: true, data: room });
    } catch (error) {
      next(error);
    }
  };

  getRoomsByRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rooms = await this.roomService.getRoomsByRoomType(req.params.roomTypeId as string);
      res.status(200).json({ success: true, data: rooms });
    } catch (error) {
      next(error);
    }
  };

  deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.roomService.deleteRoom(req.params.id as string);
      res.status(200).json({ success: true, message: 'Room deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
