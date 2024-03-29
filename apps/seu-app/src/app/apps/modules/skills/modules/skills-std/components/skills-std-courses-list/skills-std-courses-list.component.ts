import { Component, OnInit } from '@angular/core';
import { StudentCoursesService } from '../../../../services/skill-std-course';
import { SkillsUserService } from '../../../../services/skill-user';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-skills-std-courses-list',
  templateUrl: './skills-std-courses-list.component.html',
  styleUrls: ['./skills-std-courses-list.component.css']
})
export class SkillsStdCoursesListComponent implements OnInit {

  coursesList = [];
  isLoading = false;
  checkBlock;
  block_record;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: StudentCoursesService,
    private userService: SkillsUserService,
    ) { 
        
    }

  ngOnInit() {
    this.getCourses();
  }
  stripedHtml(htmlString) {
    if (!htmlString)
      return '';
    return htmlString.replace(/<[^>]+>/g, '')
  }

  getCourses() {
    this.isLoading = true;
    this.coursesService.getAllCourses().subscribe((response) => {
      this.coursesList = response['data']['courses'];
      this.checkBlock = response['data']['checkBlock'];
      this.block_record = response['data']['block_record'];
      this.isLoading = false;
    });
  }

  details(id) {
    this.router.navigate(['../course-details/', id], { relativeTo: this.route });
    return false;
  }

  register() {

  }

}
