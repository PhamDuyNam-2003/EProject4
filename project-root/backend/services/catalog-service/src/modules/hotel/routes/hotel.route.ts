import { Router } from 'express';
import * as hotelController from '../controllers/hotel.controller';

const router = Router();

router.post('/', hotelController.create);
router.get('/', hotelController.getAll);
router.get('/:id', hotelController.getById);

export default router;