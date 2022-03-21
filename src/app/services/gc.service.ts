import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";


export interface Gc {
  id:bigint;
  demandeur:string;
  adressegc:string;
  nbrpoteaux:bigint;
  reel:bigint;
  action:string;
  charge:string;
  datereception:any;
  etat:string;
  commentaire:string;

}

@Injectable({
  providedIn: 'root'
})
export class GcService {


  constructor(public httpClient:HttpClient) { }
  Get_Gc(){
    return this.httpClient.get<Gc[]>("http://localhost:8085/Gc/retrieve-all-gc");
  }
  Add_Gc(data:any){
    return this.httpClient.post("http://localhost:8085/Gc/Add-gc",data)
  }
  update_Gc(id:number , data:any ){
    return this.httpClient.put("http://localhost:8085/Gc/modifygc/${gc-id}",data)
  }
  Remove_Gc(id:number , data:any) {
    return this.httpClient.delete("http://localhost:8085/Gc/remove-gc/${gc-id}")
  }

}
