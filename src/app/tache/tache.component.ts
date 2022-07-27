import { Component, OnInit } from '@angular/core';
import {NvtacheService} from "../services/nvtache.service";
import {Nvtache} from "../model/Nvtache";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
data:Nvtache[]
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
getAll(){
    this.nvTacheService.Get_tache_data(this.nom).subscribe(data=>this.data=data)
}

}
