import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Modelisationpbo} from "../model/modelisationpbo";
import {Racco} from "../model/Racco";

@Injectable({
  providedIn: 'root'
})
export class RaccoService {

  constructor(public httpClient:HttpClient) { }
  getracco() {
    return this.httpClient.get<Racco[]>("http://localhost:8084/Racco/retrieve-all-racco");
  }
  addracco(data: any,username:number) {
    return this.httpClient.post("http://localhost:8084/Racco/Add-racco/"+username, data)
  }
  updateracco(id: number, data: any) {
    return this.httpClient.put("http://localhost:8084/Racco/modifyracco/" + id, data)
  }
  removeracco(id: number) {
    return this.httpClient.delete("http://localhost:8084/Racco/remove-racco/" + id)
  }
}
