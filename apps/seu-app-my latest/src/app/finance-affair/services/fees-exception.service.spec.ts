import { TestBed } from '@angular/core/testing';

import { FeesExceptionService } from './fees-exception.service';

describe('FeesExceptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeesExceptionService = TestBed.get(FeesExceptionService);
    expect(service).toBeTruthy();
  });
});
