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
import { SpecificSchoolComponent } from './specific-school/specific-school.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatIconModule} from '@angular/material/icon'
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { ReviewFormComponent } from './review-form/review-form.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {AccordionModule} from "ngx-bootstrap/accordion";
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { WjInputModule } from '@grapecity/wijmo.angular2.input'
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchBarComponent,
    AllSchoolsComponent,
    SpecificSchoolComponent,
    ReviewsComponent,
    HomeIconComponent,
    ReviewFormComponent,
    ModalContentComponent,
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
    MatIconModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    AccordionModule,
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
