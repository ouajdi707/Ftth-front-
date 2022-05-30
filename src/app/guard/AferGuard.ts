import {TokenStorageService} from "../services/token-storage.service";

;
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AfterGuard implements CanActivate {

  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {


    if (localStorage.getItem('auth-user')!= null) {

      this.router.navigateByUrl('/dashboard')
    }

    return true;
  }}
