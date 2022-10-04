import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/Region";
import {Trame} from "../../model/trame";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {TrameService} from "../../services/trame.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import {Creationsadirah} from "../../model/Creationsadirah";
import {Projet} from "../../model/Projet";
import {ProjetService} from "../../services/projet.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-trame',
  templateUrl: './trame.component.html',
  styleUrls: ['./trame.component.css']
})
export class TrameComponent implements OnInit {
  user:User
  projets:Projet[];
  projet =new Projet();
  regions: Region[]
  region = new Region();
  trame:Trame[];
  productDialog: boolean;
  submitted: boolean;
  trames = new Trame()
  NewDialog: boolean;
  fileName = 'ExcelSheet.xlsx';
  username:any
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  constructor(  private projetService:ProjetService ,private toast: ToastrService, private regionService: RegionService, private trameService : TrameService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getallprojet()
    this.getAllRegion()
    this.getallTrame()
  this.getName()}

  getallprojet(){
    this.projetService.getAll().subscribe(res=>{
      this.projets=res
    })
  }
  getallTrame(){
    this.trameService.gettrame().subscribe(data=>{
        console.table(data)
        this.trame=data;
      },
      error => {
        console.log(error)
      })
  }
  getAllRegion() {
    this.regionService.getAll().subscribe(data => this.regions = data);
  }
  openNew() {
    this.trames =new Trame();
    this.NewDialog = true;

  }

  save(trames: Trame,username:String) {
    trames.projet=this.projet

    trames.region=this.region
    trames.user=new User()
    trames.user=this.tokenStorage.getUser();
    trames.nom=this.user.username
    this.trameService.addtrame(trames,trames.user.id).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )


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

  openDialog(trame:Trame) {
    this.trames=trame
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
        this.trameService.removetrame(id).subscribe(data => {
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

  edit(trame:any) {
    this.trameService.updatetrame(trame.id, trame).subscribe(data => {
        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))

  }
  Onduplicate(list: Trame) {

    list.id =NaN;
    this.trameService.addtrame(list,this.user.id).subscribe(res => {
        this.trame.push({...list});
        this.toast.success("done")

      },
      error => this.toast.error('some things wrong')
    )



  }
  getName (){
    this.user = this.tokenStorage.getUser();

  }
}
