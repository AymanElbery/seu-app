import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { WrittenFormsRoutingModule } from './written-forms-routing.module';
import { FormsComponent } from './forms/forms.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ 
    FormsComponent,
    ProjectComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    WrittenFormsRoutingModule,
    AppLazyTransModule
  ],
  providers: []
})
export class WrittenFormsModule { }
