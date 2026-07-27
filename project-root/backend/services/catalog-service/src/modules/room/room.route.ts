import { Router } from 'express';
import { RoomController } from './room.controller.js';
import { RoomService } from './room.service.js';
import { RoomRepository } from './repositories/room.repository.js';
import { prisma } from '../../config/prisma.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { createRoomSchema, updateRoomSchema, getRoomSchema, getRoomsByRoomTypeSchema } from '../../validations/room.validation.js';
import { verifyToken, authorize } from '../../middlewares/auth.middleware.js';

const router = Router({ mergeParams: true });

// Dependency Injection Wiring
const roomRepository = new RoomRepository(prisma as any);
const roomService = new RoomService(roomRepository);
const roomController = new RoomController(roomService);

router.post('/', verifyToken, authorize('AGENT', 'ADMIN'), validate(createRoomSchema), roomController.createRoom);
router.get('/', validate(getRoomsByRoomTypeSchema), roomController.getRoomsByRoomType);

router.patch('/:id', verifyToken, authorize('AGENT', 'ADMIN', 'RECEPTIONIST'), validate(updateRoomSchema), roomController.updateRoom);
router.delete('/:id', verifyToken, authorize('AGENT', 'ADMIN'), validate(getRoomSchema), roomController.deleteRoom);

export default router;
