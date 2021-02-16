import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientMyrequestsService } from '../../../../services/translation-client-myrequests';

@Component({
  selector: 'app-translation-pay-fee-callback',
  templateUrl: './pay-fee-callback.component.html',
  styleUrls: ['./pay-fee-callback.component.css']
})
export class TranslationPayFeeCheckComponent implements OnInit {
  tid = '';
  constructor(private route: ActivatedRoute, private payment: ClientMyrequestsService) {
    this.tid = this.route.snapshot.paramMap.get('tid');
  }

  message = [];

  isLoading = true;
  ngOnInit() {
    this.message = [];
    this.init();
  }
  init() {
    this.isLoading = true;
    this.payment.payment_status(this.tid).subscribe(res => {
      this.message = res['messages']['messages'];
      this.isLoading = false;
    });
  }

}
