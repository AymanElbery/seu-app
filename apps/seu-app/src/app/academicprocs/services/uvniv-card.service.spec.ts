import { TestBed } from '@angular/core/testing';

import { UvnivCardService } from './uvniv-card.service';

describe('UvnivCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UvnivCardService = TestBed.get(UvnivCardService);
    expect(service).toBeTruthy();
  });
});
