import { Component, OnInit } from '@angular/core';
import {RegionService} from "../services/region.service";
import {Region} from "../model/Region";
import {ToastrService} from "ngx-toastr";
import {Gc} from "../model/gc";
import Swal from "sweetalert2";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  region:Region[];
  regions =new Region();
  productDialog: boolean;
  NewDialog =false ;
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
  constructor( private regionService:RegionService ,private toast: ToastrService) { }

  ngOnInit(): void {
    this.getallregions()

  }

getallregions(){
  this.regionService.getAll().subscribe(data=>{
      console.table(data)
      this.region=data;
    },

    error =>{
      console.log(error)
    })

}
  openNew() {
    this.regions =new Region();
    this.NewDialog = true;
  }
  save(regions: Region) {
    this.regionService.addRegion(regions).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )
  }
  openDialog(region:Region) {
    this.regions = region;
    this.productDialog = true;
  }


  Ondeletegc(id:number) {
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
        this.regionService.removeRegion(id).subscribe(data => {
            console.table(data)

            this.ngOnInit()

            this.toast.success('gc supprimé avec succés ');

          },
          error => {

            console.log(error)
          })

      }



    })
  }


  editregion(region: any) {
    this.regionService.updateRegion(region.id, region).subscribe(data => {
        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))

  }
}
