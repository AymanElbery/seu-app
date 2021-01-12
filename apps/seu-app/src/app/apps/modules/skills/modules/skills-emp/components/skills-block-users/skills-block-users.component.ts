import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

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
    private skillsCourseService: SkillsCourseService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService,
  ) {
  }

  ngOnInit() {
    this.getBlockedStudents();
  }

  getBlockedStudents() {
    this.isLoading = true;
    this.skillsCourseService.getAllCourses(1).subscribe(
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
