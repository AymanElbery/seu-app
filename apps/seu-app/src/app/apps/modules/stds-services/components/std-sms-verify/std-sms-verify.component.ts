import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-std-sms-verify',
  templateUrl: './std-sms-verify.component.html',
  styleUrls: ['./std-sms-verify.component.css']
})
export class StdSmsVerifyComponent implements OnInit {

  
  form: FormGroup;
  submitted = false;
  constructor(private stdService: StudentService, private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute, private globalService: GlobalService) {

    this.form = fb.group({
      'code': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
    this.stdService.send_verify_code().subscribe(response => {
      if (!response['status']) {
        this.stdService.notifyError(response['res_code']);
        this.redirectToLogin();
        return false;
      }
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
    this.stdService.sms_verify(this.form.value).subscribe(response => {
      if (!response['status']) {
        this.stdService.notifyError(response['res_code']);
        this.submitted = false;
        return false;
      }
      this.stdService.LoggedInUser['TOKEN_VERIFIED'] = 2;
      this.router.navigate(['../docs'], { relativeTo: this.route });
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
