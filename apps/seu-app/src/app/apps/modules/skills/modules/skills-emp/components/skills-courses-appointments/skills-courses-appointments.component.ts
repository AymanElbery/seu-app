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
  selector: 'app-skills-courses-appointments',
  templateUrl: './skills-courses-appointments.component.html',
  styleUrls: ['./skills-courses-appointments.component.css'],
  providers: [DatePipe]
})
export class SkillsCoursesAppointmentsComponent implements OnInit {
  
  datePickerConfig: Partial<BsDatepickerConfig>;
  isLoading = false;
  submitted = false;
  AddCourseAppointmentsForm : FormGroup;

  course_id;
  course_title;
  courseStartDate;
  courseEndDate;
  minDate: Date;
  maxDate: Date;
  appointments = [];

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
    this.isLoading = true;
    this.course_id = this.route.snapshot.params['id'];
    this.getCourseById(this.course_id);
    this.getCourseAppointments(this.course_id);
    
    this.AddCourseAppointmentsForm = this.fb.group({
      'TITLE': ['', [Validators.required]],
      'ACTUAL_DATE': ['', [Validators.required]],
    });

  }

  ngOnInit() {
    
  }

  getCourseById(id){
    let data = {
      'ID'      : id,
    };
    this.skillsCourseService.getCourseById(data).subscribe(
      (response: any) => {
        if (response) {
          this.minDate = new Date(this.formatDatepickerDate(response.data.START_DATE));
          this.maxDate = new Date(this.formatDatepickerDate(response.data.END_DATE));
          this.courseStartDate = this.formatDisplayDate(response.data.START_DATE);
          this.courseEndDate = this.formatDisplayDate(response.data.END_DATE);
          this.course_title = response.data.TITLE;
          this.isLoading = false;
        }
      }
    );
  }

  getCourseAppointments(id){
    let data = {
      'ID'      : id,
    };
    this.skillsCourseService.getCourseAppointments(data).subscribe(
      (response: any) => {
        if (response) {
          this.appointments = response.data;
          // this.appointments.forEach(element => {
          //   element.ACTUAL_DATE = this.formatDisplayDate(element.ACTUAL_DATE);
          // });
          this.isLoading = false;
        }
      }
    );
  }

  formatDatepickerDate(date){
    return date;
    let dateArr = date.split("-");
    let months = {
      'JAN' : '01',
      'FEB' : '02',
      'MAR' : '03',
      'APR' : '04',
      'MAY' : '05',
      'JUN' : '06',
      'JUL' : '07',
      'AUG' : '08',
      'SEP' : '09',
      'OCT' : '10',
      'NOV' : '11',
      'DEC' : '12',
    };
    let dateStr = dateArr[2]+"20"+"-"+months[dateArr[1]]+"-"+dateArr[0];
    return dateStr;
  }

  formatDisplayDate(date){
    return date;
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

  delete(id){
    let data = {
      'ID'      : id,
    };
    if (confirm(this.translate.instant('courses.delete_confirm'))) {
      this.isLoading = true;
      this.skillsCourseService.deleteCourseAppointment(data).subscribe(
        (response: any) => {
          if (response) {
            if (response.status) {
              this.getCourseAppointments(this.course_id);
              this.toastr.push([{
                'type': 'success',
                'body': this.translate.instant("courses.success_delete")
              }]);
            } else {
              this.toastr.push([{
                'type': 'error',
                'body': response.error
              }]);
            }
          }
        },
        error => {
        }
      );
    }
  }

  onSubmit() {
    if (this.AddCourseAppointmentsForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.submitted = true;
    let data = this.AddCourseAppointmentsForm.value;
    data.COURSE_ID = this.course_id;

    this.skillsCourseService.addCourseAppointment(data).subscribe(
      (response: any) => {
        if (response) {
          if (response.status) {
            this.getCourseAppointments(this.course_id);
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant('courses.success_request')
            }]);
            this.AddCourseAppointmentsForm.reset();
          } else {
            this.toastr.push([{
              'type': 'error',
              'body': response.error
            }]);
          }
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
