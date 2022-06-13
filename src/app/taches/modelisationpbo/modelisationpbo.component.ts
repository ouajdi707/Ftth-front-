import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/Region";
import {Modelisationpbo} from "../../model/modelisationpbo";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {ModelisationpboService} from "../../services/modelisationpbo.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import {Creationsadirah} from "../../model/Creationsadirah";

@Component({
  selector: 'app-modelisationpbo',
  templateUrl: './modelisationpbo.component.html',
  styleUrls: ['./modelisationpbo.component.css']
})
export class ModelisationpboComponent implements OnInit {
  regions: Region[]
  region = new Region();
  modelisationpbo:Modelisationpbo[];
  productDialog: boolean;
  submitted: boolean;
  modes = new Modelisationpbo()
  NewDialog: boolean;
  fileName = 'ExcelSheet.xlsx';
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  constructor(private toast: ToastrService, private regionService: RegionService,private modelisationpboService:ModelisationpboService) { }

  ngOnInit(): void {
    this.getmodelisationpbo()
    this.getAllRegion()
  }
  getmodelisationpbo(){
    this.modelisationpboService.getModelisationpbo().subscribe(data=>{
        console.table(data)
        this.modelisationpbo=data;
      },
      error => {
        console.log(error)
      })
  }

  getAllRegion() {
    this.regionService.getAll().subscribe(data => this.regions = data);
  }
  openDialog(modelisationpbo:Modelisationpbo) {
    this.modes=modelisationpbo
    this.productDialog = true;

  }

  Ondeletegc(id:number) {Swal.fire({
    title: 'Etes-vous sur?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui!'
  }).then((result) => {

    //let confirm = window.confirm('do you want to delete this GC')
    if (result.value) {
      this.modelisationpboService.removeModelisationpbo(id).subscribe(data => {
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

  edit(modelisationpbo:any) {
    this.modelisationpboService.updateModelisationpbo(modelisationpbo.id, modelisationpbo).subscribe(data => {

        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))

  }

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

  save(modes: Modelisationpbo) {
    modes.region=this.region
    this.modelisationpboService.addModelisationpbo(modes).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )


  }

  openNew() {
    this.modes =new Modelisationpbo();
    this.NewDialog = true;


  }
  Onduplicate(list: Modelisationpbo) {
    this.modelisationpboService.addModelisationpbo(list).subscribe(res => {
        this.modelisationpbo.push({...list});
        this.toast.success("done")

      },
      error => this.toast.error('some things wrong')
    )

  }

}
