import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SkillsUserService } from '../../services/skill-user';

@Component({
  selector: 'app-skills-user',
  template: ''
})
export class SkillsUseromponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private userService: SkillsUserService) { }
  ngOnInit() {

    const role = this.userService.user['ROLE'];
    let url = '';
    if (this.userService.is_instructor()) {
      url = '../staff';
    } else if (this.userService.is_emp()) {
      url = '../emp';
    }
    this.router.navigate([url], { relativeTo: this.route });

  }

}
