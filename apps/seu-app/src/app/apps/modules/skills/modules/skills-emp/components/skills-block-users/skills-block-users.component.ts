import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SkillsUserService } from '../../../../services/skill-user';
import { SkillsUsersManagementService } from '../../../../services/skill-users-management';

@Component({
  selector: 'app-skills-block-users',
  templateUrl: './skills-block-users.component.html',
  styleUrls: ['./skills-block-users.component.css']
})
export class SkillsBlockUserComponent implements OnInit {

  filter_text;
  students;
  isLoading;

  constructor(
    private skillsService: SkillsUsersManagementService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService,
  ) {
  }

  ngOnInit() {
    this.getBlockedStudents();
  }

  unblock(id){
    if (confirm(this.translate.instant('courses.delete_confirm'))) {
      this.isLoading = true;
      this.skillsService.removeUserFromBlock(id).subscribe(
        (response: any) => {
          if (response) {
            this.students = response.data;
          }
          this.isLoading = false;
          this.getBlockedStudents();
        },
        error => {
          this.isLoading = false;
        }
      )
    }
  }

  getBlockedStudents() {
    this.isLoading = true;
    this.skillsService.getBlockedStudents().subscribe(
      (response: any) => {
        if (response) {
          this.students = response.data;
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    )
  }

  blockNewUser() {
    this.router.navigate(['../block-new-std'], { relativeTo: this.route })
  }

}
