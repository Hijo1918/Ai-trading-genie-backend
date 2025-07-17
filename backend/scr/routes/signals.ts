import { Router } from 'express';
import { getSignals } from '../controllers/signalsController';

const router = Router();

router.get('/', getSignals);

export default router;
