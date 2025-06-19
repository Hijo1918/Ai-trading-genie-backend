import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  getPaymentData() {
    return { message: 'Payment Data' };
  }
}
