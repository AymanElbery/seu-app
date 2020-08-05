import { Component, OnInit } from '@angular/core';
import { AdmissionUGService } from '../../services/admission-ug.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  subscriptionsdata: Subscription;
  uploaddata: any;
  messages = [];
  messageNodata;
  AddReqForm: FormGroup;
  submitted = false;
  isLoading = false;
  attachemngtss;
  upload_mother_id;
  constructor(private toastr: AppToasterService, private translate: TranslateService, private admissionUgservice: AdmissionUGService, private router: Router, private fb: FormBuilder, public globalService: GlobalBaseService) {
    this.AddReqForm = fb.group({
      'token': [this.admissionUgservice.LoggedInToken],
      'attachement': ['', [Validators.required]],
      'mother_id': ['']
    });

  }

  ngOnInit() {
    this.getuplaoddocs();
  }
  onFormSubmit() {
    if (!this.AddReqForm.controls['attachement'].value) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("Attachementrequired") }]);
      return false;
    }
    this.submitted = true;
    this.messages = [];
    this.admissionUgservice.savedocs(this.AddReqForm.value).subscribe(savadocs => {
      if (savadocs['status']) {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('docs_saved') }]);
        this.getuplaoddocs();
      } else if (!savadocs['status']) {
        this.toastr.push(savadocs['messages']);
      }
      this.submitted = false;
    }, error => {
      this.toastr.tryagain();
      this.submitted = false;
    }
    );
  }

  handleFileInput(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    // console.log("file",file);
    if (!this.validateFile(file.name)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("formatnotsupport") }]);
      return false;
    }
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.AddReqForm.controls['attachement'].setValue(reader.result);

  }
  handleFileInput_motherId(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    // console.log("file",file);
    if (!this.validateFile(file.name)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("formatnotsupport") }]);
      return false;
    }
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded_mother_Id.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded_mother_Id(e) {
    const reader = e.target;
    this.AddReqForm.controls['mother_id'].setValue(reader.result);

  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (['pdf', 'jpg', 'jpeg', 'gif', 'png'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }

  can_upload = false;
  getuplaoddocs() {
    this.isLoading = true;
    this.subscriptionsdata = this.admissionUgservice.uploaddocs(this.admissionUgservice.LoggedInToken).subscribe(
      uploadocs => {
        this.messages = uploadocs['messages'];
        if (uploadocs['status'] == 1) {
          this.can_upload = true;
          if (uploadocs['data']) {
            this.uploaddata = uploadocs['data'];
            this.attachemngtss = this.uploaddata.attachement;
            this.upload_mother_id = this.uploaddata.upload_mother_id;
          }
        }
        this.isLoading = false;
      },
      error => {
        this.can_upload = false;
        this.isLoading = false;
      }
    );
  }

}
