import { TestBed } from '@angular/core/testing';

import { ChangeBranchService } from './change-branch.service';

describe('ChangeBranchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeBranchService = TestBed.get(ChangeBranchService);
    expect(service).toBeTruthy();
  });
});
