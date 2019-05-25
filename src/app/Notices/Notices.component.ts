import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { NoticeService } from '../../_service/notice.service';
import { AlertifyService } from '../../_service/alerty.service';
import { isNullOrEmptyString } from '@progress/kendo-angular-grid/dist/es2015/utils';

@Component({
  selector: 'app-Notices',
  templateUrl: './Notices.component.html',
  styleUrls: ['./Notices.component.css']
})

export class NoticesComponent implements OnInit {
  getData: any = [];

  constructor(private noticeService: NoticeService, private alerty: AlertifyService) { }

  ngOnInit() {
    this.noticeService.getNotice().subscribe((response) => { this.getData = response; this.fun(); });

  }
  deleteData(id: number) {
    this.noticeService.deleteNotice(id).subscribe((response) => {
     
      this.alerty.success("Silme işlemi Başarılı!");
      setInterval(() => {
        location.reload();
      }, 1000);

    });

  }
  fun() {

  }


}
