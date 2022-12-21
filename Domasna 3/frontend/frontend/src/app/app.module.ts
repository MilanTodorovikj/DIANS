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

import { WjInputModule } from '@grapecity/wijmo.angular2.input'
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchBarComponent,
    AllSchoolsComponent,
    SpecificSchoolComponent,
    ReviewsComponent,
    HomeIconComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
