import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GccreateComponent} from "./taches/gc/gccreate/gccreate.component";
import {GcdisplayComponent} from "./taches/gc/gcdisplay/gcdisplay.component";
import {FscdisplayComponent} from "./taches/fsc/fscdisplay/fscdisplay.component";
import {RegionComponent} from "./region/region.component";

const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent},
  {path : 'Addgc', component : GccreateComponent},
  {path : 'Getgc', component:GcdisplayComponent},
  {path : 'GetFsc', component:FscdisplayComponent},
  {path : 'region', component:RegionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
