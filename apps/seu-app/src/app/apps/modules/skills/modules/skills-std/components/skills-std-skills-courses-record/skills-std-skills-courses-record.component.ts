import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from '../../../../services/skill-std-course';

@Component({
  selector: 'app-skills-std-skills-courses-record',
  templateUrl: './skills-std-skills-courses-record.component.html',
  styleUrls: ['./skills-std-skills-courses-record.component.css']
})
export class SkillsStdSkillsCoursesRecordComponent implements OnInit {

  classificationsList = [];
  isLoading = false;
  isdownloaing = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: StudentCoursesService) {

  }

  ngOnInit() {
    this.getMyClassifications();
  }

  getMyClassifications() {
    this.isLoading = true;
    this.coursesService.myskillsclassifications().subscribe((response) => {
      this.classificationsList = response['data']['data'];
      this.isLoading = false;
    });
  }

  print() {
    if (this.isdownloaing) {
      return false;
    }
    this.isdownloaing = true;
    this.coursesService.myskillsclassifications(1).subscribe(response => {
      this.coursesService.downloadPDF(response);
      this.isdownloaing = false;
    }, err => {
      this.coursesService.tryagain();
      this.isdownloaing = false;
    });
    return false;
  }

}
