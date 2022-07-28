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
  charge = new FormControl('', [Validators.required]);
  datereception = new FormControl('', [Validators.required]);
  tachee = new FormControl('', [Validators.required]);

  title = 'Affecter Tache';

  projets:Projet[];
  projet =new Projet();
  regions:Region[]
  region =new Region();
  nvtache:Nvtache;
  nvtaches=new Nvtache();
  taches:Tache[];
  tache :Tache;

addForm=this.fb.group({
  nomTache:['',Validators.required],

  nomChamp:this.fb.array([
    this.fb.control('')
  ])
});
step:any =1;
  aaaa: any;
  nomTache: string;


  constructor(private fb:FormBuilder,private toast: ToastrService ,private regionService: RegionService, private projetService:ProjetService,  private nvTacheService:NvtacheService) { }


  ngOnInit(): void {
    this.getallprojet()
    this.getAllRegion()
    this.getalltaches()

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
  save(nomTache:string,nvtaches:Nvtache){
    nvtaches.projet=this.projett.value
    nvtaches.region = this.regionn.value
    nvtaches.charge=this.charge.value
    nvtaches.demandeur=this.demandeur.value
    nvtaches.datereception=this.datereception.value
    nvtaches.etat=this.etat.value
    nvtaches.commentaire=this.commentaire.value
    this.tache= this.tachee.value
    nomTache=this.tache.nom

    this.nvTacheService.addTache(nomTache,nvtaches).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()

      },
      error => this.toast.error('some things wrong')
    )
  }




  OnSubmit() {
    this.step=this.step+1;
  }
  get nomChamp(){
    return this.addForm.get('nomChamp') as FormArray
  }
  addNomChamp(){
    this.nomChamp.push(this.fb.control(''));
  }
  deleteNomChamp(index:number){
    this.nomChamp.removeAt(index)
    this.nomChamp.markAsDirty();
  }

  Onprevious() {
  }

}
