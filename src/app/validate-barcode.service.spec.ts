import { TestBed, inject } from '@angular/core/testing';

import { ValidateBarcodeService } from './validate-barcode.service';

describe('ValidateBarcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateBarcodeService]
    });
  });

  it('should be created', inject([ValidateBarcodeService], (service: ValidateBarcodeService) => {
    expect(service).toBeTruthy();
  }));
});
