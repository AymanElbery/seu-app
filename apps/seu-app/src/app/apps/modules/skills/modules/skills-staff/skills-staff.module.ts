import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './skills-staff.common';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { RouterModule } from '@angular/router';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { SkillsCommonModule } from '../skills-common/skills-common.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    SkillsCommonModule,
    MatDialogModule
  ],
  entryComponents: [
    componentDeclarations,
  ],
})
export class SkillsStaffModule { }
