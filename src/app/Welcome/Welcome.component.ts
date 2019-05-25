

import { Component, OnInit  } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import * as globals from '../global';

import { AlertifyService } from '../../_service/alerty.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Welcome',
  templateUrl: './Welcome.component.html',
  styleUrls: ['./Welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    ngOnInit() {
    
      console.log(localStorage.getItem("token"));
    }
    // tslint:disable-next-line:max-line-length
    constructor(private http: Http) { 
      
    }

    
 }
