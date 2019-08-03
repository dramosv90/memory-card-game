import { TestBed } from '@angular/core/testing';

import { LocalTranslationService } from './local-translation.service';

describe('LocalTranslationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalTranslationService = TestBed.get(LocalTranslationService);
    expect(service).toBeTruthy();
  });
});
