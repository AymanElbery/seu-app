import { Component, OnInit } from '@angular/core';
import { AdmissionUGService } from '../../services/admission-ug.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-fee-callback',
  templateUrl: './pay-fee-callback.component.html',
  styleUrls: ['./pay-fee-callback.component.css']
})
export class PayFeeCheckComponent implements OnInit {
  tid = '';
  constructor(private route: ActivatedRoute) {
    this.tid = this.route.snapshot.paramMap.get('tid');
  }

  ngOnInit() {
  }

}
