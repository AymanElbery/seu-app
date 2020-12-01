import { NgModule } from '@angular/core';
import { componentDeclarations , routes} from './translation-auth.common';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { RouterModule } from '@angular/router';
import { TranslationCommonModule } from '../translation-common/translation-common.module';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    TranslationCommonModule,
    MatDialogModule
  ]
})
export class TranslationAuthModule { }
