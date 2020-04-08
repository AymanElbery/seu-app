import { NgModule } from '@angular/core';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { AdmissionGRRoutingModule } from './admission-gr-routing.module';
import { GRHomeComponent } from './components/gr-home/gr-home.component';
import { AdmissionLazyTransModule } from '../../admission.lazytrans.module';

@NgModule({
  declarations: [GRHomeComponent],
  imports: [AppsSharedModule, AdmissionGRRoutingModule,
    AdmissionLazyTransModule
  ]
})
export class AdmissionGRModule { }
