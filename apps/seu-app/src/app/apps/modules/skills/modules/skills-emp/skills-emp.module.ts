import { NgModule } from '@angular/core';
import { SkillsCommonModule } from '../skills-common/skills-common.module';
import { SeucommonModule } from '../../../../../seucommon/seucommon.module';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StdName } from './pipes/stdName.pipe';
import { RatingPipe } from './pipes/ratingPipe';



import { RouterModule } from '@angular/router';
import { routes, componentDeclarations } from './skills-emp.common';
@NgModule({
  declarations: [componentDeclarations, StdName, RatingPipe],
  imports: [
    MatDialogModule,
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CKEditorModule,
    SkillsCommonModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [
    componentDeclarations,
  ],
})
export class SkillsEmpModule { }
