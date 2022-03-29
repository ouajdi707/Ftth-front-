import { TestBed } from '@angular/core/testing';

import { IdentificationimmeubleService } from './identificationimmeuble.service';

describe('IdentificationimmeubleService', () => {
  let service: IdentificationimmeubleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificationimmeubleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
