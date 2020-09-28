import { TestBed } from '@angular/core/testing';

import { UserdetailsService } from './userdetails.service';

describe('UserdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdetailsService = TestBed.get(UserdetailsService);
    expect(service).toBeTruthy();
  });
});
