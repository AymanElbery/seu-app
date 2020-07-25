import { NgModule } from '@angular/core';
import { SkillsCommonModule } from '../skills-common/skills-common.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { RouterModule } from '@angular/router';
import { routes, componentDeclarations } from './skills-emp.common';
@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    SkillsCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SkillsEmpModule { }
