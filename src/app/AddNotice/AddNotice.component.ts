import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../_service/notice.service';
import { Router } from '@angular/router';
import { AlertifyService } from './../../_service/alerty.service';


@Component({
  selector: 'app-AddNotice',
  templateUrl: './AddNotice.component.html',
  styleUrls: ['./AddNotice.component.css']
})
export class AddNoticeComponent implements OnInit {

  getData: any = [];
  model: any = {};
  constructor(private noticeService: NoticeService, private router: Router,private alerty: AlertifyService,) { }

  ngOnInit() {
    this.noticeService.getCategories().subscribe((response) => { this.getData = response;});
  }

  addNotice(){
    const rout = this.router;
  this.noticeService.addNotice(this.model).subscribe(data => {
    this.alerty.success('Duyuru Eklendi');
    setInterval(() => {
      location.reload();
    }, 1000);
  });
     
  }
}
