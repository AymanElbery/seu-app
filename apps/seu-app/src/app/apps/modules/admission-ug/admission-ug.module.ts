import { NgModule } from '@angular/core';
import { AdmissionUGRoutingModule } from './admission-ug-routing.module';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { UGHomeComponent } from './components/ug-home/ug-home.component';

@NgModule({
  declarations: [UGHomeComponent],
  imports: [AppsSharedModule, AdmissionUGRoutingModule]
})
export class AdmissionUGModule { }
