import { Router } from 'express';
import { getPortfolio } from '../controllers/portfolioController';

const router = Router();

router.get('/', getPortfolio);

export default router;
