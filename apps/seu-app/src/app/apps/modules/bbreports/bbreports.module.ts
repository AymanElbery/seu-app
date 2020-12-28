import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { Declarations, routes } from './bb.common';
import { RouterModule } from '@angular/router';
import { BBCommonModule } from './bbreports-common/bb-common.module';
import { BBServicesModule } from './bb-services.module';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    Declarations
  ],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    BBCommonModule,
    BBServicesModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([])
  ],
  providers: []
})
export class BBReportsModule {
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}

