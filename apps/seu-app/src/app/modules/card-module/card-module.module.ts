import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { CardRoutingModule } from './card-module-routing.module';
import { AppLazyTransModule } from '../../app.lazytrans.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestsComponent } from './components/requests-component/requests.component';
import { AddUnivCardComponent } from './components/requests-component/diag/add-univ-card/add-univ-card.component';
import { SeucommonModule } from '../../seucommon/seucommon.module';

@NgModule({
  declarations: [
    RequestsComponent,
    AddUnivCardComponent
  ],
  imports: [
    CardRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    SeucommonModule
  ],
  entryComponents: [RequestsComponent, AddUnivCardComponent]
})
export class CardModule { }
