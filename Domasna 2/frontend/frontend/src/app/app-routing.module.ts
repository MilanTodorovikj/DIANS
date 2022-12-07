import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllSchoolsComponent} from "./all-schools/all-schools.component";

const routes: Routes = [
  { path: 'all', component: AllSchoolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
