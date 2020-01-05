import { TestBed } from '@angular/core/testing';

import { ChangeRequestService } from './change-request.service';

describe('ChangeRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeRequestService = TestBed.get(ChangeRequestService);
    expect(service).toBeTruthy();
  });
});
