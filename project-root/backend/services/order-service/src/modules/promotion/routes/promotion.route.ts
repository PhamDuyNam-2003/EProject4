import { Router } from 'express';
import * as promotionController from '../controllers/promotion.controller';

const router = Router();

router.post('/', promotionController.create);
router.post('/validate', promotionController.validate);

export default router;