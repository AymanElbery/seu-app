import { TestBed } from '@angular/core/testing';

import { CourseEqualizerService } from './course-equalizer.service';

describe('CourseEqualizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseEqualizerService = TestBed.get(CourseEqualizerService);
    expect(service).toBeTruthy();
  });
});
