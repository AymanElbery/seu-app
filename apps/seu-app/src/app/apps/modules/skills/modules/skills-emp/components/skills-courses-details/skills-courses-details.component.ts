import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

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

  constructor(
    private skillsCourseService: SkillsCourseService,
    private router: Router, 
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService,
  ) {
    this.isLoading = true;
    this.course_id = this.route.snapshot.params['id'];
    this.getCourseDetails(this.course_id);
  }

  ngOnInit() {
  }

  getCourseDetails(id){
    let data = {
      'ID'      : id,
    };
    this.skillsCourseService.getCourseById(data).subscribe(
      (response: any) => {
        if (response) {
          this.courseDetails = response.data;
          this.courseDetails.START_DATE = this.formatDisplayDate(response.data.START_DATE);
          this.courseDetails.END_DATE = this.formatDisplayDate(response.data.END_DATE);
          this.courseDetails.REG_START_DATE = this.formatDisplayDate(response.data.REG_START_DATE);
          this.courseDetails.REG_END_DATE = this.formatDisplayDate(response.data.REG_END_DATE);
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
    let dateArr = date.split("-");
    let months = {
      'AUG' : 'أغسطس',
      'SEP' : 'سبتمبر',
      'OCT' : 'أكتوبر',
      'NOV' : 'نوفمبر',
      'DEC' : 'ديسيمبر',
    };
    return dateArr[0]+" "+months[dateArr[1]]+" "+dateArr[2]+"20";
  }
}
