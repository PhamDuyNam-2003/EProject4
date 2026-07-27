import { Router } from 'express';
import { HotelController } from './hotel.controller.js';
import { HotelService } from './hotel.service.js';
import { HotelRepository } from './repositories/hotel.repository.js';
import { prisma } from '../../config/prisma.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { createHotelSchema, updateHotelSchema, getHotelSchema } from '../../validations/hotel.validation.js';
import { verifyToken, authorize } from '../../middlewares/auth.middleware.js';
import roomTypeRoute from '../room-type/room-type.route.js';

const router = Router();

// Dependency Injection Wiring
const hotelRepository = new HotelRepository(prisma as any);
const hotelService = new HotelService(hotelRepository);
const hotelController = new HotelController(hotelService);

router.post('/', verifyToken, authorize('AGENT', 'ADMIN'), validate(createHotelSchema), hotelController.createHotel);
router.get('/', hotelController.getAllHotels);
router.get('/:id', validate(getHotelSchema), hotelController.getHotelById);
router.patch('/:id', verifyToken, authorize('AGENT', 'ADMIN'), validate(updateHotelSchema), hotelController.updateHotel);
router.delete('/:id', verifyToken, authorize('AGENT', 'ADMIN'), validate(getHotelSchema), hotelController.deleteHotel);

// Nested routes
router.use('/:hotelId/room-types', roomTypeRoute);

export default router;
