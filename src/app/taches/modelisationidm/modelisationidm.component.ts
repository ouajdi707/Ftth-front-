import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/Region";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {ModelisationidmService} from "../../services/modelisationidm.service";
import {Modelisatioidm} from "../../model/Modelisatioidm";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import {Creationsadirah} from "../../model/Creationsadirah";

@Component({
  selector: 'app-modelisationidm',
  templateUrl: './modelisationidm.component.html',
  styleUrls: ['./modelisationidm.component.css']
})
export class ModelisationidmComponent implements OnInit {
  regions: Region[]
  region = new Region();
  modelisationidm:Modelisatioidm[];
  productDialog: boolean;
  submitted: boolean;
  idms = new Modelisatioidm()
  NewDialog: boolean;
  fileName = 'ExcelSheet.xlsx';
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  constructor(private toast: ToastrService, private regionService: RegionService,
              private modelisationidmService:ModelisationidmService) { }

  ngOnInit(): void {
    this.getmodelisationidm()
    this.getAllRegion()
  }
  getmodelisationidm(){
    this.modelisationidmService.getModelisationidm().subscribe(data=>{
        console.table(data)
        this.modelisationidm=data;
      },
      error => {
        console.log(error)
      })
  }
  getAllRegion() {
    this.regionService.getAll().subscribe(data => this.regions = data);
  }

  edit(modelisatioidm:any) {  this.modelisationidmService.updateModelisationidm(modelisatioidm.id, modelisatioidm).subscribe(data => {

      this.toast.success('done');
      this.productDialog = false;
    },
    error => this.toast.error('some things wrong'))

  }

  openDialog(modelisationidm: Modelisatioidm) {
    this.idms=modelisationidm
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
        this.modelisationidmService.removeModelisationidm(id).subscribe(data => {
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

  openNew() {
    this.idms =new Modelisatioidm();
    this.NewDialog = true;

  }

  save(idms: Modelisatioidm) {
    idms.region=this.region
    this.modelisationidmService.addModelisationidm(idms).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )


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
  Onduplicate(list: Modelisatioidm) {
    this.modelisationidmService.addModelisationidm(list).subscribe(res => {
        this.modelisationidm.push({...list});
        this.toast.success("done")

      },
      error => this.toast.error('some things wrong')
    )

  }
}
