import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/User";
import {TokenStorageService} from "./token-storage.service";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8084/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private jwtToken:any='';


  constructor(public httpClient:HttpClient ,private tokenStorage:TokenStorageService) {
    this.jwtToken = this.tokenStorage.getToken();

  }

  getUser() {
    return this.httpClient.get<User[]>("http://localhost:8084/user/retrieve-all-user");
    headers: new HttpHeaders({Authorization: "Bearer "+this.jwtToken})

  }
  /*  addUser (data: any) {
      return this.httpClient.post("http://localhost:8084/user/Add-user", data)
      headers: new HttpHeaders({Authorization: "Bearer "+this.jwtToken})
    }*/

  addUser(user: object): Observable<Object>{
    return this.httpClient.post("http://localhost:8084/user/Add-user", user)
    headers: new HttpHeaders({Authorization: "Bearer "+this.jwtToken})
  }

  updateUser(id: number, data: any) {
    return this.httpClient.put("http://localhost:8084/user/modifyuser/" + id, data)
    headers: new HttpHeaders({Authorization: "Bearer "+this.jwtToken})

  }
  removeuser(id: number) {
    return this.httpClient.delete("http://localhost:8084/user/remove-user/" + id)
    headers: new HttpHeaders({Authorization: "Bearer "+this.jwtToken})

  }
}
