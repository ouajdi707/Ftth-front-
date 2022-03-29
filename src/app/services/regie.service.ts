import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Racco} from "../model/Racco";
import {Regie} from "../model/Regie";

@Injectable({
  providedIn: 'root'
})
export class RegieService {

  constructor(public httpClient:HttpClient) { }
  getregie() {
    return this.httpClient.get<Regie>("http://localhost:8085/Regie/retrieve-all-regie");
  }
  addregie(data: any) {
    return this.httpClient.post("http://localhost:8085/Regie/Add-regie", data)
  }
  updateregie(id: number, data: any) {
    return this.httpClient.put("http://localhost:8085/Regie/modifyregie/" + id, data)
  }
  removeregie(id: number) {
    return this.httpClient.delete("http://localhost:8085/Regie/remove-racco/" + id)
  }
}
