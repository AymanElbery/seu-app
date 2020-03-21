import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component.tns';
import { LoginFormComponent } from './login-form/login-form.component.tns';
import { ResetPasswordComponent } from './reset-password/reset-password.component.tns';


export const routes: Routes = [
  { path: 'reset', component: ResetPasswordComponent},
  { path: 'login', component: LoginFormComponent}
  


];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AccountRoutingModule { }
