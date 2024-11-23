import express from 'express'
import { orderController } from './order.controller';

const router = express.Router();

router.post('/',orderController.createAorder);
router.get('/revenue',orderController.getRevenueDb);

export const orderRoute = router;
