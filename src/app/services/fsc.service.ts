import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stat} from "../model/Stat";

@Injectable({
  providedIn: 'root'
})
export class FscService {


  constructor(public httpClient:HttpClient) { }
  Get_Fsc():Observable<any>{
    return this.httpClient.get("http://localhost:8084/fsc/retrieve-all-fsc");
  }
  Add_Fsc(data:any,username:number){
    return this.httpClient.post("http://localhost:8084/fsc/Add-fsc/"+username,data)
  }
  update_Fsc(id:number , data:any ){
    return this.httpClient.put("http://localhost:8084/fsc/modifyfsc/"+id,data)
  }
  Remove_Fsc(id:number ) {
    return this.httpClient.delete("http://localhost:8084/fsc/remove-fsc/"+id)
  }
  getStat() :Observable<Stat[]>{
    return this.httpClient.get<Stat[]>("http://localhost:8084/fsc/statfsc");
  }
}
