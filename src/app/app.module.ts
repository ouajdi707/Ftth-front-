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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { CreationidmComponent } from './taches/creationidm/creationidm.component';
import { CreationsadirahComponent } from './taches/creationsadirah/creationsadirah.component';
import { IdentificationimmeubleComponent } from './taches/identificationimmeuble/identificationimmeuble.component';
import { ModelisationidmComponent } from './taches/modelisationidm/modelisationidm.component';
import { ModelisationpboComponent } from './taches/modelisationpbo/modelisationpbo.component';
import { RaccoComponent } from './taches/racco/racco.component';
import { RegieComponent } from './taches/regie/regie.component';
import { VtlComponent } from './taches/vtl/vtl.component';
import { TrameComponent } from './taches/trame/trame.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthInterceptor, authInterceptorProviders} from "./services/auth-interceptor.service";
import { HomeComponent } from './home/home.component';
import { AddtacheComponent } from './taches/addtache/addtache.component';
import { ProjetComponent } from './projet/projet.component';
import { TacheComponent } from './tache/tache.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    GcdisplayComponent,
    FscdisplayComponent,
    RegionComponent,
    CreationidmComponent,
    CreationsadirahComponent,
    IdentificationimmeubleComponent,
    ModelisationidmComponent,
    ModelisationpboComponent,
    RaccoComponent,
    RegieComponent,
    VtlComponent,
    TrameComponent,
    UserComponent,
    RoleComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddtacheComponent,
    ProjetComponent,
    TacheComponent,


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
      ReactiveFormsModule,

],
  providers: [GcService,DatePipe,FscService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
