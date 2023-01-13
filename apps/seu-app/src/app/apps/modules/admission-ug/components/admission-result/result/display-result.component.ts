import { Component, OnInit } from '@angular/core';
import { AdmissionUGService } from '../../../services/admission-ug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
  checkResultData;
  constructor(private admissionUgservice: AdmissionUGService, private router: Router) {

  }
  ngOnInit() {
    if (!this.admissionUgservice.checkResultData) {
      this.router.navigate(['/apps/admission-ug/admission-result/'])
    }
    this.checkResultData = this.admissionUgservice.checkResultData;
  }

}
