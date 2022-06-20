import { TestBed } from '@angular/core/testing';

import { NvtacheService } from './nvtache.service';

describe('NvtacheService', () => {
  let service: NvtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NvtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
