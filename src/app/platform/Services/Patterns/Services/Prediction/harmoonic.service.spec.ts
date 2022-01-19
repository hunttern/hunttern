import { TestBed } from '@angular/core/testing';

import { HarmoonicService } from './harmoonic.service';

describe('HarmoonicService', () => {
  let service: HarmoonicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarmoonicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
