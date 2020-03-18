import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserService } from './services/user.service';
import {FormsModule } from '@angular/forms';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { MustMatchDirective } from './must-match.directive';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AppTransModule } from '../app.trans.module';
import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
@NgModule({
  declarations: [LoginFormComponent, RegistrationFormComponent,ResetPasswordComponent,MustMatchDirective],
  imports: [
    CommonModule,
    AccountRoutingModule,FormsModule,SeucommonModule ,AppTransModule    , MatProgressSpinnerModule
    ,MatDialogModule

  ],
  entryComponents: [ResetPasswordComponent],
  providers:[UserService]
})
export class AccountModule { }
