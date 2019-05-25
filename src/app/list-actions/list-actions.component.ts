import { Component, OnInit } from '@angular/core';
import { ListActionService } from '../../_service/list-action.service';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css']
})
export class ListActionsComponent implements OnInit {
  getData: any = [];
  finish:string;
  constructor(private actionService : ListActionService) {

   }
  ngOnInit() {
    this.actionService.getAction().subscribe((response) => { this.getData = response; this.fun(); });
    
  }
  fun() {
   
  }

}
