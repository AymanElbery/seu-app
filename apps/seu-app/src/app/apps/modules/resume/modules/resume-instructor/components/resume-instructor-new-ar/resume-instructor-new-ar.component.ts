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
  item;
  datePickerConfig: Partial<BsDatepickerConfig>;
  agree = false;
  exist = false;
  eduError = false;
  eduErrorMsg = "";
  contentReason = "";
  managerReason = "";
  req = {
    'NAME' : "",
    'EMAIL' : "",
    'JOB_TITLE' : ""
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
    this.eduErrorMsg = (lang == 'ar') ? "يجب إدخال بيانات المؤهل العلمي" : "Education information required";
    const user = this.userService.user;
    this.getIfExist();
    this.addRequestForm = this.fb.group({
      NAME: ["", [Validators.required]],
      EMAIL: ["", [Validators.required]],
      DOB: [""],
      JOB_TITLE: ["", [Validators.required]],
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
        this.contentReason = response['data'].CONTENT_REASON != null ? response['data'].CONTENT_REASON : "";
        this.managerReason = response['data'].MANAGER_REASON != null ? response['data'].MANAGER_REASON : "";
        this.req = response['data'];
        this.educationTitle.items = this.req['EDUCATION'].items;
        this.experienceTitle.items = this.req['EXPERIENCE'].items;
        this.committesTitle.items = this.req['COMMITES'].items;
        this.organizationsTitle.items = this.req['ORGANIZATIONS'].items;
        this.booksTitle.items = this.req['BOOKS'].items;
        this.researchTitle.items = this.req['RESEARCHES'].items;
        this.workshopsTitle.items = this.req['WORKSHOPS'].items;
        this.socialTitle.items = this.req['SOCIAL_ACTIVITIES'].items;
        this.scienceInterestTitle.items = this.req['RESEARCH_INTERESTS'].items;
        this.otherInterestTitle.items = this.req['OTHER_INTERESTS'].items;
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
    this.educationTitle = new Title();
    this.educationTitle.text = (lang == 'ar') ? "التحصيل العلمي" : "Education";
    this.educationTitle.items = [];

    this.experienceTitle = new Title();
    this.experienceTitle.text = (lang == 'ar') ? "المناصب والوظائف الاكاديمية" : "Experience";
    this.experienceTitle.items = [];

    this.committesTitle = new Title();
    this.committesTitle.text = (lang == 'ar') ? "عضوية المجالس واللجان": "Membership of Boards and Committees";
    this.committesTitle.items = [];

    this.organizationsTitle = new Title();
    this.organizationsTitle.text = (lang == 'ar') ? "عضوية المنظمات العلمية" : "Membership of Scientific Organizations";
    this.organizationsTitle.items = [];

    this.booksTitle = new Title();
    this.booksTitle.text = (lang == 'ar') ? "الكتب" : "Books";
    this.booksTitle.items = [];

    this.researchTitle = new Title();
    this.researchTitle.text = (lang == 'ar') ? "البحوث والدراسات والمنشورات في المجلات العلمية" : "Research and Studies Published in Scientific Journals";
    this.researchTitle.items = [];

    this.workshopsTitle = new Title();
    this.workshopsTitle.text = (lang == 'ar') ? "الدورات التدريبة وورش العمل" : "Training and Workshops";
    this.workshopsTitle.items = [];

    this.socialTitle = new Title();
    this.socialTitle.text = (lang == 'ar') ? "المشاركات الاجتماعية والإعلامية (التلفزيون، والإذاعة، والصحف)" : "Social and Media Activities (TV, Radio, or Press)";
    this.socialTitle.items = [];

    this.scienceInterestTitle = new Title();
    this.scienceInterestTitle.text = (lang == 'ar') ? "الاهتمامات العلمية" : "Research Interests";
    this.scienceInterestTitle.items = [];

    this.otherInterestTitle = new Title();
    this.otherInterestTitle.text = (lang == 'ar') ? "الاهتمامات الاخرى" : "Other Interest";
    this.otherInterestTitle.items = [];
    
  }

  keyPressArabic(e){
    if (e.key.match(/^[\u0621-\u064A]+$/) || e.key == " " || e.key == "Backspace") {
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
    if(title == this.educationTitle){
      this.eduError = false;
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
    if(this.educationTitle.items.length == 0){
      this.eduError = true;
      $eduElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      return;
    }
    this.isLoading = true;
    let data = {
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
