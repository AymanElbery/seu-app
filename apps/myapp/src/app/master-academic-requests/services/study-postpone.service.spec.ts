import { TestBed } from '@angular/core/testing';

import { StudyPostponeService } from './study-postpone.service';

describe('StudyPostponeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudyPostponeService = TestBed.get(StudyPostponeService);
    expect(service).toBeTruthy();
  });
});
