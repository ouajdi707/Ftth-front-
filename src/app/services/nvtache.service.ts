import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gc} from "../model/gc";
import {Nvtache} from "../model/Nvtache";

@Injectable({
  providedIn: 'root'
})
export class NvtacheService {

  constructor(private httpClient:HttpClient) { }
  Get_Nvtache(){
    return this.httpClient.get<Nvtache[]>("http://localhost:8084/tache/retrieve-all-tache");
  }
  addTache(data:any){
    return this.httpClient.post("http://localhost:8084/tache/Add-Tache",data)
  }
  updateTache(id:number , data:any ){
    return this.httpClient.put("http://localhost:8084/tache/modifytache/"+id,data)
  }
  removeTache(id:number ) {
    return this.httpClient.delete("http://localhost:8084/tache/remove-tache/"+id)
  }
}
