import {Component, Inject} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EducationUnit} from "../../EducationUnit";
import {EducationUnitsService} from "../../educationUnits.service";

@Component({
  selector: 'create-school-popup',
  templateUrl: './create-school-popup.component.html',
  styleUrls: ['./create-school-popup.component.css']
})
export class CreateSchoolPopupComponent {
  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: EducationUnit,
              private educationUnitsService: EducationUnitsService) {
    if (data !== undefined && data !== null) {
      this.schoolForm.reset(data)
    }
  }

  cities: string[] | undefined;

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

  schoolForm = this.fb.group({
      name: [''],
      city: [''],
      street: [''],
      type: [''],
      phone: [''],
      website: [''],
      lat: [NaN],
      lon: [NaN]
    }
  );

  ngOnInit(): void {
    this.educationUnitsService.getAllCities().subscribe(
      (response) => {
        this.cities = response;
      },
      (error) => {
        console.log("Error Occurred: " + JSON.stringify(error));
      }
    )
  }
}
