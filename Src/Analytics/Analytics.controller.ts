import { Controller, Get } from '@nestjs/common';

@Controller('analytics')
export class AnalyticsController {
  @Get('status')
  getStatus() {
    return { status: 'analytics ok' };
  }
}
