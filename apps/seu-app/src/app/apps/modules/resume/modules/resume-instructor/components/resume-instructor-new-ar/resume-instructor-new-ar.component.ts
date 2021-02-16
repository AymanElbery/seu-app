import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorNewrequestsService } from '../../../../services/resume-instructor-newrequest';
import { ResumeUserService } from '../../../../services/resume-user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: AppToasterService,
    private route: ActivatedRoute,
    private userService: ResumeUserService,
    private newrequestsService: InstructorNewrequestsService,
    private translate: TranslateService
  ) {
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

  getIfExist(){
    this.isLoading = true;
    this.newrequestsService.getIfExist(this.userService.user.ID, "ar").subscribe((response) => {
      this.exist = response['data'];
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
    this.educationTitle = new Title();
    this.educationTitle.text = "التحصيل العلمي";
    this.educationTitle.items = [];

    this.experienceTitle = new Title();
    this.experienceTitle.text = "المناصب والوظائف الاكاديمية";
    this.experienceTitle.items = [];

    this.committesTitle = new Title();
    this.committesTitle.text = "عضوية المجالس واللجان";
    this.committesTitle.items = [];

    this.organizationsTitle = new Title();
    this.organizationsTitle.text = "عضوية المنظمات العلمية";
    this.organizationsTitle.items = [];

    this.booksTitle = new Title();
    this.booksTitle.text = "الكتب";
    this.booksTitle.items = [];

    this.researchTitle = new Title();
    this.researchTitle.text = "البحوث والدراسات والمنشورات في المجلات العلمية";
    this.researchTitle.items = [];

    this.workshopsTitle = new Title();
    this.workshopsTitle.text = "الدورات التدريبة وورش العمل";
    this.workshopsTitle.items = [];

    this.socialTitle = new Title();
    this.socialTitle.text = "المشاركات الاجتماعية والإعلامية (التلفزيون، والإذاعة، والصحف)";
    this.socialTitle.items = [];

    this.scienceInterestTitle = new Title();
    this.scienceInterestTitle.text = "الاهتمامات العلمية";
    this.scienceInterestTitle.items = [];

    this.otherInterestTitle = new Title();
    this.otherInterestTitle.text = "الاهتمامات الاخرى";
    this.otherInterestTitle.items = [];
    
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
    this.item = new Item();
    this.item.text = "";
    title.items.push(this.item); 
  }

  removeItem(title, j){
    title.items.splice(j, 1);
  }

  onSubmit(){
    this.submitted = true;
    if (this.addRequestForm.invalid) {
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
