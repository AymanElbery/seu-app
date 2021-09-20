import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { WrittenFormsRoutingModule } from './written-forms-routing.module';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [ FormsComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    WrittenFormsRoutingModule,
    AppLazyTransModule
  ],
  providers: []
})
export class WrittenFormsModule { }
