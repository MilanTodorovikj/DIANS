import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {EducationUnitsService} from "../educationUnits.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {


  constructor(public modalRef: BsModalRef,
              private unitService: EducationUnitsService,
              private route: Router,
              private fb: FormBuilder,
              private http: HttpClient) {
    this.form = this.fb.group({
      rate: ['', Validators.required],
      comment: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

  }


  item: any;
  a: number = 1;
  form: FormGroup;
  formComment: any;

  ngOnInit() {

    // console.log(this.route.url.split("/")[2]);

    this.a = Number(this.route.url.split("/")[2]);

    this.unitService.getEducationUnit(this.a).subscribe(
      (response) => {
        this.item = response;
      }
    )
  }

  addReview() {

    if (this.form.valid) {

      const formData = this.form.value;
      this.http.post('http://localhost:8080/review/addReview/' + this.a, formData).subscribe(response => {

        window.location.reload();
      });


    } else {
      console.log("Greska vo forma");
    }

  }


}
