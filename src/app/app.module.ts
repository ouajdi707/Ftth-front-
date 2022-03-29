import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { GcdisplayComponent } from './taches/gc/gcdisplay/gcdisplay.component';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from "primeng/dropdown";
import {DialogModule} from "primeng/dialog";
import {RatingModule} from "primeng/rating";
import {PaginatorModule} from "primeng/paginator";
import {GcService} from "./services/gc.service";
import {DatePipe} from "@angular/common";
import { FscdisplayComponent } from './taches/fsc/fscdisplay/fscdisplay.component';
import {FscService} from "./services/fsc.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import {RippleModule} from "primeng/ripple";
import {TreeSelectModule} from "primeng/treeselect";
import {CalendarModule} from 'primeng/calendar';
import {RegionComponent} from "./region/region.component";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    GcdisplayComponent,
    FscdisplayComponent,
    RegionComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ToastModule,
        ToolbarModule,
        ButtonModule,
        FileUploadModule,
        TableModule,
        FormsModule,
        InputNumberModule,
        RadioButtonModule,
        ConfirmDialogModule,
        DropdownModule,
        DialogModule,
        RatingModule,
        PaginatorModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RippleModule,
        TreeSelectModule,
        CalendarModule,
        FileUploadModule,


],
  providers: [GcService,DatePipe,FscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
