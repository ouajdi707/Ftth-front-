import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GccreateComponent} from "./taches/gc/gccreate/gccreate.component";
import {GcdisplayComponent} from "./taches/gc/gcdisplay/gcdisplay.component";
import {FscdisplayComponent} from "./taches/fsc/fscdisplay/fscdisplay.component";

const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent},
  {path : 'Addgc', component : GccreateComponent},
  {path : 'Getgc', component:GcdisplayComponent},
  {path : 'GetFsc', component:FscdisplayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
