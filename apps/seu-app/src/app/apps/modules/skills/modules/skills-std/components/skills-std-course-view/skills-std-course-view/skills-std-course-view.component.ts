import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-skills-std-course-view',
  templateUrl: './skills-std-course-view.component.html',
  styleUrls: ['./skills-std-course-view.component.css']
})
export class SkillsStdCourseViewComponent implements OnInit {

  current = 'details';
  currentID;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentID = this.route.snapshot.children[0].params['id'];
    this.current = this.route.snapshot.children[0]['url'][0]['path'];
  }
  redirectTo(code) {
    this.current = code;
    this.router.navigate(['../course-view/' + code + '/' + this.currentID], { relativeTo: this.route })
    return false;
  }
}
