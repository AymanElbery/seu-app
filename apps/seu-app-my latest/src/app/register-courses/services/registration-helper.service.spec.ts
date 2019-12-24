import { TestBed } from '@angular/core/testing';

import { RegistrationHelperService } from './registration-helper.service';

describe('RegistrationHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationHelperService = TestBed.get(RegistrationHelperService);
    expect(service).toBeTruthy();
  });
});
