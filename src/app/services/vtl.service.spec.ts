import { TestBed } from '@angular/core/testing';

import { VtlService } from './vtl.service';

describe('VtlService', () => {
  let service: VtlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VtlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
