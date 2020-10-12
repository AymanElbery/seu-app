import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadershipService } from '../../services/leadership.service';

@Component({
  selector: 'app-leadership-app-interview-rate',
  templateUrl: './leadership-app-interview-rate.component.html',
  styleUrls: ['./leadership-app-interview-rate.component.css']
})
export class LeadershipAppInterviewRateComponent implements OnInit {
  currentID;
  current;
  Loading = false;
  currentApp;
  indicators;
  totalVal;
  saveBtnDisable = true;
  indicators_val;
  currentParent;
  isInterviewer = true;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leadershipService: LeadershipService
  ) { 
  }

  ngOnInit() {
    this.currentID = this.route.snapshot.params['id'];
    this.currentParent = this.route.snapshot.parent['url'][0]['path'];
    if (this.currentParent != 'interview-application-display') {
      this.isInterviewer = false;
    }
    this.loadApp();
  }

  loadApp() {
    this.Loading = true;
    this.leadershipService.get_app_by_id(this.currentID).subscribe((response => {
      this.currentApp = response['data'];
      this.loadIndecators();
    }));
  }

  loadIndecators(){
    this.leadershipService.get_indicators(this.currentID, 'INTERVIEW').subscribe((response => {
      this.indicators = response['data']['indicators'];
      this.Loading = false;
      this.setTotalVal();
    }));
  }

  changeRadio(row, e){
    row.GRADE = (e.target.value == 0) ? 0 : parseFloat(e.target.value) * row.IND_GRADE;
    row.GRADE_BASE = e.target.value;
    this.saveBtnDisable = false;
    this.setTotalVal();
  }

  setTotalVal(){
    this.totalVal = 0;
    this.indicators.forEach(element => {
      if (element.GRADE != null) {
        this.totalVal += parseFloat(element.GRADE); 
      }
    });
  }

  saveRate(){ 
    this.Loading = true;
    let data = [];
    this.indicators.forEach(element => {
      data.push({
        "APP_ID" : this.currentApp.APP_ID,
        "IND_CODE" : element.IND_CODE,
        "GRADE" : element.GRADE,
        "GRADE_BASE" : element.GRADE_BASE,
      });
    });
    let allData = {
      "data" : data,
      "total" : [{
        "INTERVIEW_EVAL" : this.totalVal
      }],
    };

    this.leadershipService.save_interview_indicators_rating(allData).subscribe((response => {
      if (response['status']) {
        this.Loading = false;
      }
    }));
  }

}