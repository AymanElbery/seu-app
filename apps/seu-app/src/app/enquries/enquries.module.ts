import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { EnquriesRoutingModule } from './enquries-routing.module';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './components/list-component/list.component';
import { ReplyComponent } from './components/reply-component/reply.component';
import { UnReplyComponent } from './components/unreply-component/unreply.component';
import { AddAnswerComponent } from './components/add-answer/add-answer.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import { GetName } from './pipes/getName.pipe';


@NgModule({
  declarations: [
    ListComponent,
    ReplyComponent,
    UnReplyComponent,
    AddAnswerComponent,
    GetName
  ],
  imports: [
    EnquriesRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxPaginationModule
  ],
  entryComponents: [AddAnswerComponent],
})
export class EnquriesModule { }
