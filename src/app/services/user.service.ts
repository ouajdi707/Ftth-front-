import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient:HttpClient) { }
  getUser() {
    return this.httpClient.get<User[]>("http://localhost:8084/user/retrieve-all-user");
  }
  addUser (data: any) {
    return this.httpClient.post("http://localhost:8084/user/Add-user", data)
  }
  updateUser(id: number, data: any) {
    return this.httpClient.put("http://localhost:8084/user/modifyuser/" + id, data)
  }
  removeuser(id: number) {
    return this.httpClient.delete("http://localhost:8084/user/remove-user/" + id)
  }
}
