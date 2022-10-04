import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from "./services/token-storage.service";
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  roles: string[] = [];
  isLoggedIn = false;
  constructor(private tokenStorage: TokenStorageService,private authService: AuthService, private router:Router) {
  }
  /*canActivate(){

    this.roles = this.tokenStorage.getUser().roles;
    if ( this.tokenStorage.getUser().roles == 'ROLE_ADMIN' ){
      return true
      }
    else {
      return false
    }
  }
*/
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.roles = this.tokenStorage.getUser().roles;
    if (this.tokenStorage.loggedIn()) {
      if (this.tokenStorage.getUser().roles == 'ROLE_ADMIN') {

        return  true;
      }

      else {
        
        return false;
      }
    }
    return true;

  }



}
