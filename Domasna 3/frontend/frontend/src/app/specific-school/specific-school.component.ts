import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EducationUnitsService} from "../educationUnits.service";
import * as Leaflet from "leaflet";
import {MapComponent} from "../map/map.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateSchoolPopupComponent} from "../all-schools/create-school-popup/create-school-popup.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-specific-school',
  templateUrl: './specific-school.component.html',
  styleUrls: ['./specific-school.component.css'],
  providers: [MapComponent]
})

export class SpecificSchoolComponent {
  constructor(private route: ActivatedRoute,
              private unitService: EducationUnitsService,
              private mapComponent: MapComponent,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private loginService:AuthenticationService) {
  }


  a: number = 1;
  numbers = [1, 2, 3, 4, 5]

  item: any;

  loggedIn=false;

  ngOnInit() {
    this.loggedIn=this.loginService.isUserLoggedIn();
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

  deleteSchool(id: number) {
    if (this.loginService.isUserLoggedIn()) {
      this.unitService.deleteEducationUnit(id).subscribe(res => {
        // console.log(res);
        this.goHome();
      })
    }
  }

  editSchool(id: number) {
    if (this.loginService.isUserLoggedIn()) {
      const dialogRef = this.dialog.open(CreateSchoolPopupComponent, {
        data: this.item
      });
      dialogRef.afterClosed().subscribe(res => {
        if (res !== undefined) {
          this.unitService.editEducationUnit(res, id).subscribe(r => {
            const nextUrl = "/detail/" + (++id);
            window.location.assign(nextUrl);
            this.snackBar.open("Ажурирањето е успешно направено", 'close');
          })
        }
      })
    }
  }
}
