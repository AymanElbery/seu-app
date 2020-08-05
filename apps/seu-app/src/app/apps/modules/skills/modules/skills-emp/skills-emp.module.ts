import { NgModule } from '@angular/core';
import { SkillsCommonModule } from '../skills-common/skills-common.module';
import { SeucommonModule } from '../../../../../seucommon/seucommon.module';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { RouterModule } from '@angular/router';
import { routes, componentDeclarations } from './skills-emp.common';
@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    SkillsCommonModule
  ]
})
export class SkillsEmpModule { }
