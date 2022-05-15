import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Region} from "../model/Region";

@Injectable({
  providedIn: 'root'
})
export class RegionService {


  constructor( public httpClient:HttpClient ) { }
getAll():Observable<any>{
  return this.httpClient.get("http://localhost:8084/Region/retrieve-all-region");
  }
addRegion(data:any){
return this.httpClient.post("http://localhost:8084/Region/Add-region",data);
}
updateRegion(id:number , data:any ){
    return this.httpClient.put("http://localhost:8084/Region/modifyregion/"+id,data)
}
removeRegion(id:number){
    return this.httpClient.delete("http://localhost:8084/Region/remove-region"+id)
}

}
