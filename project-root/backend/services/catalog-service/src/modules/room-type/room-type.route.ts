import { Router } from 'express';
import { RoomTypeController } from './room-type.controller.js';
import { RoomTypeService } from './room-type.service.js';
import { RoomTypeRepository } from './repositories/room-type.repository.js';
import { prisma } from '../../config/prisma.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { createRoomTypeSchema, updateRoomTypeSchema, getRoomTypeSchema, getRoomTypesByHotelSchema } from '../../validations/room-type.validation.js';
import { verifyToken, authorize } from '../../middlewares/auth.middleware.js';
import roomRoute from '../room/room.route.js';

const router = Router({ mergeParams: true });

// Dependency Injection Wiring
const roomTypeRepository = new RoomTypeRepository(prisma as any);
const roomTypeService = new RoomTypeService(roomTypeRepository);
const roomTypeController = new RoomTypeController(roomTypeService);

router.post('/', verifyToken, authorize('AGENT', 'ADMIN'), validate(createRoomTypeSchema), roomTypeController.createRoomType);
router.get('/', validate(getRoomTypesByHotelSchema), roomTypeController.getRoomTypesByHotel);

router.get('/:id', validate(getRoomTypeSchema), roomTypeController.getRoomTypeById);
router.patch('/:id', verifyToken, authorize('AGENT', 'ADMIN'), validate(updateRoomTypeSchema), roomTypeController.updateRoomType);
router.delete('/:id', verifyToken, authorize('AGENT', 'ADMIN'), validate(getRoomTypeSchema), roomTypeController.deleteRoomType);

// Nested routes
router.use('/:roomTypeId/rooms', roomRoute);

export default router;
