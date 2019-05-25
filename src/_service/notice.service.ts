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
export class NoticeService {
  helper: JwtHelperService = new JwtHelperService();
  Response: any;
  DeleteData:any=null;

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

  getNotice() {
    console.log(this.token);
    return this.http.get(globals.apiUrl + '/api/Management/ListNotices', {
      headers: {
        'Authorization': 'Bearer ' + this.token,
        'Content-type': 'application/json'
      }
    });
  }
  getCategories() {
    return this.http.get(globals.apiUrl + '/api/Management/CategoryList', {
      headers: {
        'Authorization': 'Bearer ' + this.token,
        'Content-type': 'application/json'
      }
    });
  }
  addNotice(model: any) {
    
    return this.http.post(globals.apiUrl + '/api/Management/AddNotices', model,
      {
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Content-type': 'application/json'
        }
      }).map((response: Response) => {
      const postData=  response;
      if(postData){
        this.Response=postData;
      }
      })
  }
  deleteNotice(id: number) {
    console.log(id);
    return this.http.delete(globals.apiUrl + '/api/Management/DeleteNotice/'+ id,
      {
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Content-type': 'application/json'
        }
      }).map((response: Response) => {
       const Deleted=response;
       this.DeleteData=Deleted;
      })
  }

}
