import { TestBed } from '@angular/core/testing';

import { CreationsadirahService } from './creationsadirah.service';

describe('CreationsadirahService', () => {
  let service: CreationsadirahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationsadirahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
