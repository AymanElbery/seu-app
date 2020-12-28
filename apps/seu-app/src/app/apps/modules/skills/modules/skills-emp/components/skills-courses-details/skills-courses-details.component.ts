import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { SkillsUserService } from '../../../../services/skill-user';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-courses-details',
  templateUrl: './skills-courses-details.component.html',
  styleUrls: ['./skills-courses-details.component.css']
})
export class SkillsCoursesDetailsComponent implements OnInit {

  isLoading;
  course_id;
  courseDetails;
  start_date;
  end_date;
  reg_start_date;
  reg_end_date;
  AddCourseForm: FormGroup;
  checkCollege;
  campus;
  colleges;
  stuffs;
  classifications;

  constructor(
    private fb: FormBuilder,
    private skillsCourseService: SkillsCourseService,
    private skillsUserService: SkillsUserService,
    private router: Router, 
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService,
  ) {
    this.isLoading = true;
    this.course_id = this.route.snapshot.params['id'];
    this.getCourseDetails(this.course_id);

    this.getCampus();
    this.checkCollege = !this.skillsUserService.is_college();
    if (this.checkCollege) {
      this.getColleges();
    }
    this.getClassificatios();
    this.getStuffUsers();

    this.AddCourseForm = this.fb.group({
      'TITLE_AR': ['', [Validators.required]],
      'TITLE_EN': ['', [Validators.required]],
      'TYPE': ['', [Validators.required]],
      'CERT_TYPE': ['', [Validators.required]],
      'STAFF_ID': ['', [Validators.required]],
      'INSTITUTION_AR': ['', [Validators.required]],
      'INSTITUTION_EN': ['', [Validators.required]],
      'LOCATION_AR': ['', [Validators.required]],
      'LOCATION_EN': ['', [Validators.required]],
      'C_LANG': ['', [Validators.required]],
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
      'CAMP': ['', [Validators.required]],
      'COLLEGE': ['']
    });
  }

  ngOnInit() {
  }

  getStuffUsers() {
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

  getClassificatios() {
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

  getCampus() {
    this.skillsCourseService.getCampus().subscribe(
      (response: any) => {
        if (response) {
          this.campus = response.data;
        }
      },
      error => {
      }
    )
  }

  getColleges() {
    this.skillsCourseService.getColleges().subscribe(
      (response: any) => {
        if (response) {
          this.colleges = response.data.colleges;
        }
      },
      error => {
      }
    )
  }

  getCourseDetails(id){
    let data = {
      'ID'      : id,
    };
    this.skillsCourseService.getCourseById(data).subscribe(
      (response: any) => {
        if (response) {
          this.courseDetails = response.data;
          this.courseDetails.START_DATE =  this.formatDisplayDate(response.data.START_DATE) ;
          this.courseDetails.END_DATE = this.formatDisplayDate(response.data.END_DATE);
          this.courseDetails.REG_START_DATE =  this.formatDisplayDate(response.data.REG_START_DATE) ;
          this.courseDetails.REG_END_DATE =  this.formatDisplayDate(response.data.REG_END_DATE) ;
          this.courseDetails.CANCEL_DATE =  this.formatDisplayDate(response.data.CANCEL_DATE) ;
          this.courseDetails.EXCUSE_DATE =  this.formatDisplayDate(response.data.EXCUSE_DATE) ;

          this.AddCourseForm.patchValue(this.courseDetails);
          this.isLoading = false;
        }
      }
    );
  }

  details(id){
    this.isLoading = true;
    this.getCourseDetails(id);
  }

  students(id){
    this.isLoading = true;
    this.router.navigate(['../../courses-students/'+id], { relativeTo: this.route })
  }

  formatDisplayDate(date){
    if (date) {
      let dateArr = date.split("-");
      let months = {
        'JAN' : 'يناير',
        'FEB' : 'فبراير',
        'MAR' : 'مارس',
        'APR' : 'أبريل',
        'MAY' : 'مايو',
        'JUN' : 'يونيو',
        'JUL' : 'يوليو',
        'AUG' : 'أغسطس',
        'SEP' : 'سبتمبر',
        'OCT' : 'أكتوبر',
        'NOV' : 'نوفمبر',
        'DEC' : 'ديسيمبر',
      };
      return dateArr[0]+" "+months[dateArr[1]]+" 20"+dateArr[2];
    }
    return date;
  }
}
