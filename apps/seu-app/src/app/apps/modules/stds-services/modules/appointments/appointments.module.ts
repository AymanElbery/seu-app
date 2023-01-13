import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './appointments.common';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { RouterModule } from '@angular/router';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { ServicesCommonModule } from '../services-common/services-common.module';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    ServicesCommonModule
  ],
  entryComponents: [
  ],
})
export class AppointmentsModule { }
