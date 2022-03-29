import { TestBed } from '@angular/core/testing';

import { ModelisationidmService } from './modelisationidm.service';

describe('ModelisationidmService', () => {
  let service: ModelisationidmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelisationidmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
