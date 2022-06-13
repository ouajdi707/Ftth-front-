import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GcdisplayComponent} from "./taches/gc/gcdisplay/gcdisplay.component";
import {FscdisplayComponent} from "./taches/fsc/fscdisplay/fscdisplay.component";
import {RegionComponent} from "./region/region.component";
import {CreationidmComponent} from "./taches/creationidm/creationidm.component";
import {CreationsadirahComponent} from "./taches/creationsadirah/creationsadirah.component";
import {IdentificationimmeubleComponent} from "./taches/identificationimmeuble/identificationimmeuble.component";
import {ModelisationidmComponent} from "./taches/modelisationidm/modelisationidm.component";
import {ModelisationpboComponent} from "./taches/modelisationpbo/modelisationpbo.component";
import {RaccoComponent} from "./taches/racco/racco.component";
import {RegieComponent} from "./taches/regie/regie.component";
import {VtlComponent} from "./taches/vtl/vtl.component";
import {TrameComponent} from "./taches/trame/trame.component";
import {UserComponent} from "./user/user.component";
import {RoleComponent} from "./role/role.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AddtacheComponent} from "./taches/addtache/addtache.component";


const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent},
  {path : 'gc', component:GcdisplayComponent},
  {path : 'fsc', component:FscdisplayComponent},
  {path : 'region', component:RegionComponent},
  {path:'creationidm',component:CreationidmComponent},
  {path:'creationsadirah',component:CreationsadirahComponent},
  {path:'identificationimmeuble',component:IdentificationimmeubleComponent},
  {path:'modelisationidm',component:ModelisationidmComponent,data:{
      role:['ROLE_ADMIN','ROLE_USER']
    }},
  {path:'modelisationpbo',component:ModelisationpboComponent},
  {path:'racco',component:RaccoComponent},
  {path:'regie',component:RegieComponent},
  {path:'vtl',component:VtlComponent},
  {path:'trame',component:TrameComponent},
  {path:'user',component:UserComponent},
  {path:'role',component:RoleComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'ajouter',component:AddtacheComponent},













];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
