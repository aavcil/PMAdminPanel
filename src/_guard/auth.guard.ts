import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../_service/login.service';
import { AlertifyService } from '../_service/alerty.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private route: Router, private logservice: LoginService, private alerty: AlertifyService) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.logservice.loggedIn()) {
    return true;
  }
  this.alerty.error('Önce Giriş Yapmalısınız');
  this.route.navigate(['/login']);
  return false;
  }
}
