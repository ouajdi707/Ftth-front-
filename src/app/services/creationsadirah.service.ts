import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Creationidm} from "../model/Creationidm";
import {Creationsadirah} from "../model/Creationsadirah";
import {Observable} from "rxjs";
import {Stat} from "../model/Stat";

@Injectable({
  providedIn: 'root'
})
export class CreationsadirahService {

  constructor(public httpCLient:HttpClient) { }
  getCreationsadirah() {
    return this.httpCLient.get<Creationsadirah[]>("http://localhost:8084/creationsadirah/retrieve-all-creationsadirah");
  }

  addCreationsadirah(data: any,usernamme:number) {
    return this.httpCLient.post("http://localhost:8084/creationsadirah/Add-creationsadirah/"+usernamme, data)
  }

  updateCreationsadirah(id: number, data: any) {
    return this.httpCLient.put("http://localhost:8084/creationsadirah/modifycreationsadirah/" + id, data)
  }

  removeCreationsadirah(id: number) {
    return this.httpCLient.delete("http://localhost:8084/creationsadirah/remove-creationsadirah/" + id)
  }
  getStat() :Observable<Stat[]>{
    return this.httpCLient.get<Stat[]>("http://localhost:8084/creationsadirah/creationsadirahStat");
  }

}
