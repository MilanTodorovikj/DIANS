import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllSchoolsComponent} from "./all-schools/all-schools.component";
import {SpecificSchoolComponent} from "./specific-school/specific-school.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {path: 'all', component: AllSchoolsComponent},
  {path: 'detail/:id', component: SpecificSchoolComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', redirectTo: 'all', pathMatch: 'full'},
  {path: '', redirectTo: 'all', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
