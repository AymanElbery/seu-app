import { TestBed } from '@angular/core/testing';

import { LectureAbsQueryService } from './lecture-abs-query.service';

describe('LectureAbsQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LectureAbsQueryService = TestBed.get(LectureAbsQueryService);
    expect(service).toBeTruthy();
  });
});
