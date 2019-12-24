import { TestBed } from '@angular/core/testing';

import { TermPostponeService } from './term-postpone.service';

describe('TermPostponeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TermPostponeService = TestBed.get(TermPostponeService);
    expect(service).toBeTruthy();
  });
});
