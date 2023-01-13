import { TestBed } from '@angular/core/testing';

import { TerminationService } from './termination.service';

describe('TerminationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminationService = TestBed.get(TerminationService);
    expect(service).toBeTruthy();
  });
});
