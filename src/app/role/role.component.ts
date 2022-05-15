import { Component, OnInit } from '@angular/core';

import {Role} from "../model/Role";
import {ToastrService} from "ngx-toastr";
import {RolesService} from "../services/roles.service";
import {User} from "../model/User";
import Swal from "sweetalert2";


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  role:Role[];
  roles=new Role()
  productDialog: boolean;
  NewDialog:boolean;
  constructor(private toast: ToastrService,private roleService:RolesService) { }

  ngOnInit(): void {
    this.getRole()
  }
  getRole(){ this.roleService.getRole().subscribe(
    data => {
      console.table(data)
      this.role = data
    },
    error => {
      console.log(error)
    })

}
  openNew() {
    this.roles =new Role();
    this.NewDialog = true;

  }

  Onadd(roles: Role) {
    this.roleService.addRole(roles).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )

  }

  Ondeleterole(id:number) {
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
        this.roleService.removeRole(id).subscribe(data => {
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

  openDialog(role: Role) {
    this.roles=role
    this.productDialog = true;

  }

  editrole(role: any) {
    this.roleService.updateRole(role.id, role).subscribe(data => {

        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))


  }
}
