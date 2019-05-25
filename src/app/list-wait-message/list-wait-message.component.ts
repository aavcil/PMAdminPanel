import { Component, OnInit } from '@angular/core';
import { ListActionService } from '../../_service/list-action.service';
import { AlertifyService } from '../../_service/alerty.service';

@Component({
  selector: 'app-list-wait-message',
  templateUrl: './list-wait-message.component.html',
  styleUrls: ['./list-wait-message.component.css']
})
export class ListWaitMessageComponent implements OnInit {
  getData: any = [];
  constructor(private actionService : ListActionService,private alerty:AlertifyService) {

  }
 ngOnInit() {
   this.actionService.getWaitMessage().subscribe((response) => { this.getData = response;  });
   
 }

 checkData(id: number) {
  this.actionService.checkMessage(id).subscribe((response) => {
    console.log(response);
    this.alerty.success("Onaylama işlemi Başarılı!");
    setInterval(() => {
      location.reload();
    }, 1000);

  });

}
}
