import { TestBed } from '@angular/core/testing';

import { GlobalBaseService } from './global-base.service';

describe('GlobalBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalBaseService = TestBed.get(GlobalBaseService);
    expect(service).toBeTruthy();
  });
});
