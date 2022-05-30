import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {User} from "../model/User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;

  constructor(private tokenStorage:TokenStorageService , ) { }

  ngOnInit(): void {
this.user=this.tokenStorage.getUser();
  }

  isAdmin(){
    return  this.tokenStorage.getUser().roles == 'ROLE_ADMIN';
  }




}
