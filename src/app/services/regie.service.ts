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
    return this.httpClient.get<Regie[]>("http://localhost:8084/Regie/retrieve-all-regie");
  }
  addregie(data: any,username:number) {
    return this.httpClient.post("http://localhost:8084/Regie/Add-regie/"+username, data)
  }
  updateregie(id: number, data: any) {
    return this.httpClient.put("http://localhost:8084/Regie/modifyregie/" + id, data)
  }
  removeregie(id: number) {
    return this.httpClient.delete("http://localhost:8084/Regie/remove-regie/" + id)
  }
}
