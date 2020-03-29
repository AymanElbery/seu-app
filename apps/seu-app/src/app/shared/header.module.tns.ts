import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  imports:[NativeScriptCommonModule],
  declarations: [HeaderComponent],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
