import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { Committe_confirmRoutingModule } from './committe_confirm-routing.module';
import {AppLazyTransModule} from '../app.lazytrans.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SeucommonModule} from '../seucommon/seucommon.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {DatepickerModule, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { Committe_confirmBlankComponent } from './components/committe_confirm-blank/committe_confirm-blank.component';
import { CommitteComponent } from './components/committe/committe.component';

@NgModule({
  declarations: [
    Committe_confirmBlankComponent,
    CommitteComponent,
  ],
  imports: [
    Committe_confirmRoutingModule,
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
    
  ]
})
export class Clean_dataModule {
}
