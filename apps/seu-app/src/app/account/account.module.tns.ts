import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { UserService } from './services/user.service';
import { LoginFormComponent } from './login-form/login-form.component.tns';
import { AccountRoutingModule } from './account-routing.module.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component.tns';
import { NativeScriptLocalizeModule } from 'nativescript-localize/angular';
import { AppTransModule } from '../app.trans.module.tns';


@NgModule({
  declarations: [LoginFormComponent, RegistrationFormComponent],
  imports: [
    NativeScriptCommonModule,AccountRoutingModule,NativeScriptFormsModule,AppTransModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [UserService]
})
export class AccountModule { }
