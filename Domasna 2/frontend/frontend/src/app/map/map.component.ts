import {AfterViewInit, Component, OnInit} from '@angular/core';
// import * as L from "leaflet";
import {LatLng} from "leaflet";
import {ActivatedRoute} from "@angular/router";

declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit, OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params)
  }


  map: any;
  marker: any;

  mapOptions = {
    center: new LatLng(41.6626, 21.6541),
    zoom: 9
  }

  private initMap(lat: number = 41.6626, lon: number = 21.6541): void {

    // console.log(this.route.snapshot.params)
    document.getElementById("preMap")!!.innerHTML = "<div id='map' style='width:100vw; height: 100vh;'></div>";
    // if (this.map != undefined){
    //   this.map.off()
    //   this.map.remove();
    //   this.map.invalidateSize();
    // }

    this.map = new L.map('map').setView(new LatLng(lat, lon), 8);

    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    this.map.addLayer(layer);


    // this.marker = new L.Marker([lat, lon], {
    //   icon: new L.Icon({
    //     iconSize: [50, 41],
    //     iconAnchor: [13, 41],
    //     iconUrl: '/assets/blue-marker.svg',
    //   }),
    //   title: 'Workspace'
    // });
    // this.marker.addTo(this.map);


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

  ngAfterViewInit(): void {
    this.initMap();
  }
}

// export const getLayers = (): Leaflet.Layer[] => {
//   return [
//     new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     } as Leaflet.TileLayerOptions),
//     getMarkers(),
//   ] as Leaflet.Layer[];
// };
// export const getMarkers = (): Leaflet.Marker[] => {
//   return [
//     new Leaflet.Marker(new Leaflet.LatLng(41.9981, 21.4254), {
//       icon: new Leaflet.Icon({
//         iconSize: [50, 41],
//         iconAnchor: [13, 41],
//         iconUrl: 'Domasna 2/frontend/frontend/src/assets/blue-marker.svg',
//       }),
//       title: 'Workspace'
//     } as Leaflet.MarkerOptions),
//   ] as Leaflet.Marker[];
// };
