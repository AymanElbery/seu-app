import { TestBed } from '@angular/core/testing';

import { CancelCourseService } from './cancel-course.service';

describe('CancelCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancelCourseService = TestBed.get(CancelCourseService);
    expect(service).toBeTruthy();
  });
});
