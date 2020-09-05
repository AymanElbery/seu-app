import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddFileComponent } from './diag/add-file/add-file.component';
import { StaffFileService } from '../../../../services/skill-staff-file';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-skills-staff-course-files',
  templateUrl: './skills-staff-course-files.component.html',
  styleUrls: ['./skills-staff-course-files.component.css']
})
export class SkillsStaffCourseFilesComponent implements OnInit {

  isLoading;
  files;
  course_id
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private staffFileService: StaffFileService,
    private translate: TranslateService
  ) { 
    this.course_id = this.route.snapshot.params['id'];
    this.getAllFiles();
  }

  ngOnInit() {
  }

  getAllFiles(){
    this.isLoading = true;
    this.staffFileService.getAllFiles(this.course_id).subscribe(
      (response: any) => {
        if (response) {
          this.files = response.data;
          this.files = this.staffFileService.addFileURL(this.files);
          this.isLoading = false;
        }
      }
    );
  }

  addNewFile(course_id){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.data = { course_id: course_id};


    let dialogref = this.dialog.open(AddFileComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result && result['refresh']) {
        this.getAllFiles();
      }
    });
  }

  delete(id){
    if (confirm(this.translate.instant('courses.delete_confirm'))) {
      this.isLoading = true;
      this.staffFileService.delete(id).subscribe(
      (response: any) => {
        if (response) {
          this.getAllFiles();
        }
      },
        error => { }
      )
    }
  }

}
