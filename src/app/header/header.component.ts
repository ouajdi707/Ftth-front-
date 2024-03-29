import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {User} from "../model/User";
import {UserService} from "../services/user.service";
import {NvtacheService} from "../services/nvtache.service";
import {Tache} from "../model/Tache";
import {Racco} from "../model/Racco";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import $ from 'jquery';
import {AuthService} from "../services/auth.service";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('updatePwdModal', {static: true}) updatePwdModal: ElementRef;
  isAuth: boolean = false;
  user: any;
  taches: Tache[]
  tache = new Tache();
  NewDialog: any;
  private productDialog: boolean;
  isLoggedIn = false;
  public config: PerfectScrollbarConfigInterface = {};
  items= new FormArray([]);
  addForm: FormGroup;

  constructor(private fb:FormBuilder,private tokenStorage: TokenStorageService, private nvTacheService: NvtacheService, private toast: ToastrService,
              private router: Router, private auths: AuthService) {
  }

  ngOnInit(): void {
    var s = document.createElement("script");
    var s2 = document.createElement("script");
    $('head').append(s);
    $('head').append(s2);
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.isAuth = true;
      this.user = this.tokenStorage.getUser();
    } else {
      this.isAuth = false;
    }
    this.user = this.tokenStorage.getUser();
    this.getTaches()
    this.addForm = new FormGroup({
      items: new FormArray([])
    });
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
    tache.columnsSuplimentaires=""
    for(let item of this.items.controls){
      tache.columnsSuplimentaires= tache.columnsSuplimentaires+","+item.get('value')?.value
    }
  tache.columnsSuplimentaires= tache.columnsSuplimentaires.substring(1,this.tache.columnsSuplimentaires.length)
    console.log( tache.columnsSuplimentaires)
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

  loadscripts() {
    //To initialise:
    var s = document.createElement("script");
    var s2 = document.createElement("script");
    var s3 = document.createElement("script");
    var s4 = document.createElement("script");
    var s5 = document.createElement("script");
    var s6 = document.createElement("script");
    var s7 = document.createElement("script");
    var s8 = document.createElement("script");
    var s9 = document.createElement("script");
    var s10 = document.createElement("script");
    var s11 = document.createElement("script");
    var s12 = document.createElement("script");
    var s13 = document.createElement("script");
    var s14 = document.createElement("script");
    var s15 = document.createElement("script");
    var s16 = document.createElement("script");
    var s17 = document.createElement("script");
    var s18 = document.createElement("script");
    var s19 = document.createElement("script");
    var s20 = document.createElement("script");
    var s21 = document.createElement("script");
    var s22 = document.createElement("script");
    var s23 = document.createElement("script");
    var s24 = document.createElement("script");
    var s25 = document.createElement("script");
    var s26 = document.createElement("script");
    var s28 = document.createElement("script");
    var s29 = document.createElement("script");
    s.src = "/assets/js/core/jquery.min.js";
    s2.src = "/assets/js/core/popper.min.js";
    s3.src = "/assets/js/core/bootstrap.min.js";
    s5.src = "/assets/js/plugins/moment.min.js";
    s6.src = "/assets/js/plugins/bootstrap-switch.js";
    s7.src = "/assets/js/plugins/sweetalert2.min.js";
    s8.src = "/assets/js/plugins/jquery.validate.min.js";
    s9.src = "/assets/js/plugins/jquery.bootstrap-wizard.js";
    s10.src = "/assets/js/plugins/bootstrap-selectpicker.js";
    s11.src = "/assets/js/plugins/bootstrap-datetimepicker.js";
    s12.src = "/assets/js/plugins/jquery.dataTables.min.js";
    s13.src = "/assets/js/plugins/bootstrap-tagsinput.js";
    s14.src = "/assets/js/plugins/jasny-bootstrap.min.js";
    s15.src = "/assets/js/plugins/fullcalendar/fullcalendar.min.js";
    s16.src = "/assets/js/plugins/fullcalendar/daygrid.min.js";
    s17.src = "/assets/js/plugins/fullcalendar/timegrid.min.js";
    s18.src = "/assets/js/plugins/fullcalendar/interaction.min.js";
    s19.src = "/assets/js/plugins/jquery-jvectormap.js";
    s20.src = "/assets/js/plugins/nouislider.min.js";
    s21.src = "/assets/js/plugins/chartjs.min.js";
    s22.src = "/assets/js/plugins/bootstrap-notify.js";
    s23.src = "/assets/js/paper-dashboard.min1036.js?v=2.1.1";
    s24.src = "/assets/demo/demo.js";
    s25.src = "/assets/demo/jquery.sharrre.js";
  }
  navigate(id:string){
    this.router.navigateByUrl("/"+id).then()


  }
  createItem(): FormGroup {
    return this.fb.group({
      value: '',

    });
  }

  addItem(): void {
    this.items = this.addForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  deleteItem(index:number): void {
    this.items.removeAt(index);
    this.items.markAsDirty();
}

}
