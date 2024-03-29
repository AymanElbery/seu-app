import { NgModule } from '@angular/core';
import { AppsSharedModule } from './modules/apps-shared/apps.shared.module';
import { AppsRoutingModule } from './apps-routing.module';
import { AppsLandingComponent } from './components/apps-landing/apps-landing.component';
import { TranslateService } from '@ngx-translate/core';
import { SeucommonModule } from '../seucommon/seucommon.module';

@NgModule({
  declarations: [AppsLandingComponent],
  imports: [
    AppsRoutingModule,
    SeucommonModule,
    AppsSharedModule
  ],
  providers: [
  ]
})
export class AppsModule {
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}
