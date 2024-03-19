import { TestBed } from '@angular/core/testing';

import { PasatiemposServicesService } from './pasatiempos-services.service';

describe('PasatiemposServicesService', () => {
  let service: PasatiemposServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasatiemposServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
