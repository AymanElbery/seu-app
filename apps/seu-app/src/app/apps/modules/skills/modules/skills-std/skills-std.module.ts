import { NgModule } from '@angular/core';
import { componentDeclarations, routes, stdEntryComponents } from '../skills-std/skills-std.common';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { RouterModule } from '@angular/router';
import { SkillsCommonModule } from '../skills-common/skills-common.module';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    SkillsCommonModule,
    MatDialogModule
  ],
  entryComponents: [stdEntryComponents]
})
export class SkillsStdModule { }
