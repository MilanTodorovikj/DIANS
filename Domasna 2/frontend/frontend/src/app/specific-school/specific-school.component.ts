import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EducationUnitsService} from "../educationUnits.service";

@Component({
  selector: 'app-specific-school',
  templateUrl: './specific-school.component.html',
  styleUrls: ['./specific-school.component.css']
})
export class SpecificSchoolComponent {
  constructor(private route: ActivatedRoute, private unitService: EducationUnitsService) {
  }

  a: number = 1;

  item: any;
  ngOnInit() {
    // this.unitService.getEducationUnit(this.route.queryParams)
    this.route
      .params.subscribe(s => {
        // console.log(s["id"]);
        this.a = s["id"];
      }
    )

    this.unitService.getEducationUnit(this.a).subscribe(
      (response) => {
        // console.log(response)
        this.item = response;
      }
    )
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
