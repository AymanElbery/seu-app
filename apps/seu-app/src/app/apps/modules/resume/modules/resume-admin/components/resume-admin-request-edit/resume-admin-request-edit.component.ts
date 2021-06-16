import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminNewRequestsService } from '../../../../services/resume-admin-newrequests';
import { ResumeUserService } from '../../../../services/resume-user';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { ResumeAdminChangeStatusComponent } from '../resume-admin-change-status/resume-admin-change-status.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


export class Title{
  text: any;
  items: [];
}

export class Item{
  text: any;
}

@Component({
  selector: 'app-resume-admin-request-edit',
  templateUrl: './resume-admin-request-edit.component.html',
  styleUrls: ['./resume-admin-request-edit.component.css']
})
export class ResumeAdminRequestEditComponent implements OnInit {

  isLoading = false;
  submitted = false;
  addRequestForm : FormGroup;
  request;
  lang;
  exist = false;
  req_id;
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

  constructor(
    private router: Router,
    private toastr: AppToasterService,
    private route: ActivatedRoute,
    private userService: ResumeUserService,
    private adminNewRequests: AdminNewRequestsService,
    private translate: TranslateService,
    public dialog: MatDialog,
    public fb: FormBuilder
  ) {
    this.addRequestForm = this.fb.group({
      NAME: ["", [Validators.required]],
      EMAIL: ["", [Validators.required]],
      DOB: [""],
      JOB_TITLE: ["", [Validators.required]],
    });
    this.req_id = this.route.snapshot.params['id'];
    this.getRequest();
    this.resetTitles();
  }

  ngOnInit() {
    
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

  addItem(title) {
    if (typeof title.items == "undefined") {
      title.items = [];
    }
    this.item = new Item();
    this.item.text = "";
    title.items.push(this.item); 
  }

  removeItem(title, j){
    title.items.splice(j, 1);
  }



  backToRequests(){
    this.router.navigate(['../../request-details/'+ this.req_id], { relativeTo: this.route });
  }

  getRequest(){
    this.isLoading = true;
    this.adminNewRequests.getRequest(this.req_id).subscribe((response) => {
      this.request = response['data'];
      this.educationTitle.items = this.request['EDUCATION'].items;
      this.experienceTitle.items = this.request['EXPERIENCE'].items;
      this.committesTitle.items = this.request['COMMITES'].items;
      this.organizationsTitle.items = this.request['ORGANIZATIONS'].items;
      this.booksTitle.items = this.request['BOOKS'].items;
      this.researchTitle.items = this.request['RESEARCHES'].items;
      this.workshopsTitle.items = this.request['WORKSHOPS'].items;
      this.socialTitle.items = this.request['SOCIAL_ACTIVITIES'].items;
      this.scienceInterestTitle.items = this.request['RESEARCH_INTERESTS'].items;
      this.otherInterestTitle.items = this.request['OTHER_INTERESTS'].items;
      this.lang = this.request.LANG;
      this.isLoading = false;
    }, err => {
      this.adminNewRequests.tryagain();
      this.isLoading = false;
    });
  }

  onSubmit($eduElement){
    this.submitted = true;
    if (this.addRequestForm.invalid) {
      return;
    }
    this.isLoading = true;
    let data = {
      REQ_ID            : this.request.REQ_ID,
      NAME              : this.addRequestForm.value.NAME,
      EMAIL             : this.addRequestForm.value.EMAIL,
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
    };
    

    this.adminNewRequests.editRequest(data).subscribe(
      (response: any) => {
        if (response) {
          this.toastr.push([{
            'type' : 'success',
            'body' : 'تم تصحيح السيرة الذاتية بنجاح'
          }]);
          this.router.navigate(['../../request-details/'+ this.req_id], { relativeTo: this.route });
        }
      },
      error => {}
    );
  }

}
