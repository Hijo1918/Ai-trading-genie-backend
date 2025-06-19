import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  getAnalyticsData() {
    return { message: 'Analytics Data' };
  }
}
