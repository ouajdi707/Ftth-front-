import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Creationidm} from "../model/Creationidm";
import {Observable} from "rxjs";
import {Stat} from "../model/Stat";

@Injectable({
  providedIn: 'root'
})
export class CreationidmService {

  constructor(public httpClient: HttpClient) {
  }


  getCreationidm() {
    return this.httpClient.get<Creationidm[]>("http://localhost:8084/creationidm/retrieve-all-creationidm");
  }
  addCreationidm(data: any,username:number) {
    return this.httpClient.post("http://localhost:8084/creationidm/Add-creationidm/"+username, data)
  }
  updateCreationidm(id: number, data: any) {
    return this.httpClient.put("http://localhost:8084/creationidm/modifycreationidm/" + id, data)
  }
  removeCreationidm(id: number) {
    return this.httpClient.delete("http://localhost:8084/creationidm/remove-creationidm/" + id)
  }
  getStat() :Observable<Stat[]>{
    return this.httpClient.get<Stat[]>("http://localhost:8084/creationidm/creationidmstat");
  }
  getStattotal() :Observable<Stat[]>{
    return this.httpClient.get<Stat[]>("http://localhost:8084/creationidm/stattotal");
  }
}
