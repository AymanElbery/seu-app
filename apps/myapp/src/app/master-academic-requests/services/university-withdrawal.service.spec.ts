import { TestBed } from '@angular/core/testing';

import { UniversityWithdrawalService } from './university-withdrawal.service';

describe('UniversityWithdrawalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversityWithdrawalService = TestBed.get(UniversityWithdrawalService);
    expect(service).toBeTruthy();
  });
});
