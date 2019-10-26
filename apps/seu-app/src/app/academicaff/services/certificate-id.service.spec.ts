import { TestBed } from '@angular/core/testing';

import { CertificateIDService } from './certificate-id.service';

describe('CertificateIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CertificateIDService = TestBed.get(CertificateIDService);
    expect(service).toBeTruthy();
  });
});
