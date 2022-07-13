import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gc} from "../model/gc";
import {Nvtache} from "../model/Nvtache";
import {Tache} from "../model/Tache";

@Injectable({
  providedIn: 'root'
})
export class NvtacheService {

  constructor(private httpClient:HttpClient) { }
  Get_Nvtache(){
    return this.httpClient.get<Nvtache[]>("http://localhost:8084/tache/retrieve-all-tache");
  }
  Get_taches(){
    return this.httpClient.get<Tache[]>("http://localhost:8084/tache/retrieve-all-taches");
  }

  Get_tache_data(nom: string | null){
    return this.httpClient.get<Nvtache[]>("http://localhost:8084/tache/retrieve-by-name/"+nom);
  }
  addTache(nomTache:string ,data:any){
    return this.httpClient.post("http://localhost:8084/tache/Add-Tache/"+nomTache,data)
  }
  updateTache(id:number , data:any ){
    return this.httpClient.put("http://localhost:8084/tache/modifytache/"+id,data)
  }
  removeTache(id:number ) {
    return this.httpClient.delete("http://localhost:8084/tache/remove-tache/"+id)
  }
  addnvtache(data:any) {
    return this.httpClient.post("http://localhost:8084/Add-newtache",data)
  }
}
