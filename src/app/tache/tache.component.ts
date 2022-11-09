import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NvtacheService} from "../services/nvtache.service";
import {Nvtache} from "../model/Nvtache";
import {ActivatedRoute, Router} from "@angular/router";
import {timeout} from "rxjs";
import Swal from "sweetalert2";
import {ToastrService} from "ngx-toastr";
import {colsup} from "../model/colsup";
import {User} from "../model/User";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Tache} from "../model/Tache";
import {Projet} from "../model/Projet";
import {Region} from "../model/Region";
import {TokenStorageService} from "../services/token-storage.service";
import {RegionService} from "../services/region.service";
import {ProjetService} from "../services/projet.service";
import * as XLSX from "xlsx";

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit, AfterViewInit {
  projett = new FormControl('', [Validators.required]);
  regionn = new FormControl('', [Validators.required]);
  demandeur = new FormControl('', [Validators.required]);
  etat = new FormControl('', [Validators.required]);
  commentaire = new FormControl('', [Validators.required]);
  datereception = new FormControl('', [Validators.required]);
  tachee = new FormControl('', [Validators.required]);
  usernamee= new FormControl('', [Validators.required]);

  title = 'Affecter Tache';
  fileName = 'ExcelSheet.xlsx';
  projets:Projet[];
  projet =new Projet();
  regions:Region[]
  region =new Region();
  nvtache:Nvtache;
  nvtaches=new Nvtache();
  taches:Tache[];
  tache :Tache;
  user:User
  addForm: FormGroup;
  items= new FormArray([]);
  step:any =1;
  aaaa: any;
  nomTache: string;
  username:string;
  //////
  data: any[] = []
  header = [
    {field: 'demandeur', header: 'Demandeur'},
    {field: 'datereception', header: 'Date de reception'},
    {field: 'commentaire', header: 'Commentaire'},
    {field: 'etat', header: 'Etat'},
    {field: 'region', header: 'Region'},
    {field: 'projet', header: 'Projet'},




  ]
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  nom: string | null = ""
  NewDialog=false;

  constructor(private nvTacheService: NvtacheService, private tokenStorage: TokenStorageService,
              private regionService: RegionService,
              private projetService:ProjetService,
              private fb:FormBuilder,
              private router: ActivatedRoute, private route: Router,
              private toast: ToastrService) {
    this.nom = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getAll()

  }

  ngAfterViewInit() {
    this.getTacheByName()
  }

  getAll() {
    this.nvTacheService.Get_tache_data(this.nom).subscribe(data => {
      this.data = data
      this.data.map(t => {
        t.projet = t.projet.name
        t.region = t.region.name
        let obj
        for (let a of t.columnsSuplimentaires) {
          let nom = a.name
          let value = a.value
          let o = '{"' + nom + '":"' + value + '"}'
          console.log(o)
          const ob = JSON.parse(o)
          obj = Object.assign(t, ob);
        }
        t = obj
      })
    })
  }

  getTacheByName() {
    this.nvTacheService.Get_taches_BY_ID(this.nom).subscribe(data => {
      this.tache=data;
        let col: string[] = data.columnsSuplimentaires.split(',')

        for (let s of col) {
          this.header.push(
            {field: s, header: s})
        }
      }
    )
    console.log(this.header)
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
        this.nvTacheService.removeTache(id).subscribe(data => {
            console.table(data)

            this.ngOnInit()

            this.toast.success('gc supprimé avec succés ');

          },
          error => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            console.log(error)
          })
      }
    })
  }

  openDialog(list: any) {
this.NewDialog=true;
    this.getTache()
    this.nvtaches = list;
    this.getallprojet();
    this.getAllRegion();
  }

  Onduplicate(list: any) {

  }
  save(nomTache:string, username:string,nvtaches:Nvtache,){
//console.log(this.addForm.controls..controls[i].controls.name.value)
    console.log(this.items.value)
    nvtaches.columnsSuplimentaires=[]
    for(let item of this.items.controls){
      let col=new colsup();
      col.name=item.get('name')?.value
      col.value=item.get('value')?.value
      nvtaches.columnsSuplimentaires.push(col)
    }

    nvtaches.projet=this.projett.value
    nvtaches.region = this.regionn.value
    nvtaches.demandeur=this.demandeur.value
    nvtaches.datereception=this.datereception.value
    nvtaches.etat=this.etat.value
    nvtaches.commentaire=this.commentaire.value
    this.tache= this.tachee.value
    nomTache=this.tache.nom
    nvtaches.user = this.usernamee.value
    username=this.usernamee.value
    nvtaches.user=new User()
    nvtaches.user=this.tokenStorage.getUser();



    console.log(nvtaches)

    this.nvTacheService.updateTache(nvtaches.id,nvtaches).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()

      },
      error => this.toast.error('some things wrong')
    )

    this.NewDialog =false;

  }
  createItem(c:any): FormGroup {
    return this.fb.group({
      value: '',
      name: c,

    });
  }

  addItem(c:any): void {
    this.items = this.addForm.get('items') as FormArray;
    this.items.push(this.createItem(c));
  }

  getTache() {
    this.addForm = new FormGroup({
      items: new FormArray([])
    });
    for(let  t of this.tache.columnsSuplimentaires.split(',')){
      this.addItem(t);
    }


  }
  OnSubmit() {
    this.step=this.step+1;
  }
  getallprojet(){
    this.projetService.getAll().subscribe(res=>{
      this.projets=res
    })
  }
  getAllRegion(){
    this.regionService.getAll().subscribe(data=>this.regions=data);
  }
  getName (){
    this.user = this.tokenStorage.getUser();

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
}
