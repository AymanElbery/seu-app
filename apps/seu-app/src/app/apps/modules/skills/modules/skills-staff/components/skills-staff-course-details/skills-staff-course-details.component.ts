import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffCoursesService } from '../../../../services/skill-staff-course';

@Component({
  selector: 'app-skills-staff-course-details',
  templateUrl: './skills-staff-course-details.component.html',
  styleUrls: ['./skills-staff-course-details.component.css']
})
export class SkillsStaffCourseDetailsComponent implements OnInit {

  courseID;
  courseDetails;
  courseLects;
  isLoading = false;
  constructor(
    private sanitized: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: StaffCoursesService) { }

  ngOnInit() {
    this.courseID = this.route.snapshot.params['id'];
    this.getCourse(this.courseID);
  }

  getCourse(courseID) {
    if (!courseID) {
      this.gotoList();
    }
    this.isLoading = true;
    this.coursesService.getCourseDetails(courseID).subscribe((response) => {
      if (response['status']) {
        this.courseDetails = response['data']['course'];
        this.courseDetails['DETAILS_AR'] = this.sanitized.bypassSecurityTrustHtml(this.courseDetails['DETAILS_AR']);
        this.courseDetails['DETAILS_EN'] = this.sanitized.bypassSecurityTrustHtml(this.courseDetails['DETAILS_EN']);

        this.courseDetails = response['data']['course'];
        this.courseLects = response['data']['lects'];
        this.isLoading = false;
      } else {
        this.gotoList();
      }

    });
  }

  gotoList() {
    this.router.navigate(['../../courses-list'], { relativeTo: this.route });
    return false;
  }

}
