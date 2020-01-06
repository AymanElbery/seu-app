import { TestBed } from '@angular/core/testing';

import { ExamAttendanceService } from './exam-attendance.service';

describe('ExamAttendanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamAttendanceService = TestBed.get(ExamAttendanceService);
    expect(service).toBeTruthy();
  });
});
