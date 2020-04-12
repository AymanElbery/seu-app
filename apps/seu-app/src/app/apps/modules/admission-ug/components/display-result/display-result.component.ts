import { Component, OnInit } from '@angular/core';
import { AdmisionUgService } from '../../services/admision-ug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
  studengtdata;
  message;
  notice;
  constructor(private admissionUgservice: AdmisionUgService, private router: Router) {
    
   }
   isLoading = false;
  ngOnInit() {
    this.isLoading = false;
    this.studengtdata=this.admissionUgservice.studentDataDetails;
    this.message=this.admissionUgservice.message;
    this.notice=this.admissionUgservice.notice;
    if(!this.studengtdata && !this.message){
      this.router.navigate(['/apps/admission-ug/admission-result/'])
    }
    
    this.isLoading = false;
    //console.log(this.message);
  }

}
