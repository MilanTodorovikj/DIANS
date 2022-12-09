import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EducationUnitsService} from "../educationUnits.service";
import * as Leaflet from "leaflet";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-specific-school',
  templateUrl: './specific-school.component.html',
  styleUrls: ['./specific-school.component.css'],
  providers: [MapComponent]
})

export class SpecificSchoolComponent {
  constructor(private route: ActivatedRoute,
              private unitService: EducationUnitsService,
              private mapComponent: MapComponent) {
  }


  a: number = 1;
  numbers = [1,2,3,4,5]

  item: any;

  ngOnInit() {
    this.route
      .params.subscribe(s => {
        // console.log(s["id"]);
        this.a = s["id"];
        // console.log(this.route.snapshot);
      }
    )

    this.unitService.getEducationUnit(this.a).subscribe(
      (response) => {
        // console.log(response)
        this.item = response;

        this.mapComponent.setNewMarker(this.item.lat, this.item.lon);

        // // @ts-ignore
        // for(let i=1;i<=response.reviewAverage;i++){
        //   this.numbers.push(i);
        // }
      }
    )
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  goHome() {
    window.location.replace("/all");
  }
}
