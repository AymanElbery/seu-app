import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-courses-students',
  templateUrl: './skills-courses-students.component.html',
  styleUrls: ['./skills-courses-students.component.css']
})
export class SkillsCoursesStudentsComponent implements OnInit {

  filter_text;
  students;
  isLoading;
  instuctors = false;
  constructor(
    private skillsCourseService: SkillsCourseService,
    private router: Router, private route: ActivatedRoute
  ) {
    this.getCoursesStudents();
  }

  ngOnInit() {
  }

  getCoursesStudents() {
    this.isLoading = true;
    this.skillsCourseService.getCoursesStudents().subscribe(
      (response: any) => {
        if (response) {
          this.students = response.data;
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    )
  }

}
