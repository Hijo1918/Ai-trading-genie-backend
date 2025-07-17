import { Request, Response } from 'express';

export const getSignals = async (req: Request, res: Response) => {
  res.json([
    { symbol: 'BTCUSDT', action: 'BUY', confidence: 0.92, timestamp: Date.now() },
    { symbol: 'ETHUSDT', action: 'SELL', confidence: 0.67, timestamp: Date.now() },
  ]);
};
