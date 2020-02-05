import { NgModule } from '@angular/core';

import { MasterOtherRequestsRoutingModule } from './master-other-requests-routing.module';
import { PersonalIDComponent } from './personal-id/personal-id.component.tns';
import { GraduateProfileComponent } from './graduate-profile/graduate-profile.component.tns';
import { ChangeCourseComponent } from './change-course/change-course.component.tns';
import { ChangeBranchComponent } from './change-branch/change-branch.component.tns';
import { AbsenceQueryComponent } from './absence-query/absence-query.component.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { NativeScriptLocalizeModule } from 'nativescript-localize/angular';
import { AddChangeBranchComponent } from './change-branch/diag/add-change-branch/add-change-branch.component.tns';
import { AddChangeCourseComponent } from './change-course/diag/add-change-course/add-change-course.component.tns';
import { AddPersonalIdComponent } from './personal-id/diag/add-personal-id/add-personal-id.component.tns';
import { GraduateProfileDetailComponent } from './graduate-profile/diag/graduate-profile-detail/graduate-profile-detail.component.tns';
import { AddGraduateProfileComponent } from './graduate-profile/diag/add-graduate-profile/add-graduate-profile.component.tns';

@NgModule({

  declarations: [AbsenceQueryComponent, AddChangeCourseComponent,
    ChangeBranchComponent,
    AddChangeBranchComponent,
    ChangeCourseComponent
    , PersonalIDComponent,

    GraduateProfileComponent,
    AddPersonalIdComponent,
    GraduateProfileDetailComponent,
    AddGraduateProfileComponent,


  ],
  imports: [
    MasterOtherRequestsRoutingModule,
    NativeScriptCommonModule,
    DropDownModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,
    NativeScriptLocalizeModule,
    AppTransModule
  ],
  entryComponents: [
    AddChangeBranchComponent,
    AddChangeBranchComponent,
    AddChangeBranchComponent,
    GraduateProfileDetailComponent
  ]
})
export class MasterOtherRequestsModule { }
