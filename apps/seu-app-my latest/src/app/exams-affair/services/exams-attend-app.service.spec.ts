import { TestBed } from '@angular/core/testing';

import { ExamsAttendAppService } from './exams-attend-app.service';

describe('ExamsAttendAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamsAttendAppService = TestBed.get(ExamsAttendAppService);
    expect(service).toBeTruthy();
  });
});
