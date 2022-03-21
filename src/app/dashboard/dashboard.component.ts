import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation : ViewEncapsulation.Emulated,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
