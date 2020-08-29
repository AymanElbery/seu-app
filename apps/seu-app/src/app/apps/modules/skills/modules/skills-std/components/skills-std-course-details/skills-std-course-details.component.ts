import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentCoursesService } from '../../../../services/skill-std-course';
import { empty } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skills-std-course-details',
  templateUrl: './skills-std-course-details.component.html',
  styleUrls: ['./skills-std-course-details.component.css']
})
export class SkillsStdCourseDetailsComponent implements OnInit {

  courseID;
  courseDetails;
  courseLects;
  isLoading = false;
  constructor(
    private sanitized: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: StudentCoursesService) { }

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
        this.isLoading = false;
      } else {
        this.gotoList();
      }

    });
  }

  register() {
    this.isLoading = true;
    this.coursesService.register(this.courseID).subscribe(response => {
      if (response['status']) {
        this.coursesService.notifySucc(response['res_code']);
        this.router.navigate(['../../mycourses'], { relativeTo: this.route });
      } else {
        this.coursesService.notifyError(response['res_code']);
      }
      this.isLoading = false;
    }, err => {
      this.coursesService.tryagain();

      this.isLoading = false;

    });
    return false;

  }

  gotoList() {
    this.router.navigate(['../../courses-list'], { relativeTo: this.route });
    return false;
  }

}
