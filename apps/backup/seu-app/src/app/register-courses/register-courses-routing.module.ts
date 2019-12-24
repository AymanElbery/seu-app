import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterationHelperComponent} from './registeration-helper/registeration-helper.component';
import {RegisterWishesComponent} from './register-wishes/register-wishes.component'
const routes: Routes =  [{ path: 'registercourses', component: RegisterWishesComponent },
{
  path: 'registercourses',
  children: [
  { path: 'registerwishes',  component: RegisterWishesComponent },
  { path: 'reghelper',  component: RegisterationHelperComponent }

 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCoursesRoutingModule { }
