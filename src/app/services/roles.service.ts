import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vtl} from "../model/Vtl";
import {Role} from "../model/Role";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(public httpClient:HttpClient) { }
  getRole() {
    return this.httpClient.get<Role[]>("http://localhost:8084/role/retrieve-all-role");
  }
  addRole (data: any) {
    return this.httpClient.post("http://localhost:8084/role/Add-role", data)
  }
  updateRole(id: number, data: any) {
    return this.httpClient.put("http://localhost:8084/role/modifyrole/" + id, data)
  }
  removeRole(id: number) {
    return this.httpClient.delete("http://localhost:8084/role/remove-role/" + id)
  }
}
