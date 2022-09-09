import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/Region";
import {Identificationimmeuble} from "../../model/Identificationimmeuble";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {IdentificationimmeubleService} from "../../services/identificationimmeuble.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import {Creationsadirah} from "../../model/Creationsadirah";
import {Projet} from "../../model/Projet";
import {ProjetService} from "../../services/projet.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-identificationimmeuble',
  templateUrl: './identificationimmeuble.component.html',
  styleUrls: ['./identificationimmeuble.component.css']
})
export class IdentificationimmeubleComponent implements OnInit {
  projets:Projet[];
  projet =new Projet();
  regions: Region[]
  region = new Region();
  identificationimmeuble:Identificationimmeuble[];
  productDialog: boolean;
  submitted: boolean;
  idms = new Identificationimmeuble()
  NewDialog: boolean;
  fileName = 'ExcelSheet.xlsx';
  username:any
user:User;
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  constructor(private toast: ToastrService, private regionService: RegionService,
              private identificationimmeubleService: IdentificationimmeubleService,private projetService:ProjetService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.getallprojet()
    this.getidentificationimmeuble()
    this.getAllRegion()
    this.getName()

  }
  getallprojet(){
    this.projetService.getAll().subscribe(res=>{
      this.projets=res
    })
  }

  openNew() {
    this.idms =new Identificationimmeuble();
    this.NewDialog = true;

  }
  getidentificationimmeuble(){
    this.identificationimmeubleService.getIdentificationimmeuble().subscribe(data=>{
      console.table(data)
      this.identificationimmeuble=data;
    },
      error => {
        console.log(error)
      })
  }
  getAllRegion() {
    this.regionService.getAll().subscribe(data => this.regions = data);
  }
  save(idms: Identificationimmeuble,username:string) {
    idms.projet=this.projet
    idms.region=this.region
    idms.user=new User()
    idms.user=this.tokenStorage.getUser();
    idms.nom=this.user.username;
    this.identificationimmeubleService.addIdentificationimmeuble(idms,idms.user.id).subscribe(res => {
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

  openDialog(identificationimmeuble: Identificationimmeuble) {
    this.idms=identificationimmeuble
    this.productDialog = true;
  }

  Ondeletegc(id: number) {
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
        this.identificationimmeubleService.removeIdentificationimmeuble(id).subscribe(data => {
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



  editidentificationimmeuble(identificationimmeuble:any) {
    this.identificationimmeubleService.updateIdentificationimmeuble(identificationimmeuble.id, identificationimmeuble).subscribe(data => {

        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))

  }
  Onduplicate(list: Identificationimmeuble,username:number) {
    this.identificationimmeubleService.addIdentificationimmeuble(list,username).subscribe(res => {
        this.identificationimmeuble.push({...list});
        this.toast.success("done")

      },
      error => this.toast.error('some things wrong')
    )

  }
  getName (){
    this.user = this.tokenStorage.getUser();

  }



}
