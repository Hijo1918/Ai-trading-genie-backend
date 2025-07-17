import { Request, Response } from 'express';

export const getDashboard = async (req: Request, res: Response) => {
  res.json({
    balance: 10500.21,
    openTrades: 2,
    pnl: 320.5,
    recentSignals: [
      { symbol: 'BTCUSDT', action: 'BUY', confidence: 0.91, date: Date.now() },
    ],
  });
};
