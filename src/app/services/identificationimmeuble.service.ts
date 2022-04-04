import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Creationidm} from "../model/Creationidm";
import {Identificationimmeuble} from "../model/Identificationimmeuble";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IdentificationimmeubleService {

  constructor(public httpClient:HttpClient) { }
  getIdentificationimmeuble()  {
    return this.httpClient.get<Identificationimmeuble[]>("http://localhost:8085/Identificationimmeuble/retrieve-all-identificationimmeuble");
  }
  addIdentificationimmeuble(data: any):Observable<Identificationimmeuble> {
    return this.httpClient.post<Identificationimmeuble>("http://localhost:8085/Identificationimmeuble/Add-identificationimmeuble", data)
  }

  updateIdentificationimmeuble(id: number, data: any) {
    return this.httpClient.put("http://localhost:8085/Identificationimmeuble/modifyidentificationimmeuble/" + id, data)
  }

  removeIdentificationimmeuble(id: number) {
    return this.httpClient.delete("http://localhost:8085/Identificationimmeuble/remove-identificationimmeuble/" + id)
  }

}
