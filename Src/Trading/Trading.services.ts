import { Injectable } from '@nestjs/common';

@Injectable()
export class TradingService {
  findAll() {
    return [
      // Dummy trades
      { id: 1, symbol: 'BTCUSDT', strategy: 'AI-Long', status: 'open' },
    ];
  }
}
