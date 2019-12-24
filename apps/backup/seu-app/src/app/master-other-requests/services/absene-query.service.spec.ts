import { TestBed } from '@angular/core/testing';

import { AbseneQueryService } from './absene-query.service';

describe('AbseneQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbseneQueryService = TestBed.get(AbseneQueryService);
    expect(service).toBeTruthy();
  });
});
