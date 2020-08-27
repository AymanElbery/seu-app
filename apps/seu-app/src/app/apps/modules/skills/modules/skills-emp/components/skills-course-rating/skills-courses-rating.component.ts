import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';

import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-courses-rating',
  templateUrl: './skills-courses-rating.component.html',
  styleUrls: ['./skills-courses-rating.component.css']
})
export class SkillsCoursesRatingComponent implements OnInit {
  
  isLoading = false;
  course_id;
  ratings;
  questions;

  constructor(
    private skillsCourseService: SkillsCourseService,
    private route: ActivatedRoute
  ) {
    this.course_id = this.route.snapshot.params['id'];
    this.getFiles();
  }

  ngOnInit() {
    
  }

  getFiles(){
    this.isLoading = true;
    this.skillsCourseService.getAllFiles(this.course_id).subscribe(
      (response: any) => {
        if (response) {
          let files = response.data.length;
          this.getRatings(files);
        }
      }
    );
  }

  getRatings(files){
    this.isLoading = true;
    this.skillsCourseService.getRatings(this.course_id, files).subscribe(
      (response: any) => {
        if (response) {
          this.ratings = response.data.ratings;
          this.questions = response.data.questions;
          console.log(this.ratings);
        }
        this.isLoading = false;  
      },
      error => {
        this.isLoading = false;
      }
    )
  }

}
