import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../app//login/login.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './route';
import { WelcomeComponent } from './Welcome/Welcome.component';
import { NavBarComponent } from './navBar/navBar.component';

import { NoticesComponent } from './Notices/Notices.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNoticeComponent } from './AddNotice/AddNotice.component';
import { NgbModule, NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ListActionsComponent } from './list-actions/list-actions.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListMessageComponent } from './list-message/list-message.component';
import { ListWaitMessageComponent } from './list-wait-message/list-wait-message.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    NavBarComponent,

    NoticesComponent,
    AddNoticeComponent,
    ListActionsComponent,
    AddCategoryComponent,
    ListMessageComponent,
    ListWaitMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    InputsModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
