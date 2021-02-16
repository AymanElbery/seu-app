import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './contactus.common';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { RouterModule } from '@angular/router';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactusLazyTransModule } from './contactus.lazytrans.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RecaptchaModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    ContactusLazyTransModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot()
  ]
})
export class ContactusModule { }
