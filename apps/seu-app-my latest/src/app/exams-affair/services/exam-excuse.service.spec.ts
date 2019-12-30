import { TestBed } from '@angular/core/testing';

import { ExamExcuseService } from './exam-excuse.service';

describe('ExamExcuseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamExcuseService = TestBed.get(ExamExcuseService);
    expect(service).toBeTruthy();
  });
});
