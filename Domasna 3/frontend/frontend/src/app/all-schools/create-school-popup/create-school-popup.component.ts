import {Component, Inject} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EducationUnit} from "../../EducationUnit";
import {AllSchoolsComponent} from "../all-schools.component";

@Component({
  selector: 'create-school-popup',
  templateUrl: './create-school-popup.component.html',
  styleUrls: ['./create-school-popup.component.css']
})
export class CreateSchoolPopupComponent {
  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: EducationUnit) {
    if (data !== undefined && data !== null) {
      this.schoolForm.reset(data)
    }
  }

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
}
