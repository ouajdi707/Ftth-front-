import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Trame} from "../model/trame";
import {Vtl} from "../model/Vtl";

@Injectable({
  providedIn: 'root'
})
export class VtlService {

  constructor(public  httpClient:HttpClient) { }
  getVtl() {
    return this.httpClient.get<Vtl[]>("http://localhost:8084/Vtl/retrieve-all-vtl");
  }
  addVtl (data: any) {
    return this.httpClient.post("http://localhost:8084/Vtl/Add-vtl", data)
  }
  updateVtl(id: number, data: any) {
    return this.httpClient.put("http://localhost:8084/Vtl/modifyvtl/" + id, data)
  }
  removevtl(id: number) {
    return this.httpClient.delete("http://localhost:8084/Vtl/remove-vtl/" + id)
  }
}
