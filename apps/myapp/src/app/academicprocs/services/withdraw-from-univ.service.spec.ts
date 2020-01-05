import { TestBed } from '@angular/core/testing';

import { WithdrawFromUnivService } from './withdraw-from-univ.service';

describe('WithdrawFromUnivService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WithdrawFromUnivService = TestBed.get(WithdrawFromUnivService);
    expect(service).toBeTruthy();
  });
});
