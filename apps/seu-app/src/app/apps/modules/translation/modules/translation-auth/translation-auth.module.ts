import { NgModule } from '@angular/core';
import { componentDeclarations , routes} from './translation-auth.common';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { RouterModule } from '@angular/router';
import { TranslationCommonModule } from '../translation-common/translation-common.module';
import { MatDialogModule } from '@angular/material';
import { RecaptchaModule } from 'ng-recaptcha';
import { TranslationLazyTransModule } from '../translation-common/translation.lazytrans.module';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RecaptchaModule,
    RouterModule.forChild(routes),
    TranslationCommonModule,
    MatDialogModule,
    TranslationLazyTransModule
  ]
})
export class TranslationAuthModule { }
