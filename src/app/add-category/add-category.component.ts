import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../_service/notice.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../_service/alerty.service';
import { AddCategoryService } from '../../_service/add-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  model: any = {};
  constructor(private addCategoryService: AddCategoryService, private router: Router, private alerty: AlertifyService, ) { }


  ngOnInit() {
  }
  addCategory() {
   
    this.addCategoryService.addCategory(this.model).subscribe(data => {
      if (this.addCategoryService.Response == '200') {
        this.alerty.success('Kategori Eklendi');
        setInterval(() => {
          location.reload();
        }, 1000);
      }
   
    }, err => {
      this.alerty.error('Kategori Mevcut');
    });
    

  }
  
}
