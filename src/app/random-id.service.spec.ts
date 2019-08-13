import { TestBed } from '@angular/core/testing';

import { RandomIdService } from './random-id.service';

describe('RandomIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomIdService = TestBed.get(RandomIdService);
    expect(service).toBeTruthy();
  });
});
