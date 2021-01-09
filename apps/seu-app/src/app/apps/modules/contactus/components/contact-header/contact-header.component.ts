import { Component, OnInit, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import * as HijrahDate from 'hijrah-date'

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.css']
})
export class ContactHeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Output() updateLang: EventEmitter<any> = new EventEmitter();

  hdate;
  constructor() {
    let x = new HijrahDate();
    this.hdate = x.format('d MMMM yyyy هـ', 'ar');
  }

  ngOnInit() {
    console.log("Start ar");

  }
  changeLang() {
    this.updateLang.emit('en');
    return false;
  }
  ngAfterViewInit() {
    window['bootsnavapply']();
  }
  ngOnDestroy() {
    // if (document.getElementById("navbar-menu"))
    //   document.getElementById("navbar-menu").remove();
    //  console.log("REMOVE AR");
  }

}
