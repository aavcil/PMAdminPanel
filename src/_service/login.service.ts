import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as globals from '../app/global';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  helper: JwtHelperService = new JwtHelperService();
  decodedToken: any;
  expirationDate: any;
  isExpired: any;
  userToken: any;
  token: any;
  decodedTstringoken: any;
  constructor(private http: Http) { }

  private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateError = '';
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateError += serverError[key] + '\n';
        }
      }
    }
    return Observable.throw(modelStateError || 'Server Error');
  }
  private HeaderOption() {
    const headers = new Headers({ 'Content-type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }
  login(model: any) {
    // tslint:disable-next-line:max-line-length
    return this.http.post(globals.apiUrl + '/api/Auth/Login', model, this.HeaderOption()).map((response: Response) => {
      const user = response.json();
      if (user) {
        localStorage.setItem('username', model.username);
        localStorage.setItem('token', user.tokenString);
        this.token = user.tokenString;

        this.decodedToken = this.helper.decodeToken(user.tokenString);
      }
    }).catch(this.handleError);
  }
  setTokn(name: string) {
    this.decodedTstringoken = name;
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    return true;
  }
}

