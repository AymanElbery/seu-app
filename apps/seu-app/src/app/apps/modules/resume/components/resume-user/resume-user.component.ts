import { Component, OnInit } from '@angular/core';
import { ResumeUserService } from '../../services/resume-user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume-user',
  templateUrl: './resume-user.component.html',
  styleUrls: ['./resume-user.component.css']
})
export class ResumeUserComponent implements OnInit {

  constructor(private user: ResumeUserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkUser();
    this.user.userHasLoaded.subscribe(() => {
      this.checkUser();
    });
  }

  checkUser() {
    const role = this.user.user['ROLE'];
    let url = '';
    if (this.user.is_instructor()) {
      url = '../instructor/my-requests';
    } else if(this.user.is_manager()) {
      url = '../manager/my-requests';
    }else{
      url = '../admin/admins';
    }
    this.router.navigate([url], { relativeTo: this.route });
  }

}
