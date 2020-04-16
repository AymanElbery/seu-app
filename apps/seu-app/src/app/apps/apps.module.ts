import { NgModule } from '@angular/core';
import { AppsSharedModule } from './modules/apps-shared/apps.shared.module';
import { AppsRoutingModule } from './apps-routing.module';
import { AppsLandingComponent } from './components/apps-landing/apps-landing.component';
import { AdmissionLazyTransModule } from './admission.lazytrans.module';
import { TranslateService } from '@ngx-translate/core';
import { SeucommonModule } from '../seucommon/seucommon.module';

@NgModule({
  declarations: [AppsLandingComponent],
  imports: [
    AppsRoutingModule,
    AdmissionLazyTransModule,
    SeucommonModule,
    AppsSharedModule
  ]
})
export class AppsModule {
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
      this.translate.use('en');
  }
}
