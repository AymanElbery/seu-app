import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from '../../../../services/skill-std-course';

@Component({
  selector: 'app-skills-std-mycourses',
  templateUrl: './skills-std-mycourses.component.html',
  styleUrls: ['./skills-std-mycourses.component.css']
})
export class SkillsStdMycoursesComponent implements OnInit {

  coursesList = [];
  isLoading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: StudentCoursesService) {

  }

  ngOnInit() {
    this.getMyCourses();
  }

  getMyCourses() {
    this.isLoading = true;
    this.coursesService.mycourses().subscribe((response) => {
      this.coursesList = response['data'];
      this.isLoading = false;
    });
  }

  details(id) {
    this.router.navigate(['../course-view/details/', id], { relativeTo: this.route });
    return false;
  }

  cancel(id) {
    this.isLoading = true;
    this.coursesService.cancel(id).subscribe(response => {
      if (response['status']) {
        this.coursesService.notifySucc(response['res_code']);
        this.getMyCourses();
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

  excuse(id) {
    this.isLoading = true;
    this.coursesService.excuse(id).subscribe(response => {
      if (response['status']) {
        this.coursesService.notifySucc(response['res_code']);
        this.getMyCourses();
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
  isdownloaing = false;
  loadings = {};
  printCert(crse_id,std_id) {
    this.isdownloaing = true;
    this.loadings[crse_id] = true;
    this.coursesService.printCerts(crse_id,std_id,true).subscribe(response => {
      if (response['status'] == false && response['res_code'] == 'no_rating') {
        this.coursesService.notifyError('must_rate_course');
        this.router.navigate(['../course-view/rating/', crse_id], { relativeTo: this.route });
        return false;
      }
      this.coursesService.downloadPDF(response);
      this.loadings[crse_id] = false;
      this.isdownloaing = false;
    }, err => {
      this.coursesService.tryagain();
      this.loadings[crse_id] = false;
      this.isdownloaing = false;

    });
    return false;
  }

}
