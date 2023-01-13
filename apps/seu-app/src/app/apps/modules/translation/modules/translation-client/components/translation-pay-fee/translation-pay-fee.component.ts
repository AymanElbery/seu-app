import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientMyrequestsService } from '../../../../services/translation-client-myrequests';

@Component({
  selector: 'app-translation-pay-fee',
  templateUrl: './pay-fee.component.html',
  styleUrls: ['./pay-fee.component.css']
})
export class TranslationPayFeeComponent implements OnInit {
  loadAPI: Promise<any>;

  isLoading = true;
  paymentData;
  callbackURL;
  message = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<TranslationPayFeeComponent>, private payment: ClientMyrequestsService) {
    this.init();
    window['wpwlOptions'] = {
      locale: "ar",
      style: "plain"
    };
  }

  init() {
    this.isLoading = true;
    this.payment.checkout(this.data['REQ_ID']).subscribe(res => {
      this.message = res['messages'];
      if (res['status']) {
        let baseURL = window.location.protocol + '//' + window.location.host;
        this.callbackURL = (baseURL) + (( "/" + this.data['casllbackURL'] + res['data']['tid']).replace("//", "/"));
        this.isLoading = false;
        this.paymentData = res['data'];
        console.log(this.callbackURL);
        this.loadwidgetScript();
      } else {
        this.payment.notifyError(res['res_code']);
        this.isLoading = false;
        this.closeDiag();
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
  closeDiag() {
    this.dialogRef.close();
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
