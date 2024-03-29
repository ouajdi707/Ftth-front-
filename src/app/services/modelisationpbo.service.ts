import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Modelisationpbo} from "../model/modelisationpbo";
import {Observable} from "rxjs";
import {Stat} from "../model/Stat";

@Injectable({
  providedIn: 'root'
})
export class ModelisationpboService {

  constructor(public httpClient:HttpClient) { }
  getModelisationpbo() {
    return this.httpClient.get<Modelisationpbo[]>("http://localhost:8084/Modelisationpbo/retrieve-all-modelisationpbo");
  }
  addModelisationpbo(data: any,username:number) {
    return this.httpClient.post("http://localhost:8084/Modelisationpbo/Add-modelisationpbo/"+username, data)
  }
  updateModelisationpbo(id: number, data: any) {
    return this.httpClient.put("http://localhost:8084/Modelisationpbo/modifymodelisationpbo/" + id, data)
  }
  removeModelisationpbo(id: number) {
    return this.httpClient.delete("http://localhost:8084/Modelisationpbo/remove-modelisationpbo/" + id)
  }
  getStat() :Observable<Stat[]>{
    return this.httpClient.get<Stat[]>("http://localhost:8084/Modelisationpbo/modelisationpbostat");
  }

}
