import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {get} from "jquery";
import {GcService} from "../services/gc.service";
import {Stat} from "../model/Stat";

@Component({
  encapsulation : ViewEncapsulation.Emulated,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  title = "spinner";
  spinnerName: string;
  spinnerType: string;
  option: any;
  statgc: Stat[]

  constructor(private spinner: NgxSpinnerService, private gcservice:GcService) {
  }


  ngOnInit(): void {
    this.get()
  }



get(){
  const data1: any[] = [];
  const xAxisData: any[] = [];
  let value = -1
  this.gcservice.getStat().subscribe(data => {
    this.statgc = data
    for (let s of this.statgc) {

      xAxisData.push(s.name);
      data1.push(s.value)

    }
      this.option = {
        title: {
          text: 'Gc'
        },
        legend: {
          data: xAxisData
        },
        toolbox: {
          // y: 'bottom',
          feature: {

            dataView: {},
            magicType: { show: true, type: ['bar', 'line'] },

            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {
        },
        xAxis: {
          data: xAxisData,
          splitLine: {
            show: false
          }
        },
        yAxis: {
          minInterval: 1
        },
        series: [
          {
            name: 'nombre de taches traitées',
            type: 'bar',
            data: data1,
            barWidth: '20%',

            emphasis: {
              focus: 'series'
            },
            animationDelay: function (idx: number) {
              return idx * 10;
            }
          }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx: number) {
          return idx * 5;
        }
      }
    }
  )
};




}
