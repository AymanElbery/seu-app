import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from '../skills-std/skills-std.common';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { RouterModule } from '@angular/router';
import { SkillsCommonModule } from '../skills-common/skills-common.module';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    SkillsCommonModule
  ]
})
export class SkillsStdModule { }
