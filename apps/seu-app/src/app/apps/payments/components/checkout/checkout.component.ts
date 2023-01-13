import { Component, OnInit, Input } from '@angular/core';
import { PaymentsService } from '../../services/payments.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PayComponent } from '../pay/pay.component';

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() std_id;
  @Input() app;

  message = [];
  amount = 0;
  brands_title = '';
  isLoading = true;
  constructor(private payment: PaymentsService
    , public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.message = [];
    this.amount = 0;
    this.init();
  }
  init() {
    this.isLoading = true;
    this.payment.status(this.std_id, this.app).subscribe(res => {
      this.message = res['messages'];
      if (res['status']) {
        this.amount = res['data']['amount'];
        this.brands_title = res['data']['brands_title'];
      }
      this.isLoading = false;
    });
  }

  pay() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    if (window.innerWidth < 992) {
      dialogConfig.width = '99%';
    } else {
      dialogConfig.width = '75%';
      dialogConfig.maxWidth = '550px';
    }
    dialogConfig.data = { std_id: this.std_id, app: this.app, casllbackURL: "apps/admission-ug/pay-callback" };

    this.dialog.open(PayComponent, dialogConfig);

    return false;
  }

}
