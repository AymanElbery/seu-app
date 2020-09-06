import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-services-verify',
  templateUrl: './services-verify.component.html',
  styleUrls: ['./services-verify.component.css']
})
export class ServicesVerifyComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  constructor(private stdService: StudentService, private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute, private globalService: GlobalService) {

    if (!stdService.login_std_id) {
      this.redirectToLogin();
    }
    this.form = fb.group({
      'std_id': [stdService.login_std_id, [Validators.required]],
      'code': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  ngOnInit() {

  }

  redirectToLogin() {
    this.router.navigate(['../login'], { relativeTo: this.route });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    this.stdService.verify(this.form.value).subscribe(response => {
      if (!response['status']) {
        this.stdService.notifyError(response['res_code']);
        this.submitted = false;
        return false;
      }
      this.globalService.setItem(this.stdService.tokenKey, response['data']["token"]);
      //this.globalService.setItem(this.stdService.userKey, JSON.stringify(response["data"]["student"]));
      this.stdService.LoggedInToken = response['data']["token"]
      this.stdService.LoggedInUser = response["data"]["student"];
      this.stdService.pushuserLoaded();
      this.router.navigate(['../'], { relativeTo: this.route });
    }, error => {
      this.stdService.tryagain();
      this.submitted = false;
    });
  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
