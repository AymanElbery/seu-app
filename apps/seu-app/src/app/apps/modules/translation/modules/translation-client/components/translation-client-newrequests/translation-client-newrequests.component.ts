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
  addRequestForm : FormGroup;
  clientId;
  clientName;
  showOtherFileType = false;
  showClientWorkPlace= false;
  fileName;
  FILE_PATH;
  ext;
  showFileName = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: AppToasterService,
    private route: ActivatedRoute,
    private userService: TranslationUserService,
    private newrequestsService: ClientNewrequestsService,
    private translate: TranslateService
  ) {
    this.clientId = this.userService.user['USER_ID'];
    this.clientName = this.userService.user['USERNAME'];
    this.support_email = client_config.support_email;

    this.addRequestForm = this.fb.group({
      CLIENT_ID: [""],
      CLIENT_NAME: ["", [Validators.required]],
      CLIENT_WORK: ["", [Validators.required]],
      CLIENT_EMAIL: ["", [Validators.required]],
      TRANSLATE_FROM: ["", [Validators.required]],
      TRANSLATE_TO: ["", [Validators.required]],
      FILE_SECRET: ["", [Validators.required]],
      FILE_TYPE: ["", [Validators.required]],
      FILE_KEYWORDS: ["", [Validators.required]],
      FILE_WORDS_COUNT: ["", [Validators.required]],
      CLIENT_WORK_PLACE_TYPE: ["", [Validators.required]],
      CLIENT_WORK_PLACE: [""],
      FILE_DETAILS: [""],
    });
  }

  ngOnInit() {
    
  }

  changeFileType(e){
    this.showOtherFileType = (e.target.value == "other") ? true : false ;
  }
  changeClientWorkPlace(e){
    this.showClientWorkPlace = (e.target.value == "external") ? true : false ;
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

  validateFileSize(size){
    return (size < 5000000) ? true : false;
  }

  validateFile(name: String, ext) {
    if (['pdf', 'xls', 'xlsx', 'doc', 'docx', 'pptx', 'pptm', 'ppt', 'png', 'jpeg', 'jpg'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }

  onSubmit(){
    this.submitted = true;
    if (this.addRequestForm.invalid) {
        return;
    }
    this.isLoading = true;
    let data = this.addRequestForm.value;
    data['FILE_PATH'] = this.FILE_PATH;
    data['FILE_EXT'] = this.ext;
    data['CLIENT_ID'] = this.clientId;
    this.newrequestsService.saveNewRequest(data).subscribe((response) => {
      this.toastr.push([{ type: 'success', 'body': this.translate.instant('new_request_page.request_saved') }]);
        this.isLoading = false;
        this.router.navigate(['../my-requests'], { relativeTo: this.route })
    },err=>{
      this.newrequestsService.tryagain();
      this.isLoading = false;
    });
  }
}
