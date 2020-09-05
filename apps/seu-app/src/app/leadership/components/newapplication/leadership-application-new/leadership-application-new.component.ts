import { Component, OnInit } from '@angular/core';
import { LeadershipService } from 'src/app/leadership/services/leadership.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-leadership-application-new',
  templateUrl: './leadership-application-new.component.html',
  styleUrls: ['./leadership-application-new.component.css']
})
export class LeadershipApplicationNewComponent implements OnInit {
  submitted = false;
  form: FormGroup;
  instructor;
  ad;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService

  ) {
    if (!this.leadershipService.currentAdd) {
      this.back();
    }
    this.ad = this.leadershipService.currentAdd;
    this.instructor = this.leadershipService.instructor;
  }

  ngOnInit() {
    this.form = this.fb.group({
      'PHONE': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'PLAN': ['', [Validators.required]],
      'CV': ['', [Validators.required]],
      'REASON': ['', [Validators.required]]
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    let data = this.form.value;
    data['ad_id'] = this.ad['ADS_PK'];
    this.leadershipService.application_create(data).subscribe((response) => {
      if (response['status']) {
        this.leadershipService.notifySucc(response['res_code']);
        this.myapps();
      } else {
        this.leadershipService.notifyError(response['res_code']);
      }
      this.submitted = false;
    },
      error => {
        this.submitted = false;
      }
    );
    return false;
  }

  back() {
    this.router.navigate(['../ads'], { relativeTo: this.route });
  }

  myapps() {
    this.router.navigate(['../../myapplications'], { relativeTo: this.route });
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  resetFileKey(key) {
    this.form.controls[key].setValue("");
  }
  fileKey = '';
  handleInputChange(e, key) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file) {
      this.resetFileKey(key);
      return false;
    }
    this.fileKey = key;
    if (!this.validateFile(file.name)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("leadership.applications.wrong_file") }]);
      return false;
    }
    if (!this.validateFileSize(file.size)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("leadership.applications.wrong_file_size") }]);
      return false;
    }
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.form.controls[this.fileKey].setValue(reader.result);
  }

  validateFileSize(size) {
    return (size < 5000000) ? true : false;
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (['pdf', 'xls', 'xlsx', 'doc', 'docx', 'pptx', 'pptm', 'ppt', 'zip'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }
}
