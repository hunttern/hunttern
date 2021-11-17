import { TestBed } from '@angular/core/testing';

import { ReversalService } from './reversal.service';

describe('ReversalService', () => {
  let service: ReversalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReversalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
