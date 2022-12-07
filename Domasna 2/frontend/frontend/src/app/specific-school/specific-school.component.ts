import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EducationUnitsService} from "../educationUnits.service";
import {EducationUnit} from "../EducationUnit";

@Component({
  selector: 'app-specific-school',
  templateUrl: './specific-school.component.html',
  styleUrls: ['./specific-school.component.css']
})
export class SpecificSchoolComponent {
  constructor(private route: ActivatedRoute, private unitService: EducationUnitsService) {
  }

  a: number = 1;
  numbers = [1,2,3,4,5]

  item: any;
  ngOnInit() {
    this.route
      .params.subscribe(s => {
        console.log(s["id"]);
        this.a = s["id"];
      }
    )

    this.unitService.getEducationUnit(this.a).subscribe(
      (response) => {
        console.log(response)
        this.item = response;
      }
    )
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
