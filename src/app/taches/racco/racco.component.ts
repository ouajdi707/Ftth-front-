import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/Region";
import {Racco} from "../../model/Racco";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {RaccoService} from "../../services/racco.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import {Creationsadirah} from "../../model/Creationsadirah";
import {ProjetService} from "../../services/projet.service";
import {Projet} from "../../model/Projet";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-racco',
  templateUrl: './racco.component.html',
  styleUrls: ['./racco.component.css']
})
export class RaccoComponent implements OnInit {
  user:User
  projets:Projet[];
  projet =new Projet();
  regions: Region[]
  region = new Region();
  racco:Racco[];
  productDialog: boolean;
  submitted: boolean;
  raccos = new Racco()
  NewDialog: boolean;
  fileName = 'ExcelSheet.xlsx';
  username:any
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  constructor( private projetService:ProjetService ,private toast: ToastrService, private regionService: RegionService,private raccoService:RaccoService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getAllRacco()
    this.getAllRegion()
    this.getallprojet()
    this.getName()

  }

getAllRacco(){
  this.raccoService.getracco().subscribe(data=>{
      console.table(data)
      this.racco=data;
    },
    error => {
      console.log(error)
    })
}
  getAllRegion() {
    this.regionService.getAll().subscribe(data => this.regions = data);
  }
  edit(racco: any) {
    this.raccoService.updateracco(racco.id, racco).subscribe(data => {

        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))


  }

  openDialog(racco: Racco) {
    this.raccos=racco
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
        this.raccoService.removeracco(id).subscribe(data => {
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
    this.raccos =new Racco();
    this.NewDialog = true;

  }
  getallprojet(){
    this.projetService.getAll().subscribe(res=>{
      this.projets=res
    })
  }

  save(raccos: Racco,username:String) {
    raccos.projet=this.projet

    raccos.region=this.region
    raccos.user=new User()
    raccos.user=this.tokenStorage.getUser();
    raccos.nom=this.user.username
    this.raccoService.addracco(raccos,raccos.user.id).subscribe(res => {
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

  Onduplicate(raccos: Racco ,username:number) {
    raccos.user=this.tokenStorage.getUser();
    raccos:this.racco.push({...raccos})
    
        this.raccoService.addracco(raccos,raccos.user.id).subscribe(res => {

        this.toast.success("done")

      },
      error => this.toast.error('some things wrong')
    )

  }


  getName (){
    this.user = this.tokenStorage.getUser();

  }
}
