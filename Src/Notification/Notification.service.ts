import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  getNotificationData() {
    return { message: 'Notification Data' };
  }
}
