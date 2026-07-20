import { Router } from 'express';
import * as hotelController from '../controllers/hotel.controller.js';

const router = Router();

router.post('/', hotelController.createHotel);
router.get('/', hotelController.getAllHotels);
router.get('/:id', hotelController.getHotelById);

export default router;