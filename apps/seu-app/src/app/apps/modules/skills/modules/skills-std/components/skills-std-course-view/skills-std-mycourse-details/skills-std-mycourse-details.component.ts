import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from 'src/app/apps/modules/skills/services/skill-std-course';

@Component({
  selector: 'app-skills-std-mycourse-details',
  templateUrl: './skills-std-mycourse-details.component.html',
  styleUrls: ['./skills-std-mycourse-details.component.css']
})
export class SkillsStdMycourseDetailsComponent implements OnInit {


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

  gotoList() {
    this.router.navigate(['../../../mycourses'], { relativeTo: this.route });
    return false;
  }
}
