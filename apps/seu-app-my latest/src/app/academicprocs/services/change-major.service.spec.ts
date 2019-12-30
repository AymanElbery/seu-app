import { TestBed } from '@angular/core/testing';

import { ChangeMajorService } from './change-major.service';

describe('ChangeMajorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeMajorService = TestBed.get(ChangeMajorService);
    expect(service).toBeTruthy();
  });
});
