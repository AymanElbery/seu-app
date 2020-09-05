import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeuLoaderComponent } from '../seucommon/seu-loader/seu-loader.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { PrintButtonDirective } from './print-button.directive';
import { ServiceHeaderComponent } from './service-header/service-header.component';
import { AppTransModule } from '../app.trans.module';
import { DialogPlayerComponent } from './dialog-player/dialog-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { AlphabateOnlyDirective } from './alphabate-only.directive';
import { SeuFlashComponent } from './seu-flash/seu-flash.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@NgModule({
  declarations: [SeuLoaderComponent, PrintButtonDirective, ServiceHeaderComponent, DialogPlayerComponent,
    AlphabateOnlyDirective, SeuFlashComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgSelectModule,
    RouterModule.forChild([]),
    AppLazyTransModule
  ],
  entryComponents: [DialogPlayerComponent],
  exports: [SeuLoaderComponent, PrintButtonDirective, ServiceHeaderComponent, AlphabateOnlyDirective,
    SeuFlashComponent, NgSelectModule, HeaderComponent, FooterComponent]
})
export class SeucommonModule {
  
}
