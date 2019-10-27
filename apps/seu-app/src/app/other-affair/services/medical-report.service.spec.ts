import { TestBed } from '@angular/core/testing';

import { MedicalReportService } from './medical-report.service';

describe('MedicalReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalReportService = TestBed.get(MedicalReportService);
    expect(service).toBeTruthy();
  });
});
