import { Component, OnInit } from '@angular/core';
import {FscService} from "../../../services/fsc.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-fscdisplay',
  templateUrl: './fscdisplay.component.html',
  styleUrls: ['./fscdisplay.component.css']
})
export class FscdisplayComponent implements OnInit {

  constructor(private fscService:FscService ,router:Router) { }
  fsc : any=[];

  ngOnInit(): void {
    this.fsc=this.fscService.Get_Fsc().subscribe(
      data=>{this.fsc=data
      console.table(data)},
      error => {console.log(error)
    })
  }

}
