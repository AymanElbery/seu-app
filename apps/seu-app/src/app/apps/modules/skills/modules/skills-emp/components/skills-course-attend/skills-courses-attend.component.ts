import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { ActivatedRoute } from '@angular/router';
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

  getAppStd() {
    let data = {
      'ID': this.course_id,
    };
    this.isLoading = true;
    this.skillsCourseService.getAppStd(data).subscribe(
      (response: any) => {
        if (response) {
          this.students = response.data.students;
          this.appointments = response.data.appointments;
          this.appStds = response.data.result;
          this.isLoading = false;
        }
      }
    );
  }

  loadingsAtt = {};
  isdownloaingAtt = false;

  printAttend(std_id) {
    let crse_id = this.course_id;
    this.isdownloaingAtt = true;
    this.loadingsAtt[crse_id] = true;
    this.skillsCourseService.printAttendAdmin(crse_id,std_id).subscribe(response => {
      
      if (response['status'] == false && response['res_code'] == 'no_attending') {
        this.skillsCourseService.notifyError('must_attend_course');
        this.loadingsAtt[crse_id] = false;
        this.isdownloaingAtt = false;
        return false;
      }
      this.skillsCourseService.downloadPDF(response, "attend_certificate.pdf");
      this.loadingsAtt[crse_id] = false;
      this.isdownloaingAtt = false;
    }, err => {
      this.skillsCourseService.tryagain();
      this.loadingsAtt[crse_id] = false;
      this.isdownloaingAtt = false;

    });
    return false;
  }
}
