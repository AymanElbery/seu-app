import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './reenroll.common';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { RouterModule } from '@angular/router';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { ServicesCommonModule } from '../services-common/services-common.module';
import { ReEnrollAddComponent } from './components/reenroll-add/reenroll-add.component';
import { MatDialogModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    componentDeclarations,
    ReEnrollAddComponent
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
    ReEnrollAddComponent
  ],
})
export class ReenrollModule { }
