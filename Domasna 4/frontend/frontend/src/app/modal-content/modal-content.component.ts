import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {EducationUnitsService} from "../educationUnits.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ReloadService} from "../reload.service";
import {ReviewsService} from "../reviews.service";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  item: any;
  id: number = 1;
  form: FormGroup;

  constructor(public modalRef: BsModalRef,
              private unitService: EducationUnitsService,
              private route: Router,
              private fb: FormBuilder,
              private http: HttpClient,
              private reloadService: ReloadService,
              private reviewService: ReviewsService) {
    this.form = this.fb.group({
      rate: ['', Validators.required],
      comment: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

  }


  ngOnInit() {
    this.id = Number(this.route.url.split("/")[2]);

    this.unitService.getEducationUnit(this.id).subscribe( response => this.item = response)
  }

  addReview() {

    if (this.form.valid) {
      const formData = this.form.value;
      this.reviewService.addReview(this.id, formData).subscribe(() => {this.reloadService.reload();});

    }
  }


}
