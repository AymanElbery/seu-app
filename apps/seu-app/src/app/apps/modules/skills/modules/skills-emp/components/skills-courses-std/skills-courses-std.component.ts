import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChangeRequestComponent } from './diag/change-request/change-request.component';


@Component({
  selector: 'app-skills-courses-std',
  templateUrl: './skills-courses-std.component.html',
  styleUrls: ['./skills-courses-std.component.css']
})
export class SkillsCoursesStdComponent implements OnInit {

  AddStdForm: FormGroup;
  isLoading;
  course_id;
  courseDetails;
  submitted = false;
  courseStudents = [];

  constructor(
    private fb: FormBuilder,
    private skillsCourseService: SkillsCourseService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService,
    public dialog: MatDialog,
  ) {
    this.isLoading = true;
    this.course_id = this.route.snapshot.params['id'];
    this.getCourseStudents(this.course_id);
    this.getCourseDetails(this.course_id);

    this.AddStdForm = this.fb.group({
      'STD_ID': ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  getCourseStudents(id) {
    let data = {
      'ID': id,
    };
    this.skillsCourseService.getCourseStudents(data).subscribe(
      (response: any) => {
        if (response) {
          this.courseStudents = response.data;
          this.isLoading = false;
        }
      }
    );
  }

  getCourseDetails(id) {
    let data = {
      'ID': id,
    };
    this.skillsCourseService.getCourseById(data).subscribe(
      (response: any) => {
        if (response) {
          this.courseDetails = response.data;
        }
      }
    );
  }

  // details(id) {
  //   this.isLoading = true;
  //   this.router.navigate(['../../courses-details/' + id], { relativeTo: this.route });
  // }

  students(id) {
    this.isLoading = true;
    this.getCourseStudents(id);
  }

  formatDisplayDate(date) {
    let dateArr = date.split("-");
    let months = {
      'AUG': 'أغسطس',
      'SEP': 'سبتمبر',
      'OCT': 'أكتوبر',
      'NOV': 'نوفمبر',
      'DEC': 'ديسيمبر',
    };
    return dateArr[0] + " " + months[dateArr[1]] + " " + dateArr[2] + "20";
  }

  changeStatus(id, status) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '30%';
    dialogConfig.data = { id: id, status: status };


    let dialogref = this.dialog.open(ChangeRequestComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      this.isLoading = true;
      this.getCourseStudents(this.course_id);
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.AddStdForm.invalid) {
      return;
    }
    this.submitted = true;
    let data = this.AddStdForm.value;
    data.COURSE_ID = this.course_id;
    data.STATUS = 'registered';

    this.skillsCourseService.addCourseStd(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.getCourseStudents(this.course_id);
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("courses.success_request")
            }]);
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
