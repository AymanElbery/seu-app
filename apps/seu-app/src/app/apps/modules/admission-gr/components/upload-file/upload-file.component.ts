import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { AdmissionGRService } from '../../services/admission-gr.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  subscriptionsdata:Subscription;
  uploaddata:any;
  messages;
  messageNodata;
  AddReqForm: FormGroup;
  submitted = false;
  isLoading=false;
  attachemngtss;
  upload_mother_id;
  constructor(private toastr: AppToasterService,private translate: TranslateService,private admissionGRservice: AdmissionGRService, private router: Router,private fb: FormBuilder,public globalService: GlobalBaseService) {
    this.AddReqForm = fb.group({
      'token': [''],
      'attachement': ['', [Validators.required]],
      'mother_id': ['']
      
    });
  
   }

  ngOnInit() {
    this.getuplaodfile();
    
  }
  onFormSubmit() {
    // if (this.AddReqForm.invalid) {
    //   return;
    // }

    if (!this.AddReqForm.controls['attachement'].value) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("Attachementrequired") }]);
      return false;
    }
    this.AddReqForm.controls['token'].setValue(this.globalService.getItem(this.admissionGRservice.tokenKey));
   // console.log(this.AddReqForm.value);
    this.submitted = true;

    this.admissionGRservice.logout_ug(this.AddReqForm.value).subscribe(savadocs => {
     // console.log("response",savadocs);

      if (savadocs['data']['messages']) {
        
        this.submitted = false;
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('docs_saved') }]);
      } else if (!savadocs['status']) {
        this.toastr.push(savadocs['messages']);        
        this.submitted = false;

      } else {
        this.toastr.push([{ type: 'error', 'body': savadocs['data']['message'] }]);        
        this.submitted = false;
      }
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
  getuplaodfile(){
    this.isLoading=true;
    this.subscriptionsdata= this.admissionGRservice.getuplaodfile(this.globalService.getItem(this.admissionGRservice.tokenKey)).subscribe(uploadocs => {
     // console.log("data",uploadocs);

      const status = uploadocs['status'];     
      if(status==1){
      if(uploadocs['data']){        
      this.uploaddata=uploadocs['data'];
      this.attachemngtss=this.uploaddata.attachement;
      this.upload_mother_id=this.uploaddata.upload_mother_id;
      console.log("data",this.uploaddata);
      this.isLoading=false;
      }
    }
    if(status==0){
      this.isLoading=false;
    }

    }
    );
  }

}
