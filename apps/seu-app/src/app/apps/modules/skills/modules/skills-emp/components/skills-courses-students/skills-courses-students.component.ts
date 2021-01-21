import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-courses-students',
  templateUrl: './skills-courses-students.component.html',
  styleUrls: ['./skills-courses-students.component.css']
})
export class SkillsCoursesStudentsComponent implements OnInit {

  filter_text;
  students;
  isLoading;
  exporting = false;
  instuctors = false;
  
  constructor(
    private skillsCourseService: SkillsCourseService,
    private router: Router, 
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.getCoursesStudents();
  }

  ngOnInit() {
  }

  getCoursesStudents() {
    this.isLoading = true;
    this.skillsCourseService.getCoursesStudents(0).subscribe(
      (response: any) => {
        if (response) {
          this.students = response.data;
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    )
  }

  exportAsXLSX() {
    this.skillsCourseService.getCoursesStudents(1).subscribe((response => {
      const linkSource = `data:application/pdf;base64,${response['data']}`;
      const downloadLink = document.createElement('a');
      const fileName = `courses-students-report_${(new Date()).toLocaleDateString("en-US")}.xls`;
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }));
  }

}
