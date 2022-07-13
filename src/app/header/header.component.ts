import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {User} from "../model/User";
import {UserService} from "../services/user.service";
import {NvtacheService} from "../services/nvtache.service";
import {Tache} from "../model/Tache";
import {Racco} from "../model/Racco";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  taches: Tache[]
  tache = new Tache();
  NewDialog: any;
  private productDialog: boolean;

  constructor(private tokenStorage: TokenStorageService, private nvTacheService: NvtacheService, private toast: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.getTaches()
  }

  isAdmin() {
    return this.tokenStorage.getUser().roles == 'ROLE_ADMIN';
  }

  getTaches() {
    this.nvTacheService.Get_taches().subscribe(data => this.taches = data)
  }


  openNew() {
    this.tache = new Tache();
    this.NewDialog = true;

  }

  save(tache: Tache) {

    this.nvTacheService.addnvtache(tache).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    })
  }
}
