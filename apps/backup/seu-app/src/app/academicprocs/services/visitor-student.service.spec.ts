import { TestBed } from '@angular/core/testing';

import { VisitorStudentService } from './visitor-student.service';

describe('VisitorStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitorStudentService = TestBed.get(VisitorStudentService);
    expect(service).toBeTruthy();
  });
});
