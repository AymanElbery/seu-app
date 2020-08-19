import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skills-staff-course-view',
  templateUrl: './skills-staff-course-view.component.html',
  styleUrls: ['./skills-staff-course-view.component.css']
})
export class SkillsStaffCourseViewComponent implements OnInit {

  current = 'details';
  currentID;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentID = this.route.snapshot.children[0].params['id'];
    this.current = this.route.snapshot.children[0]['url'][0]['path']
  }
  redirectTo(code) {
    this.current = code;
    this.router.navigate(['../course-view/' + code + '/' + this.currentID], { relativeTo: this.route })
    return false;
  }
}
