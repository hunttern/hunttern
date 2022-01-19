import { TestBed } from '@angular/core/testing';

import { HarmonicService } from './harmonic.service';

describe('HarmonicService', () => {
  let service: HarmonicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarmonicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
