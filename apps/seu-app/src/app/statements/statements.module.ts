import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { providerDeclarations, routes } from './statements.common';
import { RouterModule } from '@angular/router';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { StatementsListComponent } from './components/statements-list/statements-list.component';


@NgModule({
  declarations: [
    StatementsListComponent, 
  ],
  imports: [
    CommonModule,
    SeucommonModule,  
    AppLazyTransModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    providerDeclarations
  ]
})
export class StatementsModule {
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}

