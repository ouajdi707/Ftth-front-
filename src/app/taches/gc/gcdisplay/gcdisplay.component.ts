import { Component, OnInit } from '@angular/core';
import {Gc, GcService} from "../../../services/gc.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-gcdisplay',
  templateUrl: './gcdisplay.component.html',
  styleUrls: ['./gcdisplay.component.css']
})

export class GcdisplayComponent implements OnInit {
  gc:any;
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }



  constructor(private gcService:GcService ,router:Router , private datee :DatePipe) { }
  ngOnInit(): void {


    this.gc=this.gcService.Get_Gc ()
      .subscribe(data=>{
        console.table(data)
        this.gc=data;

        },
      error => {console.log(error)
      })
    

  }

}
