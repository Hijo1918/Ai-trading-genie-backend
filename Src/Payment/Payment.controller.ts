import { Controller, Get } from '@nestjs/common';

@Controller('payment')
export class PaymentController {
  @Get('status')
  getStatus() {
    return { status: 'payment ok' };
  }
}
