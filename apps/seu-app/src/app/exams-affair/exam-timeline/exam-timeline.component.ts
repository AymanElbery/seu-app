import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ExamExcuseService } from '../services/exam-excuse.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../account/services/user.service';

@Component({
  selector: 'app-exam-timeline',
  templateUrl: './exam-timeline.component.html',
  styleUrls: ['./exam-timeline.component.scss']
})
export class ExamTimelineComponent implements OnInit {
  image;
  isLoading = false;
  constructor(
    private userService: UserService, 
    public dialog: MatDialog, 
    private toastr: AppToasterService,
    private acadmicProc: ExamExcuseService
  ) { 
    if(this.userService.userData['class_level'] == 'PY' || this.userService.userData['class_level'] == 'PL'){
      this.image = "assets/images/exam_py.png";
    }else{
      this.image = "assets/images/exam_ug_gr.png";
    }
  }

  ngOnInit() {
    
  }
}