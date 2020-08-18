import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffCoursesService } from '../../../../services/skill-staff-course';

@Component({
  selector: 'app-skills-staff-mycourses',
  templateUrl: './skills-staff-mycourses.component.html',
  styleUrls: ['./skills-staff-mycourses.component.css']
})
export class SkillsStaffMycoursesComponent implements OnInit {

  coursesList = [];
  isLoading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: StaffCoursesService) {

  }

  ngOnInit() {
    this.getMyCourses();
  }

  getMyCourses() {
    this.isLoading = true;
    this.coursesService.mycourses().subscribe((response) => {
      this.coursesList = response['data'];
      this.isLoading = false;
    },err=>{
      this.coursesService.tryagain();
    });
  }

  details(id) {
    this.router.navigate(['../course-view/details/' + id], { relativeTo: this.route })
    return false;
  }
}
