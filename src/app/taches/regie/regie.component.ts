import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/Region";
import {Regie} from "../../model/Regie";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {RegieService} from "../../services/regie.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";

@Component({
  selector: 'app-regie',
  templateUrl: './regie.component.html',
  styleUrls: ['./regie.component.css']
})
export class RegieComponent implements OnInit {
  regions: Region[]
  region = new Region();
  regie:Regie[];
  productDialog: boolean;
  submitted: boolean;
  regies = new Regie()
  NewDialog: boolean;
  fileName = 'ExcelSheet.xlsx';
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  constructor(private toast: ToastrService, private regionService: RegionService, private regieService:RegieService) { }

  ngOnInit(): void {
    this.getAllRegie()
    this.getAllRegion()
  }
getAllRegie(){
  this.regieService.getregie().subscribe(data=>{
      console.table(data)
      this.regie=data;
    },
    error => {
      console.log(error)
    })
}
  getAllRegion() {
    this.regionService.getAll().subscribe(data => this.regions = data);
  }

  openDialog(regie: Regie) {
    this.regies=regie
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
        this.regieService.removeregie(id).subscribe(data => {
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

  edit(regie:any) {
    this.regieService.updateregie(regie.id, regie).subscribe(data => {

        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))


  }

  Onexportexcel() { /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  save(regies: Regie) {
    regies.region=this.region
    this.regieService.addregie(regies).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )

  }

  openNew() {
    this.regies =new Regie();
    this.NewDialog = true;

  }
}
