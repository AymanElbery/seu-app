import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffCoursesService } from '../../../../services/skill-staff-course';

@Component({
  selector: 'app-skills-staff-course-students',
  templateUrl: './skills-staff-course-students.component.html',
  styleUrls: ['./skills-staff-course-students.component.css']
})
export class SkillsStaffCourseStudentsComponent implements OnInit {

  stdsList = [];
  courseID;
  isLoading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: StaffCoursesService) {

    this.courseID = this.route.snapshot.params['id'];

  }

  ngOnInit() {
    this.getCourseStudents();
  }

  getCourseStudents() {
    this.isLoading = true;
    this.coursesService.getCourseStudents(this.courseID).subscribe((response) => {
      this.stdsList = response['data'];
      this.isLoading = false;
    }, err => {
      this.coursesService.tryagain();
    });
  }

}
