import { TestBed } from '@angular/core/testing';

import { EnglishEqualizerService } from './english-equalizer.service';

describe('EnglishEqualizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnglishEqualizerService = TestBed.get(EnglishEqualizerService);
    expect(service).toBeTruthy();
  });
});
