import { Component } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {

  constructor(public modalRef: BsModalRef) {}

  addReview() {

  }
}
