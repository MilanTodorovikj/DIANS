import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ModalContentComponent} from "../modal-content/modal-content.component";


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  modalRef?: BsModalRef;

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalContentComponent);
  }
}
