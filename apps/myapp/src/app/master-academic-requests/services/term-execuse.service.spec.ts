import { TestBed } from '@angular/core/testing';

import { TermExecuseService } from './term-execuse.service';

describe('TermExecuseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TermExecuseService = TestBed.get(TermExecuseService);
    expect(service).toBeTruthy();
  });
});
