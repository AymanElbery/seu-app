import { Component, OnInit } from '@angular/core';
import { ResumeUserService } from '../../../services/resume-user';

@Component({
  selector: 'app-resume-admin-menu',
  templateUrl: './resume-admin-menu.component.html',
  styleUrls: ['./resume-admin-menu.component.css']
})
export class ResumeAdminMenuComponent implements OnInit {

  constructor(private user: ResumeUserService) { }
  is_admin = false;
  ngOnInit() {
    this.is_admin = this.user.is_admin();
  }

}
