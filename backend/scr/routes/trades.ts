import { Router } from 'express';
import { getTradeHistory } from '../controllers/tradesController';

const router = Router();

router.get('/history', getTradeHistory);

export default router;
