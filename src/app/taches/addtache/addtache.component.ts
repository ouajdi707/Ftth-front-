import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Region} from "../../model/Region";
import {Creationidm} from "../../model/Creationidm";
import {Nvtache} from "../../model/Nvtache";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {NvtacheService} from "../../services/nvtache.service";
import {Projet} from "../../model/Projet";
import {ProjetService} from "../../services/projet.service";
import {Tache} from "../../model/Tache";
import {colsup} from "../../model/colsup";
import {User} from "../../model/User";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-addtache',
  templateUrl: './addtache.component.html',
  styleUrls: ['./addtache.component.css']
})
export class AddtacheComponent implements OnInit {
  projett = new FormControl('', [Validators.required]);
  regionn = new FormControl('', [Validators.required]);
  demandeur = new FormControl('', [Validators.required]);
  etat = new FormControl('', [Validators.required]);
  commentaire = new FormControl('', [Validators.required]);
  datereception = new FormControl('', [Validators.required]);
  tachee = new FormControl('', [Validators.required]);
  usernamee= new FormControl('', [Validators.required]);

  title = 'Affecter Tache';

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
  username:any;



  constructor(private fb:FormBuilder,private toast: ToastrService ,private regionService: RegionService,
              private projetService:ProjetService,  private nvTacheService:NvtacheService,
  private tokenStorage: TokenStorageService) { }


  ngOnInit(): void {
    this.getName()
    this.getallprojet()
    this.getAllRegion()
    this.getalltaches()
    this.addForm = new FormGroup({
      items: new FormArray([])
    });



  }
  getalltaches(){
    this.nvTacheService.Get_taches().subscribe(res=>{
      this.taches=res
    })
  }
  getallprojet(){
    this.projetService.getAll().subscribe(res=>{
      this.projets=res
    })
  }
  getAllRegion(){
    this.regionService.getAll().subscribe(data=>this.regions=data);
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
    nvtaches.nom=this.user.username

console.log(nvtaches)

    this.nvTacheService.addTache(nomTache,nvtaches.user.id,nvtaches).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()

      },
      error => this.toast.error('some things wrong')
    )
  }




  OnSubmit() {
    this.step=this.step+1;
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

  getTache(tache:Tache) {
    this.addForm = new FormGroup({
      items: new FormArray([])
    });
    for(let  t of tache.columnsSuplimentaires.split(',')){
      this.addItem(t);
    }

  }
  getName (){
    this.user = this.tokenStorage.getUser();

  }
}
