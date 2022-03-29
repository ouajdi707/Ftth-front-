import { TestBed } from '@angular/core/testing';

import { CreationidmService } from './creationidm.service';

describe('CreationidmService', () => {
  let service: CreationidmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationidmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
