import { Component, OnInit } from '@angular/core';
import {FscService} from "../../../services/fsc.service";
import {Route, Router} from "@angular/router";
import {Region} from "../../../model/Region";
import {Fsc} from "../../../model/Fsc";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../../services/region.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";

@Component({
  selector: 'app-fscdisplay',
  templateUrl: './fscdisplay.component.html',
  styleUrls: ['./fscdisplay.component.css']
})
export class FscdisplayComponent implements OnInit {

  constructor(private fscService:FscService ,router:Router ,private toast: ToastrService, private regionService: RegionService) { }
  regions:Region[]
  region =new Region();
  fsc : Fsc[];
  productDialog: boolean;
  fscs=new Fsc()
  NewDialog:boolean;
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  ngOnInit(): void {
    this.OngetFsc()
    this.getAllRegion();



  }
  OngetFsc(){
    this.fscService.Get_Fsc().subscribe(data=>{
      console.table(data)
      this.fsc=data
    },
    error => {
      console.log(error)
    })
}


  openNew() {
    this.fscs =new Fsc();
    this.NewDialog = true;
  }

  save(fscs: Fsc) {
    fscs.region = this.region
    this.fscService.Add_Fsc(fscs).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )

  }
  fileName = 'ExcelSheet.xlsx';
  Onexportexcel() {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);



  }

  openDialog(fsc:Fsc) {
    this.fscs= fsc;
    this.productDialog = true;

  }

  Ondeletefsc(id:number) {
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
        this.fscService.Remove_Fsc(id).subscribe(data => {
            console.table(data)

            this.ngOnInit()

            this.toast.success('fsc supprimé avec succés ');

          },
          error => {

            console.log(error)
          })

      }
    })
  }



  editfsc(fsc:any) {
    this.fscService.update_Fsc(fsc.id, fsc).subscribe(data => {

        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))
  }



  getAllRegion(){
    this.regionService.getAll().subscribe(data=>this.regions=data);
  }
}
