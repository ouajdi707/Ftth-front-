import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Regie} from "../model/Regie";
import {Trame} from "../model/trame";
import {Observable} from "rxjs";
import {Stat} from "../model/Stat";

@Injectable({
  providedIn: 'root'
})
export class TrameService {
  constructor(public httpCLient:HttpClient) { }
  gettrame() {
    return this.httpCLient.get<Trame[]>("http://localhost:8084/Trame/retrieve-all-trame");
  }
  addtrame(data: any,username:number) {
    return this.httpCLient.post("http://localhost:8084/Trame/Add-trame/"+username, data)
  }
  updatetrame(id: number, data: any) {
    return this.httpCLient.put("http://localhost:8084/Trame/modifytrame/" + id, data)
  }
  removetrame(id: number) {
    return this.httpCLient.delete("http://localhost:8084/Trame/remove-trame/" + id)
  }
  getStat() :Observable<Stat[]>{
    return this.httpCLient.get<Stat[]>("http://localhost:8084/Trame/stattrame");
  }
}
