import { LoginService } from './../../_service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private loginservice: LoginService, private router: Router) { }
  loggedOut() {
    if (this.loginservice.logout()) {
      this.router.navigateByUrl('/login');
    }
  }
  ngOnInit() {


  }

}
