// @ts-ignore

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MapComponent} from './map/map.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {AllSchoolsComponent} from './all-schools/all-schools.component';
import {HttpClientModule} from '@angular/common/http';
import {SpecificSchoolComponent} from './specific-school/specific-school.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {MatIconModule} from '@angular/material/icon'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReviewFormComponent} from './review-form/review-form.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {AccordionModule} from "ngx-bootstrap/accordion";
import {ModalContentComponent} from './modal-content/modal-content.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {MatSelectModule} from "@angular/material/select";
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {HeaderComponent} from './header/header.component';
import {LoginButtonComponent} from './login-button/login-button.component';
import {MatInputModule} from "@angular/material/input";
import {CreateSchoolPopupComponent} from "./all-schools/create-school-popup/create-school-popup.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchBarComponent,
    AllSchoolsComponent,
    SpecificSchoolComponent,
    ReviewsComponent,
    CreateSchoolPopupComponent,
    ReviewFormComponent,
    ModalContentComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    LoginButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    AccordionModule,
    BrowserModule,
    ModalModule.forRoot(),
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
