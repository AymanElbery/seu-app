import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadershipService } from '../../services/leadership.service';

@Component({
  selector: 'app-leadership-app-agency-rate',
  templateUrl: './leadership-app-agency-rate.component.html',
  styleUrls: ['./leadership-app-agency-rate.component.css']
})
export class LeadershipAppAgencyRateComponent implements OnInit {
  currentID;
  current;
  Loading = false;
  currentApp;
  indicators;
  totalVal;
  saveBtnDisable = true;
  indicators_val;
  currentParent;
  isAgency = true;
  indicatorsReport;
  emps;
  type;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leadershipService: LeadershipService
  ) { 
  }

  ngOnInit() {
    this.currentID = this.route.snapshot.params['id'];
    this.currentParent = this.route.snapshot.parent['url'][0]['path'];
    if (this.currentParent == 'application-display') {
      this.type = 'admin';
    } else if(this.currentParent == 'interview-application-display') {
      this.type = 'interview';
    } else if(this.currentParent == 'agency-application-display') {
      this.type = 'agency';
    }
    this.loadApp();
  }

  loadApp() {
    this.Loading = true;
    this.leadershipService.get_app_by_id(this.currentID, this.type).subscribe((response => {
      this.currentApp = response['data'];
      if (this.type != 'agency') {
        this.loadIndecatorsReportForAdmin();
      }
      this.loadIndecators();
    }));
  }

  loadIndecators(){
    this.leadershipService.get_indicators(this.currentID, 'AGENCY').subscribe((response => {
      this.indicators = response['data']['indicators'];
      this.Loading = false;
      this.setTotalVal();
    }));
  }

  loadIndecatorsReportForAdmin(){
    this.leadershipService.get_indicators_report_for_admin(this.currentID, 'AGENCY').subscribe((response => {
      this.indicatorsReport = response['data']['indicators'];
      this.emps = response['data']['emps'];
      this.Loading = false;
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
      "AD_ID" : this.currentApp.AD_ID,
      "FILES_EVAL" : this.currentApp.FILES_EVAL,
      "INTERVIEW_EVAL" : this.currentApp.INTERVIEW_EVAL,
    };

    this.leadershipService.save_agency_indicators_rating(allData).subscribe((response => {
      if (response['status']) {
        this.Loading = false;
      }
    }));
  }

}