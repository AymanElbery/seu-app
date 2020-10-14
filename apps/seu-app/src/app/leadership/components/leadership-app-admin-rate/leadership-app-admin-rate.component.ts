import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadershipService } from '../../services/leadership.service';

@Component({
  selector: 'app-leadership-app-admin-rate',
  templateUrl: './leadership-app-admin-rate.component.html',
  styleUrls: ['./leadership-app-admin-rate.component.css']
})
export class LeadershipAppAdminRateComponent implements OnInit {
  currentID;
  current;
  Loading = false;
  currentApp;
  showRate;
  indicators;
  DEVELOPMENT;
  REASEARCH;
  COMMUNITY;
  COMMITTEES;
  TRAINING;
  SCALE;
  POSITIONS;
  totalVal;
  saveBtnDisable = true;
  indicators_val;
  currentParent;
  isAdmin = true;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leadershipService: LeadershipService
  ) { 
    
  }

  ngOnInit() {
    this.currentID = this.route.snapshot.params['id'];
    this.currentParent = this.route.snapshot.parent['url'][0]['path'];
    if (this.currentParent != 'application-display') {
      this.isAdmin = false;
    }
    this.loadApp();
  }

  loadApp() {
    this.Loading = true;
    this.leadershipService.get_app_by_id(this.currentID).subscribe((response => {
      this.currentApp = response['data'];
      if (new Date(this.currentApp.ADS_END_DATE) > new Date()) {
        this.showRate = false;
      } else {
        this.showRate = true;
      }
      this.loadIndecators();
    }));
  }

  loadIndecators(){
    let empId = (this.isAdmin) ? 1 : 0;
    this.leadershipService.get_indicators(this.currentID, 'FILES', empId).subscribe((response => {
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
        "GRADE_BASE" : element.GRADE_BASE
      });
    });
    let allData = {
      "data" : data,
      "total" : [{
        "FILES_EVAL" : this.totalVal
      }],
    };

    this.leadershipService.save_files_indicators_rating(allData).subscribe((response => {
      if (response['status']) {
        this.Loading = false;
      }
    }));
  }

}