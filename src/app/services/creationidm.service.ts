import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Creationidm} from "../model/Creationidm";

@Injectable({
  providedIn: 'root'
})
export class CreationidmService {

  constructor(public httpClient: HttpClient) {
  }


  getCreationidm() {
    return this.httpClient.get<Creationidm[]>("http://localhost:8085/creationidm/retrieve-all-creationidm");
  }
  addCreationidm(data: any) {
    return this.httpClient.post("http://localhost:8085/creationidm/Add-creationidm", data)
  }
  updateCreationidm(id: number, data: any) {
    return this.httpClient.put("http://localhost:8085/creationidm/modifycreationidm/" + id, data)
  }
  removeCreationidm(id: number) {
    return this.httpClient.delete("http://localhost:8085/creationidm/remove-creationidm/" + id)
  }
}
