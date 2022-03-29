import { TestBed } from '@angular/core/testing';

import { TrameService } from './trame.service';

describe('TrameService', () => {
  let service: TrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
