import { TestBed } from '@angular/core/testing';

import { GraduateProfileService } from './graduate-profile.service';

describe('GraduateProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraduateProfileService = TestBed.get(GraduateProfileService);
    expect(service).toBeTruthy();
  });
});
