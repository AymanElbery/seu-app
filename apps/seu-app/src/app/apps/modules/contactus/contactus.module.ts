import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './contactus.common';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { RouterModule } from '@angular/router';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactusLazyTransModule } from './contactus.lazytrans.module';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    ContactusLazyTransModule
  ]
})
export class ContactusModule { }
