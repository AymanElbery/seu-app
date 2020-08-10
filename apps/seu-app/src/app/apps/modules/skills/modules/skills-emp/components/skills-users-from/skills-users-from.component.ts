import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillsUsersManagementService } from '../../../../services/skill-users-management';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-users-from',
  templateUrl: './skills-users-from.component.html',
  styleUrls: ['./skills-users-from.component.css']
})
export class SkillsUsersFromComponent implements OnInit {

  isLoading = false;
  submitted = false;
  AddUserForm: FormGroup;
  instuctors = false;

  constructor(
    private fb: FormBuilder,
    private skillsUserService: SkillsUsersManagementService,
    private toastr: AppToasterService,
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.AddUserForm = this.fb.group({
      'NAME_AR': ['', [Validators.required]],
      'NAME_EN': ['', [Validators.required]],
      'SEU_EMAIL': ['', [Validators.required]], //, Validators.email
      'ROLE': ['', [Validators.required]],
      'ACTIVE': [''],
    });
  }

  ngOnInit() {
    if (document.location.href.indexOf("/instructors") !== -1) {
      this.instuctors = true;
      this.AddUserForm.controls['ROLE'].setValue("instructor");
    }

  }

  onSubmit() {
    if (this.AddUserForm.invalid) {
      return;
    }
    let data = this.AddUserForm.value;
    this.submitted = true;
    this.skillsUserService.addUser(data, this.instuctors).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            if (this.instuctors) {
              this.router.navigate(['../instructors-list'], { relativeTo: this.route });
            } else {
              this.router.navigate(['../users-list'], { relativeTo: this.route });
            }
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("users.success_request")
            }]);
          } else {
            this.toastr.push([{
              'type': 'error',
              'body': response.error
            }]);
          }
          this.isLoading = false;
          this.submitted = false;
        }
      },
      error => {
        this.isLoading = false;
        this.submitted = false;
      }
    );
  }

}
