import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { SkillsCommonModule } from './modules/skills-common/skills-common.module';
import { providerDeclarations, routes } from './skills.common';
import { RouterModule } from '@angular/router';


import { SkillsMenuComponent } from './components/menu/skills-menu/skills-menu.component';
import { SkillsEmpMenuComponent } from './components/menu/skills-emp-menu/skills-emp-menu.component';
import { SkillsStaffMenuComponent } from './components/menu/skills-staff-menu/skills-staff-menu.component';
import { SkillsStdMenuComponent } from './components/menu/skills-std-menu/skills-std-menu.component';
import { SkillsLandingComponent } from './components/skills-landing/skills-landing.component';
import { SkillsHomeComponent } from './components/skills-home/skills-home.component';
import { SkillServicesModule } from './services/skills-service.module';



@NgModule({
  declarations: [    SkillsLandingComponent, SkillsHomeComponent, SkillsMenuComponent,
    SkillsEmpMenuComponent, SkillsStaffMenuComponent, SkillsStdMenuComponent],
  imports: [
    SeucommonModule,
    SkillsCommonModule,
    SkillServicesModule,
    RouterModule.forChild(routes)

  ],
  providers: [providerDeclarations]
})
export class SkillsModule {
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}

