import { TestBed } from '@angular/core/testing';

import { CurrencyConversionService } from './currency-conversion.service';

describe('CurrencyConversionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyConversionService = TestBed.get(CurrencyConversionService);
    expect(service).toBeTruthy();
  });
});
