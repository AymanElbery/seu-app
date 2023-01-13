import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './skills-staff.common';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { RouterModule } from '@angular/router';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { SkillsCommonModule } from '../skills-common/skills-common.module';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    SkillsCommonModule,
    MatDialogModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [
    componentDeclarations,
  ],
})
export class SkillsStaffModule { }
