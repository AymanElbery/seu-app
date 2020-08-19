import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from 'src/app/apps/modules/skills/services/skill-std-course';

@Component({
  selector: 'app-skills-std-course-files',
  templateUrl: './skills-std-course-files.component.html',
  styleUrls: ['./skills-std-course-files.component.css']
})
export class SkillsStdCourseFilesComponent implements OnInit {

  isLoading;
  files;
  course_id
  constructor(
    private route: ActivatedRoute,
    private coursesService: StudentCoursesService
  ) {
    this.course_id = this.route.snapshot.params['id'];
    this.getAllFiles();
  }

  ngOnInit() {
  }

  getAllFiles() {
    this.isLoading = true;
    this.coursesService.getAllFiles(this.course_id).subscribe(
      (response: any) => {
        if (response) {
          this.files = response.data;
          this.files = this.coursesService.addFileURL(this.files);
          this.isLoading = false;
        }
      }
    );
  }
}
