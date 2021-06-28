import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorNewrequestsService } from '../../../../services/resume-instructor-newrequest';
import { ResumeUserService } from '../../../../services/resume-user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ResumeInstructorReasonsComponent } from '../resume-instructor-reasons/resume-instructor-reasons.component';

export class Title{
  text: any;
  items: [];
}

export class Item{
  text: any;
}


@Component({
  selector: 'app-resume-instructor-new-ar',
  templateUrl: './resume-instructor-new-ar.component.html',
  styleUrls: ['./resume-instructor-new-ar.component.css']
})
export class ResumeInstructorNewArComponent implements OnInit {

  isLoading = false;
  submitted = false;
  addRequestForm : FormGroup;
  profile = "notExist";
  imagePath;
  photo = "" ;
  titles = [];
  // ar ..
  educationTitle;
  experienceTitle;
  committesTitle;
  organizationsTitle;
  booksTitle;
  researchTitle;
  workshopsTitle;
  socialTitle;
  scienceInterestTitle;
  otherInterestTitle;
  // en ..
  educationTitleEn;
  experienceTitleEn;
  committesTitleEn;
  organizationsTitleEn;
  booksTitleEn;
  researchTitleEn;
  workshopsTitleEn;
  socialTitleEn;
  scienceInterestTitleEn;
  otherInterestTitleEn;

  item;
  datePickerConfig: Partial<BsDatepickerConfig>;
  agree = false;
  exist = false;
  eduErrorAr = false;
  excepErrorAr = false;
  eduErrorEn = false;
  excepErrorEn = false;
  eduErrorMsg = "";
  eduErrorMsgEn = "";
  excepErrorMsg = "";
  excepErrorMsgEn = "";
  contentReasonAr = "";
  contentReasonEn = "";
  managerReasonAr = "";
  managerReasonEn = "";
  req = {
    'NAME' : "",
    'NAME_EN' : "",
    'EMAIL' : "",
    'JOB_TITLE' : "",
    'JOB_TITLE_EN' : "",
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: AppToasterService,
    private route: ActivatedRoute,
    private userService: ResumeUserService,
    private newrequestsService: InstructorNewrequestsService,
    private translate: TranslateService,
    public dialog: MatDialog
  ) {
    let lang = localStorage.getItem("seu-lang");
    this.eduErrorMsg = (lang == 'ar') ? "يجب إدخال بيانات المؤهل العلمي باللغة العربية" : "Education information in Arabic required";
    this.eduErrorMsgEn = (lang == 'ar') ? "يجب إدخال بيانات المؤهل العلمي باللغة الإنجليزية" : "Education information in English required";
    this.excepErrorMsg = (lang == 'ar') ? "يجب إدخال بيانات المناصب والوظائف الأكاديمية باللغة العربية" : "Experience in Arabic required";
    this.excepErrorMsgEn = (lang == 'ar') ? "يجب إدخال بيانات المناصب والوظائف الأكاديمية باللغة الإنجليزية" : "Experience in English required";
    const user = this.userService.user;
    this.getIfExist();
    this.addRequestForm = this.fb.group({
      NAME: ["", [Validators.required]],
      NAME_EN: ["", [Validators.required]],
      EMAIL: ["", [Validators.required]],
      DOB: [""],
      JOB_TITLE: ["", [Validators.required]],
      JOB_TITLE_EN: ["", [Validators.required]],
    });

    this.resetTitles();
    
  }

  ngOnInit() {
    
  }

  openReasonDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = req;

