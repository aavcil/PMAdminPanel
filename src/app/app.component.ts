import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from '../_service/login.service';
import { AlertifyService } from '../_service/alerty.service';
import { Title } from '@angular/platform-browser';
import * as globals from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminPanel';
  constructor(private loginSer: LoginService, private alerty: AlertifyService, private route: Router) {
  }
  loggedIn() {
    return this.loginSer.loggedIn();
  }
  loggedOut() {
    if (this.loginSer.logout()) {
      this.route.navigateByUrl('/login');
    }
  }

}
