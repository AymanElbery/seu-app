import { TestBed } from '@angular/core/testing';

import { ExamAttendanceCertificateAppService } from './exam-attendance-certificate-app.service';

describe('ExamAttendanceCertificateAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamAttendanceCertificateAppService = TestBed.get(ExamAttendanceCertificateAppService);
    expect(service).toBeTruthy();
  });
});
