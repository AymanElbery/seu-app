import { TestBed } from '@angular/core/testing';

import { TuitionFeesService } from './tuition-fees.service';

describe('TuitionFeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TuitionFeesService = TestBed.get(TuitionFeesService);
    expect(service).toBeTruthy();
  });
});
