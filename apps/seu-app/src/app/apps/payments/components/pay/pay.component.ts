import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  loadAPI: Promise<any>;

  isLoading = true;
  paymentData;
  callbackURL;
  message = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<PayComponent>, private payment: PaymentsService) {
    this.init();
    window['wpwlOptions'] = {
      locale: "ar",
      style: "plain"
    };
  }

  init() {
    this.isLoading = true;
    this.payment.checkout(this.data['std_id'], this.data['app']).subscribe(res => {
      this.message = res['messages'];
      if (res['status']) {
        this.paymentData = res['data'];
        let baseURL = window.location.protocol + '//' + window.location.host;
        this.callbackURL = (baseURL + "/" + this.data['casllbackURL'] + "/" + res['data']['tid']).replace("//", "/");
        this.isLoading = false;
        this.loadwidgetScript();
      } else {
        this.isLoading = false;
      }
    });
  }

  loadwidgetScript() {
    this.loadAPI = new Promise((resolve) => {
      let node = this.loadScript(this.paymentData['widgetURL']);
      if (node) {
        node.onload = () => {
          resolve(true);
        };
      } else {
        resolve(true);
      }
    });
    this.loadAPI
      .then((flag) => {
        this.isLoading = false;
        //Do something when script is loaded and parsed by browser
      });
  }


  ngOnInit() {

  }
  loadScript(url) {
    let node = undefined;
    const script = document.getElementById('payments-widget')
    if (script) {
      script.parentNode.removeChild(script);
    }
    node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
    return node;
  }


}
