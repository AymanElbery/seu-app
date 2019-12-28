import { TestBed } from '@angular/core/testing';

import { FeesPaymentService } from './fees-payment.service';

describe('FeesPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeesPaymentService = TestBed.get(FeesPaymentService);
    expect(service).toBeTruthy();
  });
});
