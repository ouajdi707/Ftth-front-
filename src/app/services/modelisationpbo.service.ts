import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Modelisationpbo} from "../model/modelisationpbo";

@Injectable({
  providedIn: 'root'
})
export class ModelisationpboService {

  constructor(public httpClient:HttpClient) { }
  getModelisationpbo() {
    return this.httpClient.get<Modelisationpbo>("http://localhost:8085/Modelisationpbo/retrieve-all-modelisationpbo");
  }
  addModelisationpbo(data: any) {
    return this.httpClient.post("http://localhost:8085/Modelisationpbo/Add-modelisationpbo", data)
  }
  updateModelisationpbo(id: number, data: any) {
    return this.httpClient.put("http://localhost:8085/Modelisationpbo/modifymodelisationpbo/" + id, data)
  }
  removeModelisationpbo(id: number) {
    return this.httpClient.delete("http://localhost:8085/Modelisationpbo/remove-modelisationpbo/" + id)
  }

}
