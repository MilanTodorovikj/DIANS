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

  constructor(private fb: FormBuilder,private modalService: BsModalService) {

  }


  modalRef?: BsModalRef;
  openModal() {
    this.modalRef = this.modalService.show(ModalContentComponent);

  }
}
