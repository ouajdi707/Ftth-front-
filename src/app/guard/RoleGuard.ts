
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {TokenStorageService} from "../services/token-storage.service";

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.tokenService.getUser().roles == next.data['role']) {
      this.router.navigateByUrl('/dashboard')
      return true;

    }
return true;

  }
}
