import { TestBed } from '@angular/core/testing';

import { RegisterWishesService } from './register-wishes.service';

describe('RegisterWishesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterWishesService = TestBed.get(RegisterWishesService);
    expect(service).toBeTruthy();
  });
});
