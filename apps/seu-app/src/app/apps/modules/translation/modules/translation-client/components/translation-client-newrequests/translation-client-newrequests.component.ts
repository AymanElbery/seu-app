import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientNewrequestsService } from '../../../../services/translation-client-newrequests';
import { TranslationUserService } from '../../../../services/translation-user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { client_config } from './../../config/config'
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation-client-newrequests',
  templateUrl: './translation-client-newrequests.component.html',
  styleUrls: ['./translation-client-newrequests.component.css']
})
export class TranslationClientNewrequestsComponent implements OnInit {

  isLoading = false;
  submitted = false;
  support_email;
  addRequestForm: FormGroup;
  // clientId;
  // clientName;
  // workEmail;
  // clientWork;
  showOtherFileType = false;
  showClientWorkPlace = false;
  fileName;
  FILE_PATH;
  ext;
  showFileName = false;

  sso;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: AppToasterService,
    private route: ActivatedRoute,
    private userService: TranslationUserService,
    private newrequestsService: ClientNewrequestsService,
    private translate: TranslateService
  ) {
    this.support_email = client_config.support_email;

    const user = this.userService.user;
    this.addRequestForm = this.fb.group({
      CLIENT_ID: [user['USER_ID']],
      CLIENT_NAME: [user['NAME']],
      CLIENT_WORK: [user['CLIENT_WORK']],
      CLIENT_EMAIL: [user['WORK_EMAIL']],
      TRANSLATE_FROM: ["", [Validators.required]],
      FILE_SECRET: ["", [Validators.required]],
      FILE_TYPE: ["", [Validators.required]],
      FILE_KEYWORDS: [""],
      FILE_WORDS_COUNT: [""],
      CLIENT_WORK_PLACE_TYPE: [""],
      CLIENT_WORK_PLACE: [""],
      FILE_DETAILS: [""],
    });
  }

  ngOnInit() {
    this.sso = this.userService.is_sso();
    if (this.sso) {
      this.addRequestForm.controls['CLIENT_WORK_PLACE_TYPE'].setValue('internal');
    } else {
      this.addRequestForm.controls['CLIENT_WORK_PLACE_TYPE'].setValue('external');
      this.showClientWorkPlace = true;
    }
  }

  changeFileType(e) {
    this.showOtherFileType = (e.target.value == "other") ? true : false;
  }
  changeClientWorkPlace(e) {
    this.showClientWorkPlace = (e.target.value == "external") ? true : false;
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.fileName = file.name;
    this.showFileName = true;
    this.ext = file.name.substring(file.name.lastIndexOf('.') + 1);
    if (!this.validateFile(file.name, this.ext)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("new_request_page.wrong_file") }]);
      return false;
    }
    if (!this.validateFileSize(file.size)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("new_request_page.wrong_file_size") }]);
      return false;
    }
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.FILE_PATH = reader.result;
  }

  validateFileSize(size) {
    return (size < 5000000) ? true : false;
  }

  validateFile(name: String, ext) {
    if (['pdf', 'xls', 'xlsx', 'doc', 'docx', 'pptx', 'pptm', 'ppt', 'png', 'jpeg', 'jpg'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addRequestForm.invalid) {
      return;
    }
    this.isLoading = true;
    let data = this.addRequestForm.value;
    data['FILE_PATH'] = this.FILE_PATH;
    data['FILE_EXT'] = this.ext;
    // data['CLIENT_ID'] = this.clientId;
    // data['CLIENT_NAME'] = this.clientName;
    // data['CLIENT_WORK'] = this.clientWork;
    // data['CLIENT_WORK'] = this.clientWork;
    //data['CLIENT_WORK_PLACE'] = 'internal';
    if (data['TRANSLATE_FROM'] == "ar-en") {
      data['TRANSLATE_FROM'] = "ar";
      data['TRANSLATE_TO'] = "en";
    } else {
      data['TRANSLATE_FROM'] = "en";
      data['TRANSLATE_TO'] = "ar";
    }
    this.newrequestsService.saveNewRequest(data).subscribe((response) => {
      this.toastr.push([{ type: 'success', 'body': this.translate.instant('new_request_page.request_saved') }]);
      this.isLoading = false;
      this.submitted = false;
      this.router.navigate(['../my-requests'], { relativeTo: this.route })
    }, err => {
      this.newrequestsService.tryagain();
      this.isLoading = false;
      this.submitted = false;
    });
  }
}
