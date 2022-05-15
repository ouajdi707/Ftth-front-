import { TestBed } from '@angular/core/testing';

import { CreationidmService } from './creationidm.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('CreationidmService', () => {
  let service: CreationidmService;
     let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
      CreationidmService
      ]});
    service = TestBed.get(CreationidmService);
    httpTestingController=TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
