import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ModalContentComponent} from "../modal-content/modal-content.component";


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,private modalService: BsModalService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      // Form is valid, do something with the form data
      console.log("YES")
    }

  }

  test() {
    console.log("mrs")

  }

  modalRef?: BsModalRef;
  openModal() {
    this.modalRef = this.modalService.show(ModalContentComponent);

  }
}
