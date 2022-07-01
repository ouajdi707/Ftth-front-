import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor( public httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get("http://localhost:8084/Projet/retrieve-all-projet");
  }
  addProjet(data:any){
    return this.httpClient.post("http://localhost:8084/Projet/Add-Projet",data);
  }
  updateProjet(id:number , data:any ){
    return this.httpClient.put("http://localhost:8084/Projet/modifyprojet/"+id,data)
  }
  removeProjet(id:number){
    return this.httpClient.delete("http://localhost:8084/Projet/remove-projet"+id)
  }
}
