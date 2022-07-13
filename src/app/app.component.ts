import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";
import {Router} from "@angular/router";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ftth-front';
  @ViewChild(HeaderComponent) head: HeaderComponent;

  constructor(private cdr: ChangeDetectorRef) {
  }

  /*  loadscripts(){
      var s = document.createElement("script");
      var s2= document.createElement("script");
      var s3=document.createElement("script");
      var s4 = document.createElement("script");
      var s5= document.createElement("script");
      var s6=document.createElement("script");
      var s7 = document.createElement("script");
      var s8= document.createElement("script");
      var s9=document.createElement("script");
      var s10 = document.createElement("script");
      var s11= document.createElement("script");
      var s12=document.createElement("script");
      var s13 = document.createElement("script");
      var s14= document.createElement("script");
      var s15=document.createElement("script");
      var s16 = document.createElement("script");
      var s17= document.createElement("script");
      var s18=document.createElement("script");
      var s19 = document.createElement("script");
      var s20= document.createElement("script");
      var s21=document.createElement("script");
      var s22 = document.createElement("script");
      var s23= document.createElement("script");
      var s24=document.createElement("script");
      var s25 = document.createElement("script");
      var s26= document.createElement("script");
      var s28=document.createElement("script");
      var s29 = document.createElement("script");

      s.src = "/assets/js/core/jquery.min.js";
      s2.src = "/assets/js/core/popper.min.js";
      s3.src = "/assets/js/core/bootstrap.min.js";
      s4.src = "/assets/js/plugins/perfect-scrollbar.jquery.min.js";
      s5.src = "/assets/js/plugins/moment.min.js";
      s6.src = "/assets/js/plugins/bootstrap-switch.js";
      s7.src = "/assets/js/plugins/sweetalert2.min.js";
      s8.src = "/assets/js/plugins/jquery.validate.min.js";
      s9.src = "/assets/js/plugins/jquery.bootstrap-wizard.js";
      s10.src = "/assets/js/plugins/bootstrap-selectpicker.js";
      s11.src = "/assets/js/plugins/bootstrap-datetimepicker.js";
      s12.src = "/assets/js/plugins/jquery.dataTables.min.js";
      s13.src = "/assets/js/plugins/bootstrap-tagsinput.js";
      s14.src = "/assets/js/plugins/jasny-bootstrap.min.js";
      s15.src = "/assets/js/plugins/fullcalendar/fullcalendar.min.js";
      s16.src = "/assets/js/plugins/fullcalendar/daygrid.min.js";
      s17.src = "/assets/js/plugins/fullcalendar/timegrid.min.js";
      s18.src = "/assets/js/plugins/fullcalendar/interaction.min.js";
      s19.src = "/assets/js/plugins/jquery-jvectormap.js";
      s20.src = "/assets/js/plugins/nouislider.min.js";
      s21.src = "/assets/js/plugins/chartjs.min.js";
      s22.src = "/assets/js/plugins/bootstrap-notify.js";
      s23.src = "/assets/js/paper-dashboard.min1036.js?v=2.1.1";
      s24.src = "/assets/demo/demo.js";
      s25.src = "/assets/demo/jquery.sharrre.js";
      s26.src = "/assets/js/general.js";
    }*/

}
