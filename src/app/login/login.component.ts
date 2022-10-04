import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService , private router:Router ,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        if (this.tokenStorage.getUser().roles == 'ROLE_ADMIN'){
          this.router.navigate(['/dashboard']).then(() => { window.location.reload();
          })}
        else {
          this.router.navigate(['/gc']).then(() => { window.location.reload(); })
        }

        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    this.spinner.show(undefined,{type:'ball-clip-rotate-multiple'});
    setTimeout(()=> {
      this.spinner.hide();
    },8000);
  }

  reloadPage(): void {
    window.location.reload();
  }


}
