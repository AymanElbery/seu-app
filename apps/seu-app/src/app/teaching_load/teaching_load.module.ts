import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {Teaching_loadRoutingModule} from './teaching_load-routing.module';
import {AppLazyTransModule} from '../app.lazytrans.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SeucommonModule} from '../seucommon/seucommon.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {DatepickerModule, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { Teaching_loadBlankComponent } from './components/teaching_load-blank/teaching_load-blank.component';
import { HodAllLoadsComponent } from './components/hod-all-loads/hod-all-loads.component';
import { DeanAllLoadsComponent } from './components/dean-all-loads/dean-all-loads.component';
import { RejectDeanReasonComponent } from './components/dean-all-loads/reject_dialogue/reject_dialogue.component';
import { DeanReasonComponent } from './components/hod-all-loads/notes_dialogue/notes_dialogue.component';
import { HRAllLoadsComponent } from './components/hr-all-loads/hr-all-loads.component';
import { FilterPipe } from './pipes/filter-pipe';

@NgModule({
  declarations: [
    Teaching_loadBlankComponent,
    HodAllLoadsComponent,
    DeanAllLoadsComponent,
    RejectDeanReasonComponent,
    DeanReasonComponent,
    HRAllLoadsComponent,
    FilterPipe,
  ],
  imports: [
    Teaching_loadRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    SeucommonModule,
    MatDialogModule,
    CKEditorModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  entryComponents: [
    RejectDeanReasonComponent,
    DeanReasonComponent,
  ]
})
export class Teaching_loadModule {
}
