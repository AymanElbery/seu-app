import { NgModule } from '@angular/core';
import { componentDeclarations, routes } from './resume-instructor.common';
import { SeucommonModule } from '../../../../../seucommon/seucommon.module';
import { RouterModule } from '@angular/router';
import { AppsSharedModule } from '../../../apps-shared/apps.shared.module';
import { ResumeCommonModule } from '../resume-common/resume-common.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RouterModule.forChild(routes),
    ResumeCommonModule,
    MatDialogModule
  ],
  entryComponents: [
    componentDeclarations,
  ],
})
export class ResumeInstructorModule { }
