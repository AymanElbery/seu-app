import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ProjectComponent } from './project/project.component';
const routes: Routes = [
  { path: 'forms', component: FormsComponent, data: { title: 'الخدمات الإلكترونية | نماذج المراسلات الكتابية' } },
  { path: 'project', component: ProjectComponent, data: { title: 'الخدمات الإلكترونية | نماذج مكتب إدارة المشاريع' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WrittenFormsRoutingModule { }
