import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserService } from './services/user.service';
import {FormsModule } from '@angular/forms';
import { SeucommonModule } from '../seucommon/seucommon.module';
@NgModule({
  declarations: [LoginFormComponent, RegistrationFormComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,FormsModule,SeucommonModule 
  ],
  providers:[UserService]
})
export class AccountModule { }
