import { TestBed } from '@angular/core/testing';

import { FscService } from './fsc.service';

describe('FscService', () => {
  let service: FscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
