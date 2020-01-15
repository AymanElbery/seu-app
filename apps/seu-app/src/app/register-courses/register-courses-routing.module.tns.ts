import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { RegisterWishesComponent } from './register-wishes/register-wishes.component.tns';
import { RegisterationHelperComponent } from './registeration-helper/registeration-helper.component.tns';

const routes: Routes = [{ path: '', component: RegisterWishesComponent },
{
  path: '',
  children: [
  { path: 'registerwishes',  component: RegisterWishesComponent },
  { path: 'reghelper',  component: RegisterationHelperComponent }

 ]
}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class RegisterCoursesRoutingModule { }
