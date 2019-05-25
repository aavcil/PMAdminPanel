import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as globals from '../app/global';
import { Notices } from '../app/Notices/notices';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListActionService {
  helper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }
  token = localStorage.getItem('token');
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

  getAction() {
    return this.http.get(globals.apiUrl + '/api/Service/ListAction', {
      headers: {
        'Authorization': 'Bearer ' + this.token,
        'Content-type': 'application/json'
      }
    });
  }

  getMessage() {
    return this.http.get(globals.apiUrl + '/api/Service/ListAction/Governance', {
      headers: {
        'Authorization': 'Bearer ' + this.token,
        'Content-type': 'application/json'
      }
    });
  }

  getWaitMessage() {
    return this.http.get(globals.apiUrl + '/api/Service/Contact/Governance', {
      headers: {
        'Authorization': 'Bearer ' + this.token,
        'Content-type': 'application/json'
      }
    });
  }

  checkMessage(id: number) {
    return this.http.get(globals.apiUrl + '/api/Service/' + id, {
      headers: {
        'Authorization': 'Bearer ' + this.token,
        'Content-type': 'application/json'
      }
    });
  }
}

