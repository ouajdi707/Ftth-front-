import { Component, OnInit } from '@angular/core';
import {RegionService} from "../services/region.service";
import {Region} from "../model/Region";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
regions:Region[];


  constructor( private regionService:RegionService) { }

  ngOnInit(): void {
    this.regionService.getAll().subscribe(data=>{
      console.table(data)
      this.regions=data;

    },

    error =>{
      console.log(error)
    })
  }

}
