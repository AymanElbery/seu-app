import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillsCourseService } from '../../../../services/skill-course';
import { SkillsUserService } from '../../../../services/skill-user';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-skills-courses-from',
  templateUrl: './skills-courses-from.component.html',
  styleUrls: ['./skills-courses-from.component.css'],
  providers: [DatePipe]
})
export class SkillsCoursesFromComponent implements OnInit {
  
  datePickerConfig: Partial<BsDatepickerConfig>;
  isLoading = false;
  submitted = false;
  AddCourseForm : FormGroup;
  stuffs;
  classifications;
  classRoomDisabled;
  linkDisabled;
  cancelDisabled;
  excuseDisabled;
  skillsDisabled;

  course;
  updated_id;
  redirectUrl;

  constructor(
    private fb: FormBuilder,
    private skillsCourseService: SkillsCourseService,
    private skillsUserService: SkillsUserService,
    private toastr: AppToasterService,
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.classRoomDisabled = true;
    this.linkDisabled = true;
    this.cancelDisabled = true;
    this.excuseDisabled = true;
    this.skillsDisabled = true;

    this.getClassificatios();
    this.getStuffUsers();
    

    this.AddCourseForm = this.fb.group({
      'TITLE': ['', [Validators.required]],
      'TYPE': ['', [Validators.required]],
      'CERT_TYPE': ['', [Validators.required]],
      'STAFF_ID': ['', [Validators.required]],
      'INSTITUTION': ['', [Validators.required]],
      'SEATS': ['', [Validators.required]],
      'START_DATE': ['', [Validators.required]],
      'END_DATE': ['', [Validators.required]],
      'REG_START_DATE': ['', [Validators.required]],
      'REG_END_DATE': ['', [Validators.required]],
      'PERIOD': ['', [Validators.required]],
      'TIME': ['', [Validators.required]],
      'HR_HOURS': ['', [Validators.required]],
      'ALLOWED_ABSENSE': ['', [Validators.required]],
      'FACE_ATTEND': [''],
      'CLASS_ROOM': [''],
      'VIRTUAL_ATTEND': [''],
      'LINK': [''],
      'CANCEL_OPTION': [''],
      'CANCEL_DATE': [''],
      'EXCUSE_OPTION': [''],
      'EXCUSE_DATE': [''],
      'SKILLS_OPTION': [''],
      'CLASSIFICATION_ID': [''],
      'STATUS': ['', [Validators.required]],
    });
  }

  ngOnInit() {
    let lengthCheck = this.router.url.split("/").length;
    if (lengthCheck == 6) {
      this.isLoading = true;
      this.updated_id = this.router.url.split("/")[5];
      this.getCourseById(this.updated_id);
    }
  }
  
  getCourseById(id){
    let data = {
      'ID'      : id,
    };
    this.skillsCourseService.getCourseById(data).subscribe(
      (response: any) => {
        if (response) {
          this.course = response.data[0];
          this.course.START_DATE = (this.course.START_DATE) ? this.datePipe.transform(this.course.START_DATE, 'MM/dd/yyyy') : "";
          this.course.END_DATE = (this.course.END_DATE) ? this.datePipe.transform(this.course.END_DATE, 'MM/dd/yyyy') : "";
          this.course.REG_START_DATE = (this.course.REG_START_DATE) ? this.datePipe.transform(this.course.REG_START_DATE, 'MM/dd/yyyy') : "";
          this.course.REG_END_DATE = (this.course.REG_END_DATE) ? this.datePipe.transform(this.course.REG_END_DATE, 'MM/dd/yyyy') : "";
          this.course.EXCUSE_DATE = (this.course.EXCUSE_DATE) ? this.datePipe.transform(this.course.EXCUSE_DATE, 'MM/dd/yyyy') : "";
          this.course.CANCEL_DATE = (this.course.CANCEL_DATE) ? this.datePipe.transform(this.course.CANCEL_DATE, 'MM/dd/yyyy') : "";
          
          this.classRoomDisabled = (this.course.FACE_ATTEND == 1) ? false : true;
          this.linkDisabled = (this.course.VIRTUAL_ATTEND == 1) ? false : true;
          this.cancelDisabled = (this.course.CANCEL_OPTION == 1) ? false : true;
          this.excuseDisabled = (this.course.EXCUSE_OPTION == 1) ? false : true;
          this.skillsDisabled = (this.course.SKILLS_OPTION == 1) ? false : true;
          
          this.AddCourseForm.patchValue({
            ALLOWED_ABSENSE : this.course.ALLOWED_ABSENSE,
            CANCEL_DATE : this.course.CANCEL_DATE,
            CANCEL_OPTION : this.course.CANCEL_OPTION,
            CERT_TYPE : this.course.CERT_TYPE,
            CLASSIFICATION_ID : this.course.CLASSIFICATION_ID,
            CLASS_ROOM : this.course.CLASS_ROOM,
            END_DATE : this.course.END_DATE,
            EXCUSE_DATE : this.course.EXCUSE_DATE,
            EXCUSE_OPTION : this.course.EXCUSE_OPTION,
            FACE_ATTEND : this.course.FACE_ATTEND,
            HR_HOURS : this.course.HR_HOURS,
            INSTITUTION : this.course.INSTITUTION,
            LINK : this.course.LINK,
            PERIOD : this.course.PERIOD,
            REG_END_DATE : this.course.REG_END_DATE,
            REG_START_DATE : this.course.REG_START_DATE,
            SEATS : this.course.SEATS,
            SKILLS_OPTION : this.course.SKILLS_OPTION,
            STAFF_ID : this.course.STAFF_ID,
            START_DATE : this.course.START_DATE,
            STATUS : this.course.STATUS,
            TIME : this.course.TIME,
            TITLE : this.course.TITLE,
            TYPE : this.course.TYPE,
            VIRTUAL_ATTEND : this.course.VIRTUAL_ATTEND,
          });
          this.isLoading = false;
        }
      },
      error => {
      }
    )
  }

