import { NgModule } from '@angular/core';
import { SkillsCommonModule } from '../skills-common/skills-common.module';
import { SeucommonModule } from '../../../../../seucommon/seucommon.module';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatDialogModule } from '@angular/material/dialog';



import { RouterModule } from '@angular/router';
import { routes, componentDeclarations } from './skills-emp.common';
@NgModule({
  declarations: [componentDeclarations],
  imports: [
    MatDialogModule,
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CKEditorModule,
    SkillsCommonModule
  ],
  entryComponents: [
    componentDeclarations,
  ],
})
export class SkillsEmpModule { }
