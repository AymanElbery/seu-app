import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ResumeUserService } from '../../../services/resume-user';

@Component({
  selector: 'app-resume-menu',
  templateUrl: './resume-menu.component.html',
  styleUrls: ['./resume-menu.component.css']
})
export class ResumeMenuComponent implements OnInit, AfterContentInit {

  constructor(private userService: ResumeUserService) { }
  menuType = '';
  ngOnInit() {
    const currURL = document.location.href;
    if (this.userService.is_admin()) {
      this.menuType = 'admin';
    } else if(this.userService.is_manager()) {
      this.menuType = 'manager';
    } else{
      this.menuType = 'instructor';
    }
  }

  ngAfterContentInit() {
    window['WindowStartSerices']();
  }
}
