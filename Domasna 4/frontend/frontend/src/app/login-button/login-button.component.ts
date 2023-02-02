import {Component} from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {

  constructor(public loginService: AuthenticationService) {
  }

}
