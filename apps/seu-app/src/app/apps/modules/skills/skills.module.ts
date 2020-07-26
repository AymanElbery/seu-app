import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { SkillsCommonModule } from './modules/skills-common/skills-common.module';
import { providerDeclarations, routes, componentDeclarations } from './skills.common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    SkillsCommonModule,
    RouterModule.forChild(routes)

  ],
  providers : [providerDeclarations]
})
export class SkillsModule {
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}

