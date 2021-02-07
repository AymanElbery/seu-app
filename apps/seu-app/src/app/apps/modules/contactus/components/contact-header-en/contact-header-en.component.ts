import { Component, OnInit, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-contact-header-en',
  templateUrl: './contact-header-en.component.html',
  styleUrls: ['./contact-header-en.component.css']
})
export class ContactHeaderEnComponent implements OnInit, AfterViewInit, OnDestroy {

  @Output() updateLang: EventEmitter<any> = new EventEmitter();

  gdate;
  constructor() {
    this.gdate = moment().format("DD/MM/YYYY");
  }

  ngOnInit() {
    //console.log("Start EN");

  }
  changeLang() {
    this.updateLang.emit('ar');
    return false;
  }
  ngAfterViewInit() {
    window['bootsnavapply']();
  }
  ngOnDestroy() {
    // if (document.getElementById("navbar-menu"))
    //   document.getElementById("navbar-menu").remove();
    //      console.log("REMOVE EN");
  }
}