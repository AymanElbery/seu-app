import { TestBed } from '@angular/core/testing';

import { SummerWithdrawService } from './summer-withdraw.service';

describe('SummerWithdrawService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummerWithdrawService = TestBed.get(SummerWithdrawService);
    expect(service).toBeTruthy();
  });
});
