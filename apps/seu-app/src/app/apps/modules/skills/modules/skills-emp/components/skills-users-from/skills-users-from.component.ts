import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillsUserService } from './../../../../services/skill-user';
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
  AddUserForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private skillsUserService: SkillsUserService,
    private toastr: AppToasterService,
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.AddUserForm = this.fb.group({
      'NAME_AR': ['', [Validators.required]],
      'NAME_EN': ['', [Validators.required]],
      'SEU_EMAIL': ['', [Validators.required, Validators.email]],
      'ROLE': ['', [Validators.required]],
      'ACTIVE': [''],
    });
  }

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.AddUserForm.invalid) {
      return;
    }
    let data = this.AddUserForm.value;
    this.submitted = true;
    this.skillsUserService.addUser(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.router.navigate(['../users-list'], { relativeTo: this.route });
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
