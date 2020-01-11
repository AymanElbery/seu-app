import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademicprocsRoutingModule } from './academicprocs-routing.module.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { WithdrawFromUnivComponent } from './withdraw-from-univ/withdraw-from-univ.component.tns';
import { AddRequestComponent } from './withdraw-from-univ/diag/add-request/add-request.component.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { PostponeRequestComponent } from './postpone-request/postpone-request.component.tns';
import { AddPostponeComponent } from './postpone-request/diag/add-postpone/add-postpone.component.tns';


@NgModule({

  imports: [
    AcademicprocsRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    WithdrawFromUnivComponent,
    AddRequestComponent,
    PostponeRequestComponent,
    AddPostponeComponent

  ],
  entryComponents: [
    AddRequestComponent,
    AddPostponeComponent
  ],

})
export class AcademicprocsModule { }
