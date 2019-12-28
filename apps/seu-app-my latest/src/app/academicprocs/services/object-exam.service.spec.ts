import { TestBed } from '@angular/core/testing';

import { ObjectExamService } from './object-exam.service';

describe('ObjectExamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjectExamService = TestBed.get(ObjectExamService);
    expect(service).toBeTruthy();
  });
});
