import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmissionGRService } from '../../../services/admission-gr.service';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
  checkResultData;
  messages;
  constructor(private admissionGRservice: AdmissionGRService, private router: Router) {

  }
  ngOnInit() {
    if (!this.admissionGRservice.checkResultData) {
      this.router.navigate(['/apps/admission-gr/admission-result/'])
    }
    this.checkResultData = this.admissionGRservice.checkResultData;
    
    if(this.admissionGRservice.messages){
      this.messages=this.admissionGRservice.messages;
    }
   
   // console.log("data",this.checkResultData,this.messages);
  }

}