    let dialogref = this.dialog.open(ResumeInstructorReasonsComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if(result){
        
      }
    });
  }

  getIfExist(){
    this.isLoading = true;
    this.newrequestsService.getIfExist(this.userService.user.ID, "ar").subscribe((response) => {
      if (response['data'] != false) {
        this.exist = true;
        this.req = response['data'];
        // CONTENT_REASON ..
        this.contentReasonAr = this.req['REQ_AR'].CONTENT_REASON != null ? this.req['REQ_AR'].CONTENT_REASON : "";
        this.contentReasonEn = this.req['REQ_EN'].CONTENT_REASON != null ? this.req['REQ_EN'].CONTENT_REASON : "";
        // MANAGER_REASON ..
        this.managerReasonAr = this.req['REQ_AR'].MANAGER_REASON != null ? this.req['REQ_AR'].MANAGER_REASON : "";
        this.managerReasonEn = this.req['REQ_EN'].MANAGER_REASON != null ? this.req['REQ_EN'].MANAGER_REASON : "";
        
        // req ar ..
        this.educationTitle.items = this.req['REQ_AR']['EDUCATION'].items;
        this.experienceTitle.items = this.req['REQ_AR']['EXPERIENCE'].items;
        this.committesTitle.items = this.req['REQ_AR']['COMMITES'].items;
        this.organizationsTitle.items = this.req['REQ_AR']['ORGANIZATIONS'].items;
        this.booksTitle.items = this.req['REQ_AR']['BOOKS'].items;
        this.researchTitle.items = this.req['REQ_AR']['RESEARCHES'].items;
        this.workshopsTitle.items = this.req['REQ_AR']['WORKSHOPS'].items;
        this.socialTitle.items = this.req['REQ_AR']['SOCIAL_ACTIVITIES'].items;
        this.scienceInterestTitle.items = this.req['REQ_AR']['RESEARCH_INTERESTS'].items;
        this.otherInterestTitle.items = this.req['REQ_AR']['OTHER_INTERESTS'].items;
        // req en ..
        this.educationTitleEn.items = this.req['REQ_EN']['EDUCATION'].items;
        this.experienceTitleEn.items = this.req['REQ_EN']['EXPERIENCE'].items;
        this.committesTitleEn.items = this.req['REQ_EN']['COMMITES'].items;
        this.organizationsTitleEn.items = this.req['REQ_EN']['ORGANIZATIONS'].items;
        this.booksTitleEn.items = this.req['REQ_EN']['BOOKS'].items;
        this.researchTitleEn.items = this.req['REQ_EN']['RESEARCHES'].items;
        this.workshopsTitleEn.items = this.req['REQ_EN']['WORKSHOPS'].items;
        this.socialTitleEn.items = this.req['REQ_EN']['SOCIAL_ACTIVITIES'].items;
        this.scienceInterestTitleEn.items = this.req['REQ_EN']['RESEARCH_INTERESTS'].items;
        this.otherInterestTitleEn.items = this.req['REQ_EN']['OTHER_INTERESTS'].items;
      }else{
        this.exist = false;
      }
      this.isLoading = false;
    }, err => {
      this.newrequestsService.tryagain();
      this.isLoading = false;
    });
  }

  agreeCond(event: any){
    this.agree = !this.agree;
  }

  resetTitles(){
    let lang = localStorage.getItem("seu-lang");

    // ar ..
    this.educationTitle  = new Title();
    this.educationTitle.text =  (lang == 'ar') ? "التحصيل العلمي باللغة العربية" : "Education in Arabic";
    this.educationTitle.items =  [];
    // en ..
    this.educationTitleEn = new Title();
    this.educationTitleEn.text = (lang == 'ar') ? "التحصيل العلمي باللغة الإنجليزية" : "Education in English";
    this.educationTitleEn.items = [];

    // ar ..
    this.experienceTitle = new Title();
    this.experienceTitle.text = (lang == 'ar') ? "المناصب والوظائف الأكاديمية باللغة العربية" : "Experience in Arabic";
    this.experienceTitle.items = [];
    // en ..
    this.experienceTitleEn = new Title();
    this.experienceTitleEn.text = (lang == 'ar') ? "المناصب والوظائف الأكاديمية باللغة الإنجليزية" : "Experience in English";
    this.experienceTitleEn.items = [];

    // ar ..
    this.committesTitle = new Title();
    this.committesTitle.text = (lang == 'ar') ? "عضوية المجالس واللجان باللغة العربية": "Membership of Boards and Committees in Arabic";
    this.committesTitle.items = [];
    // en ..
    this.committesTitleEn = new Title();
    this.committesTitleEn.text = (lang == 'ar') ? "عضوية المجالس و اللجان باللغة الإنجليزية": "Membership of Boards and Committees in English";
    this.committesTitleEn.items = [];

    // ar ..
    this.organizationsTitle = new Title();
    this.organizationsTitle.text = (lang == 'ar') ? "عضوية المنظمات العلمية باللغة العربية" : "Membership of Scientific Organizations in Arabic";
    this.organizationsTitle.items = [];
    // en ..
    this.organizationsTitleEn = new Title();
    this.organizationsTitleEn.text = (lang == 'ar') ? "عضوية المنظمات العلمية باللغة الإنجليزية" : "Membership of Scientific Organizations in English";
    this.organizationsTitleEn.items = [];

    // ar ..
    this.booksTitle = new Title();
    this.booksTitle.text = (lang == 'ar') ? "الكتب" : "Books";
    this.booksTitle.items = [];
    // en ..
    this.booksTitleEn = new Title();
    this.booksTitleEn.text = (lang == 'ar') ? "الكتب" : "Books";
    this.booksTitleEn.items = [];

    // ar ..
    this.researchTitle = new Title();
    this.researchTitle.text = (lang == 'ar') ? "البحوث والدراسات والمنشورات في المجلات العلمية" : "Research and Studies Published in Scientific Journals";
    this.researchTitle.items = [];
    // en ..
    this.researchTitleEn = new Title();
    this.researchTitleEn.text = (lang == 'ar') ? "البحوث والدراسات والمنشورات في المجلات العلمية" : "Research and Studies Published in Scientific Journals";
    this.researchTitleEn.items = [];

    // ar ..
    this.workshopsTitle = new Title();
    this.workshopsTitle.text = (lang == 'ar') ? "الدورات التدريبة وورش العمل" : "Training and Workshops";
    this.workshopsTitle.items = [];
    // en ..
    this.workshopsTitleEn = new Title();
    this.workshopsTitleEn.text = (lang == 'ar') ? "الدورات التدريبة وورش العمل " : "Training and Workshops";
    this.workshopsTitleEn.items = [];

    // ar ..
    this.socialTitle = new Title();
    this.socialTitle.text = (lang == 'ar') ? "المشاركات الاجتماعية والإعلامية (التلفزيون، والإذاعة، والصحف) باللغة العربية" : "Social and Media Activities (TV, Radio, or Press) in Arabic";
    this.socialTitle.items = [];
    // en ..
    this.socialTitleEn = new Title();
    this.socialTitleEn.text = (lang == 'ar') ? "المشاركات الاجتماعية والإعلامية (التلفزيون، والإذاعة، والصحف) باللغة الإنجليزية" : "Social and Media Activities (TV, Radio, or Press) in English";
    this.socialTitleEn.items = [];

    // ar ..
    this.scienceInterestTitle = new Title();
    this.scienceInterestTitle.text = (lang == 'ar') ? "الاهتمامات العلمية باللغة العربية" : "Research Interests in Arabic";
    this.scienceInterestTitle.items = [];
    // en ..
    this.scienceInterestTitleEn = new Title();
    this.scienceInterestTitleEn.text = (lang == 'ar') ? "الاهتمامات العلمية باللغة الإنجليزية" : "Research Interests in English";
    this.scienceInterestTitleEn.items = [];

    // ar ..
    this.otherInterestTitle = new Title();
    this.otherInterestTitle.text = (lang == 'ar') ? "الاهتمامات الأخرى باللغة العربية" : "Other Interest in Arabic";
    this.otherInterestTitle.items = [];
    // en ..
    this.otherInterestTitleEn = new Title();
    this.otherInterestTitleEn.text = (lang == 'ar') ? "الاهتمامات الأخرى باللغة الإنجليزية" : "Other Interest in English";
    this.otherInterestTitleEn.items = [];
  }

  keyPressArabic(e){
    if (e.key.match(/^[\u0621-\u064A]+$/) || e.key == " " || e.key == "Backspace") {
      return true;
    }else{
      e.preventDefault();
      return false;
    }
  }

  keyPressEnglish(e){
    if (e.key.match(/^[a-zA-Z]+$/) || e.key == " " || e.key == "Backspace") {
      return true;
    }else{
      e.preventDefault();
      return false;
    }
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.photo = reader.result;
    this.imagePath = this.photo;
  }


  addItem(title) {
    if (typeof title.items == "undefined") {
      title.items = [];
    }
    if(title == this.educationTitle || title == this.educationTitleEn){
      this.eduErrorAr = false;
      this.eduErrorEn = false;
    }
    if(title == this.experienceTitle || title == this.experienceTitleEn){
      this.excepErrorAr = false;
      this.excepErrorEn = false;
    }
    this.item = new Item();
    this.item.text = "";
    title.items.push(this.item); 
  }

  removeItem(title, j){
    title.items.splice(j, 1);
  }

  onSubmit($eduElement){
    this.submitted = true;
    if (this.addRequestForm.invalid) {
      $eduElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      return;
    }
    
    if(typeof this.educationTitle.items == "undefined" || this.educationTitle.items.length == 0 || this.educationTitle.items[0].text == ""){
      this.eduErrorAr = true;
      $eduElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      return;
    }
    if(typeof this.educationTitleEn.items == "undefined" || this.educationTitleEn.items.length == 0 || this.educationTitleEn.items[0].text == ""){
      this.eduErrorEn = true;
      $eduElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      return;
    }
    if(typeof this.experienceTitle.items == "undefined" || this.experienceTitle.items.length == 0 || this.experienceTitle.items[0].text == ""){
      this.excepErrorAr = true;
      $eduElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      return;
    }
    if(typeof this.experienceTitleEn.items == "undefined" || this.experienceTitleEn.items.length == 0 || this.experienceTitleEn.items[0].text == ""){
      this.excepErrorEn = true;
      $eduElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      return;
    }
    this.isLoading = true;
    let reqAr = {
      PHOTO_PATH        : this.photo,
      NAME              : this.addRequestForm.value.NAME,
      EMAIL             : this.addRequestForm.value.EMAIL,
      DOB               : this.addRequestForm.value.DOB,
      JOB_TITLE         : this.addRequestForm.value.JOB_TITLE,
      EDUCATION         : this.educationTitle,
      EXPERIENCE        : this.experienceTitle,
      COMMITES          : this.committesTitle,
      ORGANIZATIONS     : this.organizationsTitle,
      BOOKS             : this.booksTitle,
      RESEARCHES        : this.researchTitle,
      WORKSHOPS         : this.workshopsTitle,
      SOCIAL_ACTIVITIES : this.socialTitle,
      RESEARCH_INTERESTS: this.scienceInterestTitle,
      OTHER_INTERESTS   : this.otherInterestTitle,
      LANG              : 'ar',
      CONTENT_STATUS    : 0,
      MANAGER_STATUS    : 0,
      GATE_STATUS       : 0,
      USER_ID           : this.userService.user.ID
    };
    let reqEn = {
      PHOTO_PATH        : this.photo,
      NAME              : this.addRequestForm.value.NAME_EN,
      EMAIL             : this.addRequestForm.value.EMAIL,
      DOB               : this.addRequestForm.value.DOB,
      JOB_TITLE         : this.addRequestForm.value.JOB_TITLE_EN,
      EDUCATION         : this.educationTitleEn,
      EXPERIENCE        : this.experienceTitleEn,
      COMMITES          : this.committesTitleEn,
      ORGANIZATIONS     : this.organizationsTitleEn,
      BOOKS             : this.booksTitleEn,
      RESEARCHES        : this.researchTitleEn,
      WORKSHOPS         : this.workshopsTitleEn,
      SOCIAL_ACTIVITIES : this.socialTitleEn,
      RESEARCH_INTERESTS: this.scienceInterestTitleEn,
      OTHER_INTERESTS   : this.otherInterestTitleEn,
      LANG              : 'en',
      CONTENT_STATUS    : 0,
      MANAGER_STATUS    : 0,
      GATE_STATUS       : 0,
      USER_ID           : this.userService.user.ID
    };
    
    let data = {
      'REQ_AR' : reqAr,
      'REQ_EN' : reqEn,
    };
    this.newrequestsService.saveNewRequest(data).subscribe(
      (response: any) => {
        if (response) {
          this.toastr.push([{
            'type' : 'success',
            'body' : 'تم رفع طلب بتحديث السيرة الذاتية الخاصة بكم'
          }]);
          this.router.navigate(['../my-requests'], { relativeTo: this.route })
        }
      },
      error => {}
    );
  }
}
