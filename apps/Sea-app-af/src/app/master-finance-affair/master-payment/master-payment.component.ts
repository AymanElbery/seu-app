import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-master-payment',
  templateUrl: './master-payment.component.html',
  styleUrls: ['./master-payment.component.css']
})
export class MasterPaymentComponent implements OnInit {

  @Input()
  url = 'https://apps.seu.edu.sa/fees/gr/index?sid=';
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
