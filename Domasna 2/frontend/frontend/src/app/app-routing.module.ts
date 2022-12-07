import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllSchoolsComponent} from "./all-schools/all-schools.component";
import {SpecificSchoolComponent} from "./specific-school/specific-school.component";

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'all', component: AllSchoolsComponent},
  {path: 'detail/:id', component: SpecificSchoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
