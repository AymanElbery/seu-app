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
  typesdata;
  certificates_type;
  EXAM_TYPE;
  CER_FROM_OUT_SID;
  COLL_CODE;
  contname='';
  constructor(private toastr: AppToasterService,private translate: TranslateService,private admissionGRservice: AdmissionGRService, private router: Router,private fb: FormBuilder,public globalService: GlobalBaseService) {
    this.AddReqForm = fb.group({
      'token': [''],     
      'type': ['',[Validators.required]],
      'major_ar': ['',[Validators.required]],
      'major_en': ['',[Validators.required]],
      'IELTS_CODE': [''],
      'ssn_copy': ['',[Validators.required]],
      'bacholar_copy': ['',[Validators.required]],
      'academic_copy': ['',[Validators.required]],
      'lang_test_copy': [''],
      'others_copy': [''],
      'equal_certificates_copy_required': [''],
      'medical_copy': [''],
      'capabilites_copy': [''],
      'recommedenation_copy': [''],
      'work_copy': ['']     
      
    });
  
   }

  ngOnInit() {

  if(this.admissionGRservice.LoggedInUser){
  this.EXAM_TYPE= this.admissionGRservice.LoggedInUser["EXAM_TYPE"];
  this.CER_FROM_OUT_SID= this.admissionGRservice.LoggedInUser["CER_FROM_OUT_SID"];
  this.COLL_CODE= this.admissionGRservice.LoggedInUser["COLL_CODE"];
  }
    this.getuplaodfile();
    
  }

  
  onFormSubmit() {
    // if (this.AddReqForm.invalid) {
    //   return;
    // }
    

    if (!this.AddReqForm.controls['ssn_copy'].value) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("ssncopyreq") }]);
      return false;
    }

    if (!this.AddReqForm.controls['bacholar_copy'].value) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("bacholarcopyreq") }]);
      return false;
    }

    if (!this.AddReqForm.controls['academic_copy'].value) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("academiccopyreq") }]);
      return false;
    }

    if(this.CER_FROM_OUT_SID=="Yes"){
    if (!this.AddReqForm.controls['equal_certificates_copy_required'].value) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("equalcertificatescopyrequired") }]);
      return false;
    }
  }
  if(this.COLL_CODE=="HS"){
    if (!this.AddReqForm.controls['medical_copy'].value) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("medicalcopyreq") }]);
      return false;
    }
  }


    this.AddReqForm.controls['token'].setValue(this.globalService.getItem(this.admissionGRservice.tokenKey));
   // console.log("datavalue",this.AddReqForm.value);
    this.submitted = true;
    this.isLoading=true;
    this.admissionGRservice.postfileupload(this.AddReqForm.value).subscribe(savadocs => {
     // console.log("response",savadocs);
      const ststaus=savadocs['status'];
      if (ststaus==1) {        
        this.submitted = false;
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('docs_saved') }]);
        this.isLoading=false;
        this.router.navigate(['/apps/admission-gr/'])
      } else if (!savadocs['status']) {
        this.toastr.push(savadocs['messages']);        
        this.submitted = false;
        this.isLoading=false

      } else {
        this.toastr.push([{ type: 'error', 'body': savadocs['data']['message'] }]);        
        this.submitted = false;
        this.isLoading=false
      }
    }, error => {
      this.toastr.tryagain();
      this.submitted = false;   
      this.isLoading=false  

    }
    );

  }

  handleFileInput(e,filecontrols:any) {
    this.contname=filecontrols;
    //const file = files.item(0);
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];    
    console.log("file",this.contname);
    if (!this.validateFile(file.name)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("formatnotsupport") }]);
      return false;
    }    
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    console.log("file",e);
    const reader = e.target;
    this.AddReqForm.controls[this.contname].setValue(reader.result);
      
          
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
    this.subscriptionsdata= this.admissionGRservice.getuplaodfile(this.globalService.getItem(this.admissionGRservice.tokenKey)).subscribe(getuploadfiledata => {
    // console.log("data",getuploadfiledata);

      const status = getuploadfiledata['status'];     
      if(status==1){
      if(getuploadfiledata['data']){    
       this.typesdata= (getuploadfiledata as any ).data["types"];   
       this.certificates_type= (getuploadfiledata as any ).data["notes"];   
     
     // console.log("data",this.uploaddata);
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
