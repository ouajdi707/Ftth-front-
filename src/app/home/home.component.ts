import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  title = 'ftth-front';


  constructor( private cdr: ChangeDetectorRef , private tokenStorage:TokenStorageService , private router:Router) {
  }




  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
    this.router.navigate(['/login']).then(() => { window.location.reload(); })


  }

  getauth() {
    if(this.tokenStorage.getToken())
      return this.tokenStorage.getToken()
    else return null;
  }
}
