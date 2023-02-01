import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn=false;

  constructor(private loginService:AuthenticationService) { }

  ngOnInit() {
    this.loggedIn=this.loginService.isUserLoggedIn();
  }

}
