import { TestBed } from '@angular/core/testing';

import { FallowerService } from './fallower.service';

describe('FallowerService', () => {
  let service: FallowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FallowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
