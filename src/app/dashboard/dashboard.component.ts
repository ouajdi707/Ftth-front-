import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {get} from "jquery";
import {GcService} from "../services/gc.service";
import {Stat} from "../model/Stat";
import {FscService} from "../services/fsc.service";
import {CreationidmService} from "../services/creationidm.service";
import {CreationsadirahService} from "../services/creationsadirah.service";
import {IdentificationimmeubleService} from "../services/identificationimmeuble.service";
import {ModelisationidmService} from "../services/modelisationidm.service";
import {ModelisationpboService} from "../services/modelisationpbo.service";
import {RaccoService} from "../services/racco.service";
import {RegieService} from "../services/regie.service";
import {TrameService} from "../services/trame.service";
import {VtlService} from "../services/vtl.service";
import {Statistique} from "../model/Statistique";
import {Stattotal} from "../model/Stattotal";

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
  stattotal: Stat[]
  statgc: Stat[]
  option1: any;
  option2: any;
  option3: any;
  option4: any;
  option5: any;
  option6: any;
  option7: any;
  option8: any;
  option9: any;
  option10: any;
  option11: any;
  option15: any
  statfsc: Stat[]
  statidimm: Stat[]
  statcreationidm: Stat[]
  statcraeationsadirah: Stat[]
  statmodelisationidm: Stat[]
  statmodelisationpbo: Stat[]
  statracco: Stat[]
  statregie: Stat[]
  stattrame: Stat[]
  statvtl: Stat[]
  countcreationidm: Statistique = new Statistique();
  counttotal: Stattotal = new Stattotal();
  total: number


  constructor(private spinner: NgxSpinnerService, private gcservice: GcService, private fscservice: FscService,
              private creationidmservice: CreationidmService, private creationsadirahservice: CreationsadirahService,
              private identificationimmservice: IdentificationimmeubleService, private modelisationidmservice: ModelisationidmService,
              private modelisationpboservice: ModelisationpboService, private raccoservice: RaccoService, private regieservice: RegieService,
              private trameservice: TrameService, private vtlservice: VtlService) {
  }


  ngOnInit(): void {
    this.get()
    this.getfscstat()
    this.getcreationidmstat()
    this.getmodelisationidm()
    this.getcreationsadirahstat()
    this.getidimmeustat()
    this.getvtlstat()
    this.getregiestat()
    this.getraccostat()
    this.gettramestat()
    this.getmodelisationpbo()
    this.getstattotal()
    this.getcounttotal()
    this.gettotal()


  }


  get() {
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
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  id: any

  tabChange(ids: any) {
    this.id = ids

  }

  getfscstat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.fscservice.getStat().subscribe(data => {
        this.statfsc = data
        for (let s of this.statfsc) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option1 = {
          title: {
            text: 'Fsc'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getcreationidmstat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.creationidmservice.getStat().subscribe(data => {
        this.statcreationidm = data
        for (let s of this.statcreationidm) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option2 = {
          title: {
            text: 'Creationidm'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getcreationsadirahstat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.creationsadirahservice.getStat().subscribe(data => {
        this.statcraeationsadirah = data
        for (let s of this.statcraeationsadirah) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option3 = {
          title: {
            text: 'Creationsadirah'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getidimmeustat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.identificationimmservice.getStat().subscribe(data => {
        this.statidimm = data
        for (let s of this.statidimm) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option4 = {
          title: {
            text: 'Id Immeuble'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getmodelisationidm() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.modelisationidmservice.getStat().subscribe(data => {
        this.statmodelisationidm = data
        for (let s of this.statmodelisationidm) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option5 = {
          title: {
            text: 'Modelisation idm'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getmodelisationpbo() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.modelisationpboservice.getStat().subscribe(data => {
        this.statmodelisationpbo = data
        for (let s of this.statmodelisationpbo) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option6 = {
          title: {
            text: 'Modelisationpbo'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getraccostat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.raccoservice.getStat().subscribe(data => {
        this.statracco = data
        for (let s of this.statracco) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option7 = {
          title: {
            text: 'Racco'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getregiestat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.regieservice.getStat().subscribe(data => {
        this.statregie = data
        for (let s of this.statregie) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option8 = {
          title: {
            text: 'Regie'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  gettramestat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.trameservice.getStat().subscribe(data => {
        this.stattrame = data
        for (let s of this.stattrame) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option9 = {
          title: {
            text: 'Trame'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getvtlstat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.vtlservice.getStat().subscribe(data => {
        this.statvtl = data
        for (let s of this.statvtl) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option10 = {
          title: {
            text: 'Vtl'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getstattotal() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.creationidmservice.getStattotal().subscribe(data => {
        this.stattotal = data
        for (let s of this.stattotal) {

          xAxisData.push(s.name);
          data1.push(s.value)

        }
        this.option11 = {
          title: {
            text: 'Stat total'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
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

  getcounttotal() {
    this.creationidmservice.countCreationidm().subscribe(r => {
      this.countcreationidm = r;


      this.option15 = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Creationidm', 'Creationsadirah', 'Fsc', 'Gc', 'Idimmeubles', 'Modelisationidm', 'Modelisationpbo', 'Racco', 'Regie', 'Trame', 'Vtl'],
        },
        series: [
          {
            name: 'Nombre de taches ',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              {value: this.countcreationidm.value, name: 'Creationidm'},
              {value: this.countcreationidm.value1, name: 'Creationsadirah'},
              {value: this.countcreationidm.value2, name: 'Fsc'},
              {value: this.countcreationidm.value3, name: 'Gc'},
              {value: this.countcreationidm.value4, name: 'Idimmeubles'},
              {value: this.countcreationidm.value5, name: 'Modelisationidm'},
              {value: this.countcreationidm.value6, name: 'Modelisationpbo'},
              {value: this.countcreationidm.value7, name: 'Racco'},
              {value: this.countcreationidm.value8, name: 'Regie'},
              {value: this.countcreationidm.value9, name: 'Trame'},
              {value: this.countcreationidm.value10, name: 'Vtl'},


            ],
          },
        ],
      };


    })
  }

  gettotal() {
    this.creationidmservice.countstattotal().subscribe(r => {
      this.counttotal = r;
      console.log("ctt",this.counttotal)
      this.total=this.counttotal.nombretaches
    })


  }
}
