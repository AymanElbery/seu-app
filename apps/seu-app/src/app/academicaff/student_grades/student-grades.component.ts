import { Component, OnInit, OnDestroy } from '@angular/core';
import { AcademicRecordService } from '../services/academic-record.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss']
})
export class StudentGradesComponent implements OnInit, OnDestroy {

  recoredData;
  isLoading = false;
  msgs;
  constructor(private transalte: TranslateService, private toastr: AppToasterService, private academicService: AcademicRecordService) { }

  ngOnDestroy() {

  }
  ngOnInit() {
    this.getReqs();
  }
  getReqs() {
    this.isLoading = true;
    this.academicService.getٍِStudentGrades().then(
      res => {
        this.msgs = res['messages'];
        if (res['status']) {
          this.recoredData = (res as any).data;
        }
        this.isLoading = false;
      },
      err => {
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;

      }
    );
  }

}
