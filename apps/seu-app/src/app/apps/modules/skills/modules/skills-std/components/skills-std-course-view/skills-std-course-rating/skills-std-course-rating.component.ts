import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentCoursesService } from 'src/app/apps/modules/skills/services/skill-std-course';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
@Component({
  selector: 'app-skills-std-course-rating',
  templateUrl: './skills-std-course-rating.component.html',
  styleUrls: ['./skills-std-course-rating.component.css']
})
export class SkillsStdCourseRatingComponent implements OnInit {

  isLoading;
  types;
  questions;
  course_id;
  lang;
  AddRateForm : FormGroup;
  submitted;
  files;

  constructor(
    private route: ActivatedRoute,
    private coursesService: StudentCoursesService,
    private translate: TranslateService,
    private fb: FormBuilder,
    private toastr: AppToasterService,
    private router: Router
  ) {
    this.lang = (this.translate.currentLang == 'ar') ? "AR" : "EN";
    this.course_id = this.route.snapshot.params['id'];
    this.getAllFiles();

    this.AddRateForm = this.fb.group({
      'POSITIVE': [''],
      'NEGATIVE': [''],
      'SUGGESTIONS': ['']
    });
  }

  ngOnInit() {
  }

  getAllFiles() {
    this.isLoading = true;
    this.coursesService.getAllFiles(this.course_id).subscribe(
      (response: any) => {
        if (response) {
          this.files = response.data;
          this.getRatingTypes();
        }
      }
    );
  }

  getRatingTypes(){
    this.isLoading = true;
    let files = this.files.length;
    this.coursesService.getRatingTypes(files).subscribe(
      (response: any) => {
        if (response) {
          this.types = response.data;
          this.getRatingQuestions();
        }
      }
    );
  }

  getRatingQuestions(){
    this.isLoading = true;
    let files = this.files.length;
    this.coursesService.getRatingQuestions(files).subscribe(
      (response: any) => {
        if (response) {
          this.questions = response.data;
          this.questions.forEach(element => {
            this.AddRateForm.addControl('RATE_'+element.ID, new FormControl('', Validators.required));
          });
          this.isLoading = false;
        }
      }
    );
  }

  onSubmit(){
    if (this.AddRateForm.invalid) {
      return;
    }
    this.submitted = true;
    let data = this.AddRateForm.value;
    let questionsRateData = [];
    for (let key of Object.keys(data)) {
      if (key.split("_").length > 1) {
        let k = key.split("_")[1];
        questionsRateData[k] = data['RATE_'+k] ;
      }
    }
    
    let allData = {
      'course_id'             : this.course_id,
      'questionsRateData'     : questionsRateData,
      'questionsRateTextData' : data,
    };
    this.coursesService.addRate(allData).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.router.navigate(['../../../course-view/details/', this.course_id], { relativeTo: this.route });
          }
          this.toastr.push([{
            'type': 'success',
            'body': this.translate.instant("std_courses.success_rate")
          }]);
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
