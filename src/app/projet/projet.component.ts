import { Component, OnInit } from '@angular/core';
import {Region} from "../model/Region";
import {Projet} from "../model/Projet";
import {RegionService} from "../services/region.service";
import {ToastrService} from "ngx-toastr";
import {ProjetService} from "../services/projet.service";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projet:Projet[];
  projets =new Projet();
  productDialog: boolean;
  NewDialog =false ;
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
  constructor(private projetService:ProjetService ,private toast: ToastrService) { }

  ngOnInit(): void {
    this.getallprojets()
  }
  getallprojets(){
    this.projetService.getAll().subscribe(data=>{
        console.table(data)
        this.projet=data;
      },

      error =>{
        console.log(error)
      })

  }

  openNew() {
    this.projets =new Projet();
    this.NewDialog = true;
  }

  save(projets: Projet) {
    this.projetService.addProjet(projets).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )
  }



  openDialog(projet:Projet) {
    this.projets = projet;
    this.productDialog = true;

  }

  editprojet(projet: any) {
    this.projetService.updateProjet(projet.id, projet).subscribe(data => {
        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))

  }



}
