import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './refund.common';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { RouterModule } from '@angular/router';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { ServicesCommonModule } from '../services-common/services-common.module';
import { MatDialogModule, MatCheckboxModule } from '@angular/material';
import { RefundAddComponent } from './components/refund-add/refund-add.component';


@NgModule({
  declarations: [
    componentDeclarations,
    RefundAddComponent
  ],
  imports: [
    MatDialogModule,
    MatCheckboxModule,
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    ServicesCommonModule
  ],
  entryComponents: [
    RefundAddComponent
  ],
})
export class RefundModule { }
