import { Component } from '@angular/core';
import { AuthGuard } from './../_guard/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './Welcome/Welcome.component';
import { NoticesComponent } from './Notices/Notices.component';
import { AddNoticeComponent } from './AddNotice/AddNotice.component';
import { ListActionsComponent } from './list-actions/list-actions.component';
// import { AddCategoryComponent } from './add-category/add-category.component';
import { ListMessageComponent } from './list-message/list-message.component';
import { ListWaitMessageComponent } from './list-wait-message/list-wait-message.component';
export const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: '' , redirectTo: 'home', pathMatch: 'full'  },
  {path: '' ,
   runGuardsAndResolvers: 'always' ,
  canActivate: [AuthGuard]  ,
  children: [
    {path: 'home' , component: WelcomeComponent},    ]
  },
  {path: 'notice' , component: NoticesComponent},
  {path: 'actions' , component: ListActionsComponent},
  {path: 'waitMessages' , component: ListWaitMessageComponent},
  {path: 'messages' , component: ListMessageComponent},
  {path: 'addNotice' , component: AddNoticeComponent},
  // {path: 'addCategory' , component: AddCategoryComponent},

  {path: '**' , redirectTo: 'home', pathMatch: 'full'  }
];
