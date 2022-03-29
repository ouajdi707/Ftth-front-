import { TestBed } from '@angular/core/testing';

import { RaccoService } from './racco.service';

describe('RaccoService', () => {
  let service: RaccoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaccoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
