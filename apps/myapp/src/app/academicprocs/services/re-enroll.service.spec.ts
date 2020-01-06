import { TestBed } from '@angular/core/testing';

import { ReEnrollService } from './re-enroll.service';

describe('ReEnrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReEnrollService = TestBed.get(ReEnrollService);
    expect(service).toBeTruthy();
  });
});
