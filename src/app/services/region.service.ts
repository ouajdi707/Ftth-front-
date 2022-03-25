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
  return this.httpClient.get("http://localhost:8085/Region/retrieve-all-region");
  }
addRegion(data:any){
return this.httpClient.get("http://localhost:8085/Region/Add-region",data);
}
updateRegion(id:number , data:any ){
    return this.httpClient.get("http://localhost:8085/Region/modifyregion/${region-id}",data)
}
removeRegion(id:number){
    return this.httpClient.get("http://localhost:8085/Region/retrieve-all-region/${region-id}")
}

}
