import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EducationUnitsService} from "../educationUnits.service";
import {MapComponent} from "../map/map.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateSchoolPopupComponent} from "../all-schools/create-school-popup/create-school-popup.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthenticationService} from "../authentication.service";
import {ReloadService} from "../reload.service";

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
              private loginService:AuthenticationService,
              private reloadService: ReloadService) {
    this.reloadService.reload$.subscribe(() => {
      this.ngOnInit()
    });
  }


  id: number = 1;
  numbers = [1, 2, 3, 4, 5]

  item: any;

  loggedIn=false;

  ngOnInit() {
    this.loggedIn=this.loginService.isUserLoggedIn();
    this.route
      .params.subscribe(s => {
        this.id = s["id"];
      }
    )

    this.unitService.getEducationUnit(this.id).subscribe(
      (response) => {
        this.item = response;

        this.mapComponent.setNewMarker(this.item.lat, this.item.lon);
      }
    )
  }

  ngOnDestroy() {

  }

  goHome() {
    window.location.replace("/all");
  }

  deleteSchool(id: number) {
    if (this.loginService.isUserLoggedIn()) {
      this.unitService.deleteEducationUnit(id).subscribe(res => {
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
            const nextUrl = "/detail/" + (id);
            window.location.assign(nextUrl);
            this.snackBar.open("Ажурирањето е успешно направено", 'close');
          })
        }
      })
    }
  }
}
