import { Controller, Get } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
  @Get('status')
  getStatus() {
    return { status: 'notification ok' };
  }
}
