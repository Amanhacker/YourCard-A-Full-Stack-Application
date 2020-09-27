import { TestBed } from '@angular/core/testing';

import { ContactusService } from './contactus.service';

describe('ContactusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactusService = TestBed.get(ContactusService);
    expect(service).toBeTruthy();
  });
});
