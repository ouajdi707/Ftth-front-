import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/Region";
import {Creationidm} from "../../model/Creationidm";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {CreationidmService} from "../../services/creationidm.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import {ProjetService} from "../../services/projet.service";
import {Projet} from "../../model/Projet";


@Component({
  selector: 'app-creationidm',
  templateUrl: './creationidm.component.html',
  styleUrls: ['./creationidm.component.css']
})
export class CreationidmComponent implements OnInit {
  projets:Projet[];
  projet =new Projet();
  regions:Region[]
  region =new Region();
  creationidm:Creationidm[];
  productDialog: boolean;
  submitted: boolean;
  creationidms= new Creationidm()
  NewDialog:boolean;
  fileName = 'ExcelSheet.xlsx';
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
  constructor( private projetService:ProjetService ,private toast: ToastrService,private regionService: RegionService , private creationidmService:CreationidmService) { }
  ngOnInit(): void {
    this.getCreationidm()
    this.getAllRegion()
    this.getallprojet()


  }
  getallprojet(){
    this.projetService.getAll().subscribe(res=>{
      this.projets=res
    })
  }


  getCreationidm(){
    this.creationidmService.getCreationidm().subscribe(data=>{
      console.table(data)
      this.creationidm=data;
    },
      error => {
      console.log(error)
      })
}
 getAllRegion(){
  this.regionService.getAll().subscribe(data=>this.regions=data);

}
  openNew() {
    this.creationidms =new Creationidm();
    this.NewDialog = true;
  }
  save(creationidms:Creationidm) {
    creationidms.projet=this.projet
    creationidms.region=this.region
    this.creationidmService.addCreationidm(creationidms).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )
  }
  editcreationidm(creationidm:any) {
    this.creationidmService.updateCreationidm(creationidm.id, creationidm).subscribe(data => {

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
  openDialog(creationidm:Creationidm) {
    this.creationidms=creationidm
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
        this.creationidmService.removeCreationidm(id).subscribe(data => {
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


  Onduplicate(list:Creationidm ) {

    this.creationidmService.addCreationidm(list).subscribe(res => {
        this.creationidm.push({...list});
        this.toast.success("done")

      },
      error => this.toast.error('some things wrong')
    )
  }



}

