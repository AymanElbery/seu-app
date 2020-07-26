import { NgModule } from '@angular/core';
import { SkillsCommonModule } from '../skills-common/skills-common.module';
import { SeucommonModule } from '../../../../../seucommon/seucommon.module';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';

import { RouterModule } from '@angular/router';
import { routes, componentDeclarations } from './skills-emp.common';
@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    SkillsCommonModule
  ]
})
export class SkillsEmpModule { }
