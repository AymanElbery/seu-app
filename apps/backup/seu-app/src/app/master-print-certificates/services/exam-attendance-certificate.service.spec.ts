import { TestBed } from '@angular/core/testing';

import { ExamAttendanceCertificateService } from './exam-attendance-certificate.service';

describe('ExamAttendanceCertificateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamAttendanceCertificateService = TestBed.get(ExamAttendanceCertificateService);
    expect(service).toBeTruthy();
  });
});
