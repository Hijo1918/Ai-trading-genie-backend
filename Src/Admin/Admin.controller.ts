import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get('status')
  getStatus() {
    return { status: 'admin ok' };
  }
}
