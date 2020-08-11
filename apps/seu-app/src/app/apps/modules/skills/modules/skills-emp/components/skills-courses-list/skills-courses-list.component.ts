import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-skills-courses-list',
  templateUrl: './skills-courses-list.component.html',
  styleUrls: ['./skills-courses-list.component.css']
})
export class SkillsCoursesListComponent implements OnInit {
  
  courses;
  isLoading;

  constructor(
    private skillsCourseService: SkillsCourseService,
    private router: Router, 
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService,
  ) {
    this.getAllCourses();
  }

  ngOnInit() {
  }

  getAllCourses(){
    this.isLoading = true;
    this.skillsCourseService.getAllCourses().subscribe(
      (response: any) => {
        if (response) {
          this.courses = response.data;
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    )
  }

  setCampus(id){
    this.router.navigate(['../courses-campus/'+id], { relativeTo: this.route })
  }

  update(id){
    this.isLoading = true;
    this.router.navigate(['../courses-update/'+id], { relativeTo: this.route })
  }
  appointments(id){
    this.isLoading = true;
    this.router.navigate(['../courses-appointments/'+id], { relativeTo: this.route })
  }

  delete(id){
    let data = {
      'ID'      : id,
      'STATUS'  : 3
    };
    if (confirm(this.translate.instant('courses.delete_confirm'))) {
      this.isLoading = true;
      this.skillsCourseService.deleteCourse(data).subscribe(
        (response: any) => {
          if (response) {
            if (response.status) {
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
            this.getAllCourses();
          }
        },
        error => {
        }
      );
    }
  }
}
