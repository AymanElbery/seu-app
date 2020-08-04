import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PaymentsRoutingModule } from './payments-routing.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { PaycallbackComponent } from './components/paycallback/paycallback.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdmissionLazyTransModule } from '../admission.lazytrans.module';
import { AppsSharedModule } from '../modules/apps-shared/apps.shared.module';
import { PayComponent } from './components/pay/pay.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [PaycallbackComponent, CheckoutComponent, PayComponent],
  imports: [
    PaymentsRoutingModule,
    AppsSharedModule,
    SeucommonModule,
    AdmissionLazyTransModule,
    MatDialogModule
  ],
  entryComponents: [PayComponent],
  exports: [CheckoutComponent,PaycallbackComponent],
  providers: [
  ]
})
export class PaymentsModule {
  constructor(private translate: TranslateService) {
    this.translate.use('ar');
  }
}
