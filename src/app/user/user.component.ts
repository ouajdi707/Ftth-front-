import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {UserService} from "../services/user.service";
import {Creationidm} from "../model/Creationidm";
import {User} from "../model/User";
import Swal from "sweetalert2";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User[];
  users=new User()
  productDialog: boolean;
  NewDialog:boolean;
  userDialog:boolean;

    username= new FormControl(null, [Validators.required])
    email=new FormControl(null, [Validators.required])
    password= new FormControl(null, [Validators.required, Validators.minLength(8)])

  constructor(private toast: ToastrService,private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.userService.getUser().subscribe(
      data => {
        console.table(data)
        this.user = data
      },
      error => {
        console.log(error)
      })
  }

  Ondeleteuser(id:number) {
    Swal.fire({
      title: 'Etes-vous sur?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {

      //let confirm = window.confirm('do you want to delete this GC')
      if (result.value) {
        this.userService.removeuser(id).subscribe(data => {
            console.table(data)

            this.ngOnInit()

            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            //this.toast.success('gc supprimé avec succés ');
          },
          error => {

            console.log(error)
          })
      }
    })

  }

  openDialog(user: User) {
    this.users=user
    this.productDialog = true;

  }

  edituser(user: any) {
    this.userService.updateUser(user.id, user).subscribe(data => {

        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))

  }

  Onadd(users: User) {
    this.userService.addUser(users).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )

  }

  openNew() {
    this.users =new User();
    this.NewDialog = true;
  }

  onSubmit() {

  }

  geterrorPassword() {
      if(this.password.hasError('required')){
        return 'not valid'

      }
      console.log('password')
      return this.password.hasError('minlength')?'not valid': 'valid'
  }

  dialogopen(user: User) {
    this.users=user
    this.userDialog = true;

  }
}
