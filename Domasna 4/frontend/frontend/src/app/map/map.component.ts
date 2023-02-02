import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LatLng} from "leaflet";
import {ActivatedRoute} from "@angular/router";
import {EducationUnitsService} from "../educationUnits.service";
import {EducationUnit} from "../EducationUnit";
import {EducationUnitFilter} from "../EducationUnitFilter";

declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

  map: any;
  marker: any;
  items: any;
  displayData: EducationUnit[] = [];

  constructor(private route: ActivatedRoute,
              private unitService: EducationUnitsService) {
  }

  private initMap(length: number = 10, _filter: EducationUnitFilter, flag: boolean = false, lat: number = 41.6626, lon: number = 21.6541): void {

    document.getElementById("preMap")!!.innerHTML = "<div id='map' style='width:100vw; height: 100vh;'></div>";

    if (!flag) {
      length = 10;
    }

    this.map = new L.map('map').setView(new LatLng(lat, lon), 9);

    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    this.map.addLayer(layer);
    this.unitService.getEducationUnisFiltered(_filter).subscribe(
      (response) => {
        this.items = response;
        this.displayData = this.items.slice(0, length);
        for (let i = 0; i < length; i++) {

          this.marker = new L.Marker([this.items[i].lat, this.items[i].lon], {
            icon: new L.Icon({
              iconSize: [30, 25],
              iconAnchor: [13, 41],
              iconUrl: '/assets/blue-marker.svg',
            }),
            title: 'Workspace'
          });
          this.marker.addTo(this.map);

        }
      },
      (error) => {
        console.log("Error Occurred: " + error);
      }
    )


  }

  setNewMarker(lat: number, lon: number) {

    document.getElementById("preMap")!!.innerHTML = "<div id='map' style='width:100vw; height: 100vh;'></div>";

    this.map = new L.map('map').setView(new LatLng(lat, lon), 15);

    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    this.map.addLayer(layer);


    this.marker = new L.Marker([lat, lon], {
      icon: new L.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: '/assets/blue-marker.svg',
      }),
      title: 'Workspace'
    });
    this.marker.addTo(this.map);


  }

  // @ts-ignore
  ngAfterViewInit(length: number, filter: EducationUnitFilter, flag: boolean): void {
    this.initMap(length, filter, flag);
  }
}