  classRoomChange(){
    this.classRoomDisabled = !this.AddCourseForm.value.FACE_ATTEND;
  }
  
  linkChange(){
    this.linkDisabled = !this.AddCourseForm.value.VIRTUAL_ATTEND;
  }

  cancelChange(){
    this.cancelDisabled = !this.AddCourseForm.value.CANCEL_OPTION;
  }

  skillsChange(){
    this.skillsDisabled = !this.AddCourseForm.value.SKILLS_OPTION;
  }

  excuseChange(){
    this.excuseDisabled = !this.AddCourseForm.value.EXCUSE_OPTION;
  }

  changeFormate(date){
    var newDate = new Date(date).toLocaleDateString();
    var res = newDate.split("/");
    var day = res[0];
    var month = res[1];
    var year = res[2];
    var todayFormat = year+'-'+month+'-'+day;
    return todayFormat;
  }

  getStuffUsers(){
    this.skillsUserService.getStuffUsers().subscribe(
      (response: any) => {
        if (response) {
          this.stuffs = response.data;
        }
      },
      error => {
      }
    )
  }

  getClassificatios(){
    this.skillsCourseService.getClassificatios().subscribe(
      (response: any) => {
        if (response) {
          this.classifications = response.data;
        }
      },
      error => {
      }
    )
  }

  onUpdate(){
    this.onSubmit("update");
  }
  
  onSubmit(type = "insert") {
    if (this.AddCourseForm.invalid) {
      return;
    }
    this.submitted = true;
    let data = this.AddCourseForm.value;

    let checkVirtual = data.VIRTUAL_ATTEND;
    data.VIRTUAL_ATTEND = (checkVirtual) ? 1 : 0;
    data.SKILLS_OPTION = data.SKILLS_OPTION ? 1 : 0;
    data.FACE_ATTEND = data.FACE_ATTEND ? 1 : 0;
    data.EXCUSE_OPTION = data.EXCUSE_OPTION ? 1 : 0;
    data.CANCEL_OPTION = data.CANCEL_OPTION ? 1 : 0;

    data.START_DATE = this.changeFormate(data.START_DATE);
    data.END_DATE = this.changeFormate(data.END_DATE);
    data.REG_START_DATE = this.changeFormate(data.REG_START_DATE);
    data.REG_END_DATE = this.changeFormate(data.REG_END_DATE);
    data.CANCEL_DATE = (data.CANCEL_DATE) ? this.changeFormate(data.CANCEL_DATE): '';
    data.EXCUSE_DATE = (data.EXCUSE_DATE) ? this.changeFormate(data.EXCUSE_DATE): '';

    if (type == "update") {
      data.ID = this.updated_id;
      this.redirectUrl = '../../courses-list';
    }else{
      this.redirectUrl = '../courses-list';
    }
    this.skillsCourseService.updateCourse(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.router.navigate([this.redirectUrl], { relativeTo: this.route });
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("courses.success_update")
            }]);
          } else {
            this.toastr.push([{
              'type': 'error',
              'body': response.error
            }]);
          }
          this.isLoading = false;
          this.submitted = false;
        }
      },
      error => {
        this.isLoading = false;
        this.submitted = false;
      }
    );
    
  }

}
