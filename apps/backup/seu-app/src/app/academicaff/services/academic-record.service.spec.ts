import { TestBed } from '@angular/core/testing';

import { AcademicRecordService } from './academic-record.service';

describe('AcademicRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcademicRecordService = TestBed.get(AcademicRecordService);
    expect(service).toBeTruthy();
  });
});
