import { NgModule } from '@angular/core';
import { AdmissionUGRoutingModule } from './admission-ug-routing.module';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { UGHomeComponent } from './components/ug-home/ug-home.component';
import { AdmissionLazyTransModule } from '../../admission.lazytrans.module';

@NgModule({
  declarations: [UGHomeComponent],
  imports: [AppsSharedModule, AdmissionUGRoutingModule,
    AdmissionLazyTransModule]
})
export class AdmissionUGModule { }
