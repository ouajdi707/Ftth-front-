import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/Region";
import {Vtl} from "../../model/Vtl";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {VtlService} from "../../services/vtl.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import {Creationsadirah} from "../../model/Creationsadirah";
import {Projet} from "../../model/Projet";
import {ProjetService} from "../../services/projet.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-vtl',
  templateUrl: './vtl.component.html',
  styleUrls: ['./vtl.component.css']
})
export class VtlComponent implements OnInit {
  user:User
  projets:Projet[];
  projet =new Projet();
  regions: Region[]
  region = new Region();
  vtl:Vtl[];
  productDialog: boolean;
  submitted: boolean;
  vtls = new Vtl()
  NewDialog: boolean;
  fileName = 'ExcelSheet.xlsx';
  username:any
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
  constructor(  private projetService:ProjetService,private toast: ToastrService, private regionService: RegionService, private vtlService:VtlService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getallprojet()
    this.getallvtl()
    this.getAllRegion()
    this.getName()
  }
  getallprojet(){
    this.projetService.getAll().subscribe(res=>{
      this.projets=res
    })
  }
  getallvtl(){
    this.vtlService.getVtl().subscribe(data=>{
        console.table(data)
        this.vtl=data;
      },
      error => {
        console.log(error)
      })
  }
  getAllRegion() {
    this.regionService.getAll().subscribe(data => this.regions = data);
  }

  openNew() {
    this.vtls =new Vtl();
    this.NewDialog = true;
  }

  openDialog(vtl:Vtl) {
    this.vtls=vtl
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
        this.vtlService.removevtl(id).subscribe(data => {
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

  edit(vtl:any) {
    this.vtlService.updateVtl(vtl.id, vtl).subscribe(data => {
        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))
  }

  save(vtls: Vtl,username:string) {
    vtls.projet=this.projet
    vtls.region=this.region
    vtls.user=new User()
    vtls.user=this.tokenStorage.getUser();
    vtls.nomcharge=this.user.username
    this.vtlService.addVtl(vtls,vtls.user.id).subscribe(res => {
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
  Onduplicate(list: Vtl,username:number) {
    this.vtlService.addVtl(list,username).subscribe(res => {
        this.vtl.push({...list});
        this.toast.success("done")

      },
      error => this.toast.error('some things wrong')
    )

  }
  getName (){
    this.user = this.tokenStorage.getUser();

  }
}
