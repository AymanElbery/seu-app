import { TestBed } from '@angular/core/testing';

import { MissingUnivCardService } from './missing-univ-card.service';

describe('MissingUnivCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissingUnivCardService = TestBed.get(MissingUnivCardService);
    expect(service).toBeTruthy();
  });
});
