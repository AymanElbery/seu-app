import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './refund.common';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { RouterModule } from '@angular/router';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { ServicesCommonModule } from '../services-common/services-common.module';
import { MatDialogModule, MatCheckboxModule } from '@angular/material';
import { RefundAddComponent } from './components/refund-add/refund-add.component';
import { RefundContinueComponent } from './components/refund-continue/refund-continue.component';
import { RefundReasonComponent } from './components/refund-reason/refund-reason.component';
import { NgxIbanModule } from "ngx-iban";
@NgModule({
  declarations: [
    componentDeclarations,
    RefundAddComponent,
    RefundContinueComponent,
    RefundReasonComponent
  ],
  imports: [
    MatDialogModule, 
    MatCheckboxModule,
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    ServicesCommonModule,
    NgxIbanModule
  ],
  entryComponents: [
    RefundAddComponent,
    //RefundContinueComponent,
    RefundReasonComponent
  ],
})
export class RefundModule { }
