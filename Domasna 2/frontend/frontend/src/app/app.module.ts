import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MapComponent} from './map/map.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {AllSchoolsComponent} from './all-schools/all-schools.component';
import {HttpClientModule} from '@angular/common/http';
import { SpecificSchoolComponent } from './specific-school/specific-school.component';
import { ReviewsComponent } from './reviews/reviews.component'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchBarComponent,
    AllSchoolsComponent,
    SpecificSchoolComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
