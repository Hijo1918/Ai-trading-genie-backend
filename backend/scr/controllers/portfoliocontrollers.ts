import { Request, Response } from 'express';

export const getPortfolio = async (req: Request, res: Response) => {
  res.json({
    assets: [
      { symbol: 'BTC', quantity: 0.1, value: 3000 },
      { symbol: 'ETH', quantity: 1.5, value: 4500 },
    ],
    totalValue: 7500,
  });
};
