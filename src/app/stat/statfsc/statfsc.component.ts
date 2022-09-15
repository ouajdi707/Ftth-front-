import { Component, OnInit } from '@angular/core';
import {Stat} from "../../model/Stat";
import {FscService} from "../../services/fsc.service";

@Component({
  selector: 'app-statfsc',
  templateUrl: './statfsc.component.html',
  styleUrls: ['./statfsc.component.css']
})
export class StatfscComponent implements OnInit {
  option: any;
  statfsc: Stat[]
  constructor(private fscservice:FscService) { }

  ngOnInit(): void {

  }

}
