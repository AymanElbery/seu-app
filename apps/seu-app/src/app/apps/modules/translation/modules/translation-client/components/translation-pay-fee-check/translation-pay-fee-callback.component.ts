import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-translation-pay-fee-callback',
  templateUrl: './pay-fee-callback.component.html',
  styleUrls: ['./pay-fee-callback.component.css']
})
export class TranslationPayFeeCheckComponent implements OnInit {
  tid = '';
  constructor(private route: ActivatedRoute) {
    this.tid = this.route.snapshot.paramMap.get('tid');
  }
  ngOnInit() {
  }
}
