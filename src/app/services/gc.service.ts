import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Gc} from "../model/gc";
import {Observable} from "rxjs";
import {Stat} from "../model/Stat";



@Injectable({
  providedIn: 'root'
})
export class GcService {


  constructor(public httpClient:HttpClient) { }
  Get_Gc(){
    return this.httpClient.get<Gc[]>("http://localhost:8084/Gc/retrieve-all-gc");
  }
  Add_Gc(data:any,username:number){
    return this.httpClient.post("http://localhost:8084/Gc/Add-gc/"+username,data)
  }
  update_Gc(id:number , data:any ){
    return this.httpClient.put("http://localhost:8084/Gc/modifygc/"+id,data)
  }
  Remove_Gc(id:number ) {
    return this.httpClient.delete("http://localhost:8084/Gc/remove-gc/"+id)
  }
  getStat() :Observable<Stat[]>{
    return this.httpClient.get<Stat[]>("http://localhost:8084/Gc/xx");
  }
}
