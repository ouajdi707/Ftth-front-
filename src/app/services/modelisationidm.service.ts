import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Identificationimmeuble} from "../model/Identificationimmeuble";
import {Modelisatioidm} from "../model/Modelisatioidm";

@Injectable({
  providedIn: 'root'
})
export class ModelisationidmService {
  constructor(public httpClient:HttpClient) { }
  getModelisationidm() {
    return this.httpClient.get<Modelisatioidm[]>("http://localhost:8084/Modelisationidm/retrieve-all-modelisationidm");
  }
  addModelisationidm(data: any) {
    return this.httpClient.post("http://localhost:8084/Modelisationidm/Add-modelisationidm", data)
  }
  updateModelisationidm(id: number, data: any) {
    return this.httpClient.put("http://localhost:8084/Modelisationidm/modifymodelisationidm/" + id, data)
  }
  removeModelisationidm(id: number) {
    return this.httpClient.delete("http://localhost:8084/Modelisationidm/remove-modelisationidm/" + id)
  }
}
