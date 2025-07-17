import { Request, Response } from 'express';

export const getTradeHistory = async (req: Request, res: Response) => {
  res.json([
    { symbol: 'BTCUSDT', side: 'BUY', amount: 0.05, price: 60000, date: Date.now() - 86400000 },
    { symbol: 'ETHUSDT', side: 'SELL', amount: 1, price: 3200, date: Date.now() - 43200000 },
  ]);
};
