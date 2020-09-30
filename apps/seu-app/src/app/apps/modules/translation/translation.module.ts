import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { providerDeclarations, routes } from './translation.common';
import { TranslationLandingComponent } from './components/translation-landing/translation-landing.component';
import { TranslationHomeComponent } from './components/translation-home/translation-home.component';
import { TranslationAdminMenuComponent } from './components/menu/translation-admin-menu/translation-admin-menu.component';
import { TranslationMenuComponent } from './components/menu/translation-menu/translation-menu.component';
import { RouterModule } from '@angular/router';
import { TranslationCommonModule } from './modules/translation-common/translation-common.module';
import { TranslationServicesModule } from './services/translation-service.module';



@NgModule({
  declarations: [
    TranslationLandingComponent,
    TranslationHomeComponent,
    TranslationMenuComponent,
    TranslationAdminMenuComponent
  ],
  imports: [
    SeucommonModule,
    TranslationCommonModule,
    TranslationServicesModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    providerDeclarations
  ]
})
export class TranslationModule {
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}

