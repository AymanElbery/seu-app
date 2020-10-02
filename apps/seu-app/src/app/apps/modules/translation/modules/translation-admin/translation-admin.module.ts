import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './translation-admin.common';
import { SeucommonModule } from '../../../../../seucommon/seucommon.module';
import { RouterModule } from '@angular/router';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { TranslationCommonModule } from '../translation-common/translation-common.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    TranslationCommonModule,
    MatDialogModule
  ],
  entryComponents: [
    componentDeclarations,
  ],
})
export class TranslationAdminModule { }
