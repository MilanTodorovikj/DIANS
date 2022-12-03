import { Component } from '@angular/core';
import * as Leaflet from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  title = 'AngularOSM';

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 8,
    center: new Leaflet.LatLng(41.9981, 21.4254)
  };
}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
    getMarkers()
  ] as Leaflet.Layer[];
};
export const getMarkers = (): Leaflet.Marker[] => {
  return [
    new Leaflet.Marker(new Leaflet.LatLng(41.9981, 21.4254), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: 'Domasna 2/frontend/frontend/node_modules/leaflet/src/images/marker.svg',
      }),
      title: 'Workspace'
    } as Leaflet.MarkerOptions),
  ] as Leaflet.Marker[];
};
