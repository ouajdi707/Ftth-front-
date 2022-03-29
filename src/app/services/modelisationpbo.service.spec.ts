import { TestBed } from '@angular/core/testing';

import { ModelisationpboService } from './modelisationpbo.service';

describe('ModelisationpboService', () => {
  let service: ModelisationpboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelisationpboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
