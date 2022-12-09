import {Component, OnInit} from '@angular/core';
import {EducationUnitsService} from "../educationUnits.service";
import {EducationUnit} from "../EducationUnit";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-all-schools',
  templateUrl: './all-schools.component.html',
  styleUrls: ['./all-schools.component.css']
})
export class AllSchoolsComponent implements OnInit {
  title = "GetEducationUnits";
  data = [];

  constructor(private educationUnitsService: EducationUnitsService, private mapComponent: MapComponent) {
  }

  units: EducationUnit[] = [];

  columns = ["Unit id", "City", "Street", "Type", "Phone", "Website", "lat", "lon"]

  index = ["id", "city", "street", "type", "phone", "website", "lat", "lon"]


  displayData: EducationUnit[] = [];

  modal: any;

  ngOnInit(): void {
    this.educationUnitsService.getEducationUnits().subscribe(
      (response) => {
        this.units = response;
        this.displayData = this.units.slice(0, 10);
        this.modal = this.displayData.at(0);
      },
      (error) => {
        console.log("Error Occurred: " + error);
      }
    )

  }

  showMore() {
    let newLength = this.displayData.length + 10;
    if (newLength > this.units.length) {
      newLength = this.units.length
    }
    this.displayData = this.units.slice(0, newLength);
    this.mapComponent.ngAfterViewInit(newLength as number);
  }

  // setModal(id: number) {
  //   this.educationUnitsService.getEducationUnit(id).subscribe(
  //     (response) => {
  //       this.modal = this.displayData.at(id - 1);
  //     },
  //     (error) => {
  //       console.log("Error Occurred: " + error);
  //     })
  // }


}
