import { TestBed } from '@angular/core/testing';

import { LecturesExecusesService } from './lectures-execuses.service';

describe('LecturesExecusesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LecturesExecusesService = TestBed.get(LecturesExecusesService);
    expect(service).toBeTruthy();
  });
});
