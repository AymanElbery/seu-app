import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SkillsUsersManagementService } from '../../../../services/skill-users-management';

@Component({
  selector: 'app-skills-std-skills-record',
  templateUrl: './student-skills-record.component.html',
  styleUrls: ['./student-skills-record.component.css']
})
export class StudentSkillsRecordComponent implements OnInit {

  classificationsList = [];
  isLoading = false;
  isdownloaing = false;
  std_id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private skillsUserService: SkillsUsersManagementService) {
      this.std_id = this.route.snapshot.params['std_id'];
  }

  ngOnInit() {
    this.getStdClassifications();
  }

  getStdClassifications() {
    this.isLoading = true;
    this.skillsUserService.stdClassifications(this.std_id, 0).subscribe((response) => {
      this.classificationsList = response['data']['data'];
      this.isLoading = false;
    });
  }

  print() {
    if (this.isdownloaing) {
      return false;
    }
    this.isdownloaing = true;
    this.skillsUserService.stdClassifications(this.std_id, 1).subscribe(response => {
      this.skillsUserService.downloadPDF(response);
      this.isdownloaing = false;
    }, err => {
      this.skillsUserService.tryagain();
      this.isdownloaing = false;
    });
    return false;
  }

}
