import { TestBed } from '@angular/core/testing';

import { PersonalIDService } from './personal-id.service';

describe('PersonalIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalIDService = TestBed.get(PersonalIDService);
    expect(service).toBeTruthy();
  });
});
