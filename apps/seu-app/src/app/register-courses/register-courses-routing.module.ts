import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterationHelperComponent} from './registeration-helper/registeration-helper.component';
import {RegisterWishesComponent} from './register-wishes/register-wishes.component'
const routes: Routes =  [{ path: '', component: RegisterWishesComponent },
{
  path: '',
  children: [
  { path: 'registerwishes',  component: RegisterWishesComponent, data: { title: 'الخدمات الإلكترونية | رغبات التسجيل للمستجدين - بكالوريوس' }  },
  { path: 'reghelper',  component: RegisterationHelperComponent }

 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCoursesRoutingModule { }
