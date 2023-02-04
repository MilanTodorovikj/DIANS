import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EducationUnitsService} from "../educationUnits.service";
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
  id = 1;
  numbers = [1, 2, 3, 4, 5]
  item: any;
  loggedIn=false;

  constructor(private route: ActivatedRoute,
              private unitService: EducationUnitsService,
              private mapComponent: MapComponent,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private loginService:AuthenticationService) {
  }

  ngOnInit() {
    this.loggedIn=this.loginService.isUserLoggedIn();
    this.route.params.subscribe(params => {this.id = params["id"]})

    this.unitService.getEducationUnit(this.id).subscribe(response => {
      this.item = response;
      this.mapComponent.setNewMarker(this.item.lat, this.item.lon);
    });
  }

  goHome() {
    window.location.replace("/all");
  }

  deleteSchool(id: number) {
    if (this.loginService.isUserLoggedIn()) {
      this.unitService.deleteEducationUnit(id).subscribe(() => this.goHome())
    }
  }

  editSchool(id: number) {
    if (this.loginService.isUserLoggedIn()) {
      const dialogRef = this.dialog.open(CreateSchoolPopupComponent, {
        data: this.item
      });
      dialogRef.afterClosed().subscribe(response => {
        if (response !== undefined) {
          this.unitService.editEducationUnit(response, id).subscribe(() => {
            const nextUrl = "/detail/" + (id);
            window.location.assign(nextUrl);
            this.snackBar.open("Ажурирањето е успешно направено", 'close');
          })
        }
      })
    }
  }
}
