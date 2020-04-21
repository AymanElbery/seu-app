import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { EnquriesRoutingModule } from './enquries-routing.module';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './components/list-component/list.component';
import { AddAnswerComponent } from './components/add-answer/add-answer.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ListComponent,
    AddAnswerComponent
  ],
  imports: [
    EnquriesRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [AddAnswerComponent],
})
export class EnquriesModule { }
