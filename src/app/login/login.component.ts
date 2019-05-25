import { AlertifyService } from './../../_service/alerty.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_service/login.service';
import { Router } from '@angular/router';
import { isNullOrEmptyString } from '../../../node_modules/@progress/kendo-angular-grid/dist/es2015/utils';
import { JwtHelperService } from '../../../node_modules/@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private loginService: LoginService, private alerty: AlertifyService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.loggedIn()) {
      this.router.navigateByUrl('/home');
    }
  }
  login() {
    this.loginService.login(this.model).subscribe(data => {
      this.alerty.success('Giriş Başarılı');
      const rout = this.router;
      let count = 0;
      const helper = new JwtHelperService();
      const token = this.loginService.token;
      setInterval(function () {
        if (helper.isTokenExpired(token) && count === 0) {
          rout.navigate(['/login']);
          count = 1;
          const msg = new AlertifyService;
          msg.error('Önce Giriş Yapmalısınız');
          return false;
        }
        else if (isNullOrEmptyString(localStorage.getItem('token')) && count === 0) {
          rout.navigate(['/login']);
          count = 1;
          const msg = new AlertifyService;
          msg.error('Önce Giriş Yapmalısınız');
          return false;
        }
        
    
      }, 10000);
    }, error => {
      this.alerty.error('Giriş Başarısız');
    }, () => { this.router.navigateByUrl('/home'); });
  }
}
