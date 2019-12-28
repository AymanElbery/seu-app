import { TestBed } from '@angular/core/testing';

import { LectureExecuseServiceService } from './lecture-execuse-service.service';

describe('LectureExecuseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LectureExecuseServiceService = TestBed.get(LectureExecuseServiceService);
    expect(service).toBeTruthy();
  });
});
