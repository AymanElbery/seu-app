import { TestBed } from '@angular/core/testing';

import { AcademicStatusService } from './academic-status.service';

describe('AcademicStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcademicStatusService = TestBed.get(AcademicStatusService);
    expect(service).toBeTruthy();
  });
});
