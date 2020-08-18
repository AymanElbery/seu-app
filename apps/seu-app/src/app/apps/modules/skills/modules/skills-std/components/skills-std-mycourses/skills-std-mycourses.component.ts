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

  cancel(id) {
    this.isLoading = true;
    this.coursesService.cancel(this.courseID).subscribe(response => {
      if (response['status']) {
        this.coursesService.notifySucc('registerd_succ');
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

  excuse(id) {

  }

}
