import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './translation-client.common';
import { SeucommonModule } from '../../../../../seucommon/seucommon.module';
import { RouterModule } from '@angular/router';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { TranslationCommonModule } from '../translation-common/translation-common.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslationLazyTransModule } from '../translation-common/translation.lazytrans.module';
import { PaymentsModule } from 'src/app/apps/payments/payments.module';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    TranslationCommonModule,
    MatDialogModule,
    TranslationLazyTransModule,
    PaymentsModule
  ],
  entryComponents: [
    componentDeclarations
  ],
})
export class TranslationClientModule { }
