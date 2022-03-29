import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Trame} from "../model/trame";

@Injectable({
  providedIn: 'root'
})
export class VtlService {

  constructor(public  httpClient:HttpClient) { }
  getVtl() {
    return this.httpClient.get<Trame>("http://localhost:8085/Trame/retrieve-all-trame");
  }
  addVtl (data: any) {
    return this.httpClient.post("http://localhost:8085/Trame/Add-trame", data)
  }
  updateVtl(id: number, data: any) {
    return this.httpClient.put("http://localhost:8085/Trame/modifytrame/" + id, data)
  }
  removevtl(id: number) {
    return this.httpClient.delete("http://localhost:8085/Trame/remove-trame/" + id)
  }
}
