import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skills-course-view',
  templateUrl: './skills-course-view.component.html',
  styleUrls: ['./skills-course-view.component.css']
})
export class SkillsCourseViewComponent implements OnInit {
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
    this.router.navigate(['../courses-view/' + code + '/' + this.currentID], { relativeTo: this.route })
    return false;
  }

}
