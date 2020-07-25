import { NgModule } from '@angular/core';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { SkillsLandingComponent } from './components/skills-landing/skills-landing.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsCommonModule } from './modules/skills-common/skills-common.module';
import { TranslateService } from '@ngx-translate/core';
import { SkillsFooterComponent } from './components/skills-footer/skills-footer.component';
import { SkillsHomeComponent } from './components/skills-home/skills-home.component';
import { SkillsHeaderComponent } from './components/skills-header/skills-header.component';

@NgModule({
  declarations: [SkillsLandingComponent, SkillsHeaderComponent, SkillsFooterComponent, SkillsHomeComponent],
  imports: [
    SeucommonModule,
    SkillsCommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule {
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}

