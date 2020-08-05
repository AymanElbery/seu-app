import { Component, OnInit, Input } from '@angular/core';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'app-payment-paycallback',
  templateUrl: './paycallback.component.html',
  styleUrls: ['./paycallback.component.css']
})
export class PaycallbackComponent implements OnInit {

  @Input() tid;
  @Input() app;

  message = [];
  constructor(private payment: PaymentsService) { }

  isLoading = true;
  ngOnInit() {
    this.message = [];
    this.init();
  }
  init() {
    this.isLoading = true;
    this.payment.inquery(this.tid, this.app).subscribe(res => {
      this.message = res['messages'];
      this.isLoading = false;
    });
  }

}
