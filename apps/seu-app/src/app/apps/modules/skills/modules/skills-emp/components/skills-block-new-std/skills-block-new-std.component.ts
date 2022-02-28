import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillsUsersManagementService } from '../../../../services/skill-users-management';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SkillsLookupsService } from '../../../../services/skill-lookups';

@Component({
  selector: 'app-skills-block-new-user',
  templateUrl: './skills-block-new-std.component.html',
  styleUrls: ['./skills-block-new-std.component.css']
})
export class SkillsBlockNewStdComponent implements OnInit {

  isLoading = false;
  submitted = false;
  AddUserForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private skillsUserService: SkillsUsersManagementService,
    private toastr: AppToasterService,
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.AddUserForm = this.fb.group({
      'STD_ID': ['', [Validators.required]],
      'START_DATE': ['', [Validators.required]],
      'END_DATE': ['', [Validators.required]],
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
    this.skillsUserService.blockNewUser(data).subscribe(
        (response: any) => {
          this.isLoading = true;
          if (response) {
            if (response.status) {
                this.router.navigate(['../block-users'], { relativeTo: this.route });
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
