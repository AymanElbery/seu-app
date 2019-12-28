import { TestBed } from '@angular/core/testing';

import { GraduatesStateService } from './graduates-state.service';

describe('GraduatesStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraduatesStateService = TestBed.get(GraduatesStateService);
    expect(service).toBeTruthy();
  });
});
