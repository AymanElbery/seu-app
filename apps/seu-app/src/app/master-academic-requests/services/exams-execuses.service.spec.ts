import { TestBed } from '@angular/core/testing';

import { ExamsExecusesService } from './exams-execuses.service';

describe('ExamsExecusesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamsExecusesService = TestBed.get(ExamsExecusesService);
    expect(service).toBeTruthy();
  });
});
