import {Component, OnInit} from '@angular/core';
import {EducationUnitsService} from "../educationUnits.service";
import {EducationUnit} from "../EducationUnit";
import {MapComponent} from "../map/map.component";
import {EducationUnitFilter} from "../EducationUnitFilter";

@Component({
  selector: 'app-all-schools',
  templateUrl: './all-schools.component.html',
  styleUrls: ['./all-schools.component.css']
})
export class AllSchoolsComponent implements OnInit {
  title = "GetEducationUnits";
  data = [];

  educationUnitFilter = new EducationUnitFilter();

  cities = ['Велес', 'Демир Капија', 'Кавадарци', 'Неготино', 'Свети Николе',
    'Берово', 'Виница', 'Делчево', 'Кочани', 'Македонска Каменица',
    'Пехчево', 'Пробиштип', 'Штип', 'Дебар', 'Кичево', 'Македонски Брод',
    'Охрид', 'Струга', 'Богданци', 'Валандово', 'Гевгелија', 'Радовиш',
    'Струмица', 'Битола', 'Демир Хисар', 'Крушево', 'Прилеп', 'Ресен',
    'Гостивар', 'Тетово', 'Кратово', 'Крива Паланка', 'Куманово', 'Скопје'];

  types = [
    ['school', 'Училиште'],
    ['language_school', 'Училиште за странски јазици'],
    ['library', 'Библиотека'],
    ['kindergarten', 'Градинка'],
    ['dormitory', 'Студентски дом'],
    ['music_school', 'Музичко училиште'],
    ['college', 'Колеџ'],
    ['university', 'Факултет']
  ];


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
        console.log("Error Occurred: " + JSON.stringify(error));
      }
    )
    this.mapComponent.ngAfterViewInit(10 as number, this.educationUnitFilter,false);
  }

  showMore() {
    let newLength = this.displayData.length + 10;
    if (newLength > this.units.length) {
      newLength = this.units.length
    }
    this.displayData = this.units.slice(0, newLength);
    this.mapComponent.ngAfterViewInit(newLength as number, this.educationUnitFilter,true);
  }

  onCityChange(e: string) {
    this.educationUnitFilter.city = e;
    //console.log(this.educationUnitFilter);

    this.educationUnitsService.getEducationUnisFiltered(this.educationUnitFilter).subscribe(
      (response) => {
        this.units = response;
        // console.log(response);
        this.displayData = this.units.slice(0, 10);
        this.modal = this.displayData.at(0);
      },
      (error) => {
        console.log("Error Occurred: " + error);
      }
    )

    let length = this.displayData.length;
    if (length > this.units.length) {
      length = this.units.length
    }
    this.displayData = this.units.slice(0, length);
    this.mapComponent.ngAfterViewInit(length as number, this.educationUnitFilter,false);

  }

  onTypeChange(e: string) {
    this.educationUnitFilter.type = e;
    //console.log(this.educationUnitFilter);

    this.educationUnitsService.getEducationUnisFiltered(this.educationUnitFilter).subscribe(
      (response) => {
        this.units = response;
        this.displayData = this.units.slice(0, 10);
        this.modal = this.displayData.at(0);
      },
      (error) => {
        console.log("Error Occurred: " + error);
      }
    )

    let length = this.displayData.length;
    if (length > this.units.length) {
      length = this.units.length
    }
    this.displayData = this.units.slice(0, length);
    this.mapComponent.ngAfterViewInit(length as number, this.educationUnitFilter,false);
  }

  onSortChange() {
    if (this.educationUnitFilter.sort == true)
      this.educationUnitFilter.sort = false;
    else
      this.educationUnitFilter.sort = true;

    //console.log(this.educationUnitFilter)

    this.educationUnitsService.getEducationUnisFiltered(this.educationUnitFilter).subscribe(
      (response) => {
        this.units = response;
        this.displayData = this.units.slice(0, 10);
        this.modal = this.displayData.at(0);
      },
      (error) => {
        console.log("Error Occurred: " + JSON.stringify(error));
      }
    )

    let length = this.displayData.length;
    if (length > this.units.length) {
      length = this.units.length
    }
    this.displayData = this.units.slice(0, length);
    this.mapComponent.ngAfterViewInit(length as number, this.educationUnitFilter,false);
  }


}
