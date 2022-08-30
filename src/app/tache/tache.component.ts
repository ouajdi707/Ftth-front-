import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NvtacheService} from "../services/nvtache.service";
import {Nvtache} from "../model/Nvtache";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit,AfterViewInit {
data:any[]=[]
  header =[
    { field: 'demandeur', header: 'Demandeur' },
    { field: 'datereception', header: 'Date de reception'},
    
    { field: 'commentaire', header: 'Commentaire' },
    { field: 'etat', header: 'Etat' },
    { field: 'region', header: 'Region' },
    { field: 'projet', header: 'Projet' }]

  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  nom: string | null =""
  constructor(private nvTacheService:NvtacheService,private router:ActivatedRoute,private route :Router) {
  this.nom=this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  this.getAll()

  }
  ngAfterViewInit() {
    this.getTacheByName()
  }

  getAll(){
    this.nvTacheService.Get_tache_data(this.nom).subscribe(data=>{
      this.data=data
      this.data.map(t=>{
        t.projet=t.projet.name
        t.region=t.region.name
        let  obj
        for(let a of t.columnsSuplimentaires){
          let nom =a.name
          let value =a.value
         let o = '{"'+ nom +'":"' + value +'"}'
          console.log(o)
          const ob = JSON.parse(o)
         obj = Object.assign(t, ob);
        }
       t = obj
      })
    })
}
getTacheByName(){
  this.nvTacheService.Get_taches_BY_ID(this.nom).subscribe(data=> {
    let col :string[] = data.columnsSuplimentaires.split(',')

    for (let s of col){
      this.header.push(
      { field:s, header: s })
    }
    }


  )
  console.log(this.header)
}

}
