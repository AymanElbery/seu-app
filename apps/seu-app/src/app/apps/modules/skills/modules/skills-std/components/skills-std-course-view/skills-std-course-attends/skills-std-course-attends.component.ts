import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from 'src/app/apps/modules/skills/services/skill-std-course';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SkillsStdExcuseComponent } from './dialog/skills-std-excuse.component'
@Component({
  selector: 'app-skills-std-course-attends',
  templateUrl: './skills-std-course-attends.component.html',
  styleUrls: ['./skills-std-course-attends.component.css']
})
export class SkillsStdCourseAttendsComponent implements OnInit {

  isLoading;
  lectsList;
  course_id
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private coursesService: StudentCoursesService
  ) {
    this.course_id = this.route.snapshot.params['id'];
    this.getLects();
  }

  ngOnInit() {
  }

  getLects() {
    this.isLoading = true;
    this.coursesService.getLectsAttends(this.course_id).subscribe(
      (response: any) => {
        if (response) {
          this.lectsList = response.data;
          this.lectsList = this.coursesService.addFileURL(this.lectsList, 'EXCUSE_FILE');

          this.isLoading = false;
        }
      }
    );
  }

  addEXCUSE(attnd_id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.data = { attnd_id: attnd_id };


    let dialogref = this.dialog.open(SkillsStdExcuseComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result && result['refresh']) {
        this.getLects();
      }
    });
  }

}
