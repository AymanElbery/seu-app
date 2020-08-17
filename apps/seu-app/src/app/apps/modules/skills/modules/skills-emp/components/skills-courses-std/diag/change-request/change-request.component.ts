import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SkillsCourseService } from '../../../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-change-request',
  templateUrl: './change-request.component.html',
  styleUrls: ['./change-request.component.scss']
})
export class ChangeRequestComponent implements OnInit {

  status;
  course_id
  id;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ChangeRequestComponent>,
    private toastr: AppToasterService,
    private skillsCourseService: SkillsCourseService,
    private router: Router, 
    private route: ActivatedRoute,
  ) {
    this.course_id = this.router.url.split("/")[5];
    this.status = this.data.status; 
    this.id = this.data.id; 
  }

  ngOnInit() {

  }

  changeStatus() {
    let data = {
      'REC_ID'      : this.id,
      'STATUS'      : this.status,
    };
    this.skillsCourseService.updateStatus(data).subscribe(
      (response: any) => {
        if (response) {
          this.closeDiag();
        }
      }
    );
  }

  closeDiag() {
    this.dialogRef.close();
  }

}
