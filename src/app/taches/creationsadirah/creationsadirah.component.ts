import { Component, OnInit } from '@angular/core';
import {Region} from "../../model/Region";
import {Creationsadirah} from "../../model/Creationsadirah";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {CreationsadirahService} from "../../services/creationsadirah.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import {Projet} from "../../model/Projet";
import {ProjetService} from "../../services/projet.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-creationsadirah',
  templateUrl: './creationsadirah.component.html',
  styleUrls: ['./creationsadirah.component.css']
})
export class CreationsadirahComponent implements OnInit {
  projets:Projet[];
  projet =new Projet();
  regions:Region[]
  region =new Region();
  creationsadirah:Creationsadirah[];
  productDialog: boolean;
  submitted: boolean;
  creationsadirahs= new Creationsadirah()
  NewDialog:boolean;
  fileName = 'ExcelSheet.xlsx';
  username:any
  user:User



  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  constructor( private projetService:ProjetService ,private toast: ToastrService,private regionService: RegionService , private creationsadirahservice:CreationsadirahService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getallprojet()
    this.getCreationsadirah()
    this.getAllRegion()
    this.getName()
  }
  getallprojet(){
    this.projetService.getAll().subscribe(res=>{
      this.projets=res
    })
  }
  getCreationsadirah(){
  this.creationsadirahservice.getCreationsadirah().subscribe(data=>{
    console.table(data);
    this.creationsadirah=data

  },
    error => {
      console.log(error)
    })

  }
  getAllRegion(){
    this.regionService.getAll().subscribe(data=>this.regions=data);
  }

  editcreationidm(creationsadirah: any) {
    this.creationsadirahservice.updateCreationsadirah(creationsadirah.id, creationsadirah).subscribe(data => {

        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))
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
      this.creationsadirahservice.removeCreationsadirah(id).subscribe(data => {
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

  openDialog(creationsadirah:Creationsadirah) {
    this.creationsadirahs=creationsadirah
    this.productDialog = true;

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

  save(creationsadirahs: Creationsadirah,username:String) {
    creationsadirahs.projet=this.projet
    creationsadirahs.region=this.region
    creationsadirahs.user=new User()
    creationsadirahs.user=this.tokenStorage.getUser();
    creationsadirahs.nom=this.user.username
    this.creationsadirahservice.addCreationsadirah(creationsadirahs,creationsadirahs.user.id).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )
  }

  openNew() {
    this.creationsadirahs =new Creationsadirah();
    this.NewDialog = true;
  }

  Onduplicate(list: Creationsadirah,username:number) {
    this.creationsadirahservice.addCreationsadirah(list,username).subscribe(res => {
        this.creationsadirah.push({...list});
        this.toast.success("done")

      },
      error => this.toast.error('some things wrong')
    )

  }
  getName (){
    this.user = this.tokenStorage.getUser();

  }

}
