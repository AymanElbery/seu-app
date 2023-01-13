import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';
import { ChangeBranchComponent } from './change-branch/change-branch.component';
import { ChangeCourseComponent } from './change-course/change-course.component';
import { ChangeCampMajorComponent } from './change-camp-major/change-camp-major.component';
import { PersonalIDComponent } from './personal-id/personal-id.component';
import { GraduateProfileComponent } from './graduate-profile/graduate-profile.component';
import { MasterGraduateAddressComponent } from './graduate-address/graduate-address.component';

const routes: Routes = [{ path: '', component: AbsenceQueryComponent },
{
  path: '',
  children: [
    { path: 'absencequery', component: AbsenceQueryComponent, data: { title: 'الخدمات الإلكترونية | الاستعلام عن الغيابات - ماجيستير' }  },
    { path: 'changebranch', component: ChangeBranchComponent , data: { title: 'الخدمات الإلكترونية | تغيير الفرع - ماجيستير' }},
    { path: 'changecourse', component: ChangeCourseComponent , data: { title: 'الخدمات الإلكترونية | تغيير التخصص - ماجيستير' }},
    { path: 'change-camp-major', component: ChangeCampMajorComponent, data: { title: 'الخدمات الإلكترونية | تغيير الفرع و التخصص - ماجيستير' } },
    { path: 'personalid', component: PersonalIDComponent },
    { path: 'graduateprofile', component: GraduateProfileComponent, data: { title: 'الخدمات الإلكترونية | طلب التخرج - ماجيستير' } },
    { path: 'address', component: MasterGraduateAddressComponent , data: { title: 'الخدمات الإلكترونية | عنوان خريج - ماجيستير' }},
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterOtherRequestsRoutingModule { }
