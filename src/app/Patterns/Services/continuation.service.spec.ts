import { TestBed } from '@angular/core/testing';

import { ContinuationService } from './continuation.service';

describe('ContinuationService', () => {
  let service: ContinuationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContinuationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
