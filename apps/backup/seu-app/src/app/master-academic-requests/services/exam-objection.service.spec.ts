import { TestBed } from '@angular/core/testing';

import { ExamObjectionService } from './exam-objection.service';

describe('ExamObjectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamObjectionService = TestBed.get(ExamObjectionService);
    expect(service).toBeTruthy();
  });
});
