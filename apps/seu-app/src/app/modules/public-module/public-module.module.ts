import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { PublicRoutingModule } from './public-module-routing.module';
import { AppLazyTransModule } from '../../app.lazytrans.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentInfoComponent } from './components/student-info-component/student-info.component';
import { PublicLandingComponent } from './components/public-landing-component/public-landing.component';
import { PublicSharedModule } from './modules/apps-shared/public.shared.module';
import { SeucommonModule } from '../../seucommon/seucommon.module';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [
    StudentInfoComponent,
    PublicLandingComponent
  ],
  imports: [
    PublicRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    SeucommonModule,
    PublicSharedModule
  ],
  entryComponents: []
})
export class PublicModule { 
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}
