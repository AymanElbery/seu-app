import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {Clean_dataRoutingModule} from './clean_data-routing.module';
import {AppLazyTransModule} from '../app.lazytrans.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SeucommonModule} from '../seucommon/seucommon.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {DatepickerModule, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { Clean_dataBlankComponent } from './components/clean_data-blank/clean_data-blank.component';
import { EmpDataComponent } from './components/emp-data/emp-data.component';
import { FilterPipe } from './pipes/filter-pipe';

@NgModule({
  declarations: [
    Clean_dataBlankComponent,
    EmpDataComponent,
    FilterPipe,
  ],
  imports: [
    Clean_dataRoutingModule,
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
