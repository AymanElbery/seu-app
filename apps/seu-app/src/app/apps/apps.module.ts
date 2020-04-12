import { NgModule } from '@angular/core';
import { AppsSharedModule } from './modules/apps-shared/apps.shared.module';
import { AppsRoutingModule } from './apps-routing.module';
import { AppsLandingComponent } from './components/apps-landing/apps-landing.component';
import { AdmissionLazyTransModule } from './admission.lazytrans.module';
import { TranslateService } from '@ngx-translate/core';
import {AppsLandingHeaderComponent} from './components/apps-landing-header/apps-landing-header.component';
import {AppsLandingFooterComponent} from './components/apps-landing-footer/apps-landing-footer.component';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { AppsLoginComponent } from './modules/apps-shared/components/apps-login/apps-login.component';

@NgModule({
  declarations: [AppsLandingComponent,AppsLandingHeaderComponent,AppsLandingFooterComponent,AppsLoginComponent],
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
