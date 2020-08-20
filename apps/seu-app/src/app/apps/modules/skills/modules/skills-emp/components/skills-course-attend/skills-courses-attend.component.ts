import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';

import {ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-skills-courses-attend',
  templateUrl: './skills-courses-attend.component.html',
  styleUrls: ['./skills-courses-attend.component.css'],
  providers: [DatePipe]
})
export class SkillsCoursesAttendComponent implements OnInit {
  
  isLoading = false;
  course_id;
  appointments;
  students;
  appStds;
  resultArr;

  constructor(
    private skillsCourseService: SkillsCourseService,
    private route: ActivatedRoute
  ) {
    this.course_id = this.route.snapshot.params['id'];
    this.getAppStd();
  }

  ngOnInit() {
    
  }

  getAppStd(){
    let data = {
      'ID': this.course_id,
    };
    this.isLoading = true;
    this.skillsCourseService.getAppStd(data).subscribe(
      (response: any) => {
        if (response) {
          this.students     = response.data.students;
          this.appointments = response.data.appointments  ;
          this.appStds      = response.data.result  ;
          this.isLoading = false;
        }
      }
    );
  }

}
