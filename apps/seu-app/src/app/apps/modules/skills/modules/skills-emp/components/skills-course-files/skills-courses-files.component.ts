import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';

import {ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-skills-courses-files',
  templateUrl: './skills-courses-files.component.html',
  styleUrls: ['./skills-courses-files.component.css'],
  providers: [DatePipe]
})
export class SkillsCoursesFilesComponent implements OnInit {
  
  isLoading = false;
  course_id;
  files;

  constructor(
    private skillsCourseService: SkillsCourseService,
    private route: ActivatedRoute
  ) {
    this.course_id = this.route.snapshot.params['id'];
    this.getAllFiles();
  }

  ngOnInit() {
    
  }

  getAllFiles(){
    this.isLoading = true;
    this.skillsCourseService.getAllFiles(this.course_id).subscribe(
      (response: any) => {
        if (response) {
          this.files = response.data;
          this.files = this.skillsCourseService.addFileURL(this.files);
          this.isLoading = false;
        }
      }
    );
  }

}
