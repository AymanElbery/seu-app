import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrls: ['./student-payment.component.css']
})
export class StudentPaymentComponent implements OnInit {
  @Input()
  url = 'https://apps.seu.edu.sa/fees/ug/index?sid=';
  urlSafe: SafeResourceUrl;
  sid;
  srcUrl;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sid = localStorage.getItem('sid');
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.sid);
    //console.log(this.urlSafe);
  }

}
