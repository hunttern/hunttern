import { TestBed } from '@angular/core/testing';

import { ZigzagService } from './zigzag.service';

describe('ZigzagService', () => {
  let service: ZigzagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZigzagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
