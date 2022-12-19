import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllSchoolsComponent} from "./all-schools/all-schools.component";
import {SpecificSchoolComponent} from "./specific-school/specific-school.component";

const routes: Routes = [
  {path: 'all', component: AllSchoolsComponent},
  {path: 'detail/:id', component: SpecificSchoolComponent},
  { path: '**', redirectTo: 'all', pathMatch: 'full' },
  {path: '', redirectTo: 'all', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
