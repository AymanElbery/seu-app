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

  filter_text;
  courses;
  isLoading;
  listActive = true;
  constructor(
    private skillsCourseService: SkillsCourseService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService,
  ) {
  }

  ngOnInit() {
    this.listActive = document.location.href.indexOf("/courses-inactive") == -1;
    this.getAllCourses();
  }

  getAllCourses() {
    this.isLoading = true;
    this.skillsCourseService.getAllCourses(this.listActive).subscribe(
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

  addNewCourse() {
    this.router.navigate(['../courses-add'], { relativeTo: this.route })
  }

  setCampus(id) {
    this.router.navigate(['../courses-campus/' + id], { relativeTo: this.route })
  }

  update(id) {
    this.isLoading = true;
    this.router.navigate(['../courses-update/' + id], { relativeTo: this.route })
  }
  appointments(id) {
    this.isLoading = true;
    this.router.navigate(['../courses-appointments/' + id], { relativeTo: this.route })
  }

  details(id) {
    this.isLoading = true;
    this.router.navigate(['../courses-view/details/' + id], { relativeTo: this.route })
  }

  complete(id) {
    this.isLoading = true;
    this.skillsCourseService.completeCourse(id).subscribe(
      (response: any) => {
        if (response.status) {
          this.skillsCourseService.notifySucc(response['res_code']);
          this.getAllCourses();
        } else {
          this.skillsCourseService.notifyError(response['res_code']);
        }
        this.isLoading = false;
      },
      error => {
        this.skillsCourseService.tryagain();
        this.isLoading = false;
      }
    );
  }
  delete(id) {
    let data = {
      'ID': id,
      'STATUS': 3
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
