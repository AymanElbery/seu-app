import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademicprocsRoutingModule } from './academicprocs-routing.module.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { WithdrawFromUnivComponent } from './withdraw-from-univ/withdraw-from-univ.component';
import { AddRequestComponent } from './withdraw-from-univ/diag/add-request/add-request.component';

@NgModule({

  imports: [
    AcademicprocsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    WithdrawFromUnivComponent,
    AddRequestComponent
  ],
  entryComponents: [AddRequestComponent],

})
export class AcademicprocsModule { }
