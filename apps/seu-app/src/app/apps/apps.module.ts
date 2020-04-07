import { NgModule } from '@angular/core';
import { AppsSharedModule } from './modules/apps-shared/apps.shared.module';
import { AppsRoutingModule } from './apps-routing.module';
import { AppsLandingComponent } from './components/apps-landing/apps-landing.component';

@NgModule({
  declarations: [AppsLandingComponent],
  imports: [
    AppsRoutingModule,
    AppsSharedModule
  ]
})
export class AppsModule {
  constructor() {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
  }
}
