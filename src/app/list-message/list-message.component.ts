import { Component, OnInit } from '@angular/core';
import { ListActionService } from '../../_service/list-action.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {
  getData: any = [];
  constructor(private actionService : ListActionService) {

  }
 ngOnInit() {
   this.actionService.getMessage().subscribe((response) => { this.getData = response;  });
   
 }


}
