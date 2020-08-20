import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SkillsCourseService } from '../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-course-excuses',
  templateUrl: './skills-course-excuses.component.html',
  styleUrls: ['./skills-course-excuses.component.css']
})
export class SkillsCourseExcusesComponent implements OnInit {

  isLoading = false;
  status;
  course_id
  excusesList = [];
  reqIds = [];
  constructor(
    private skillsCourseService: SkillsCourseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.course_id = this.route.snapshot.params['id'];
    this.getList();

  }

  ngOnInit() {
    this.getList();
  }
  changeBulkStatus() {
    if (this.reqIds.length == 0) {
      this.skillsCourseService.tryagain();
      return false;
    }
    this.skillsCourseService.excuses_update({ COURSE_ID: this.course_id, STATUS: this.status, ids: this.reqIds }).subscribe((response) => {
      if (response['status']) {
        this.skillsCourseService.notifySucc(response['res_code']);
        this.getList();
      } else {
        this.skillsCourseService.notifyError(response['res_code']);
        this.reqIds = [];
      }
    }, err => {
      this.skillsCourseService.tryagain();
    });
  }
  setAll(status) {
    if (status) {
      this.reqIds = this.excusesList.map(it => it['ATTND_ID']);
    } else {
      this.reqIds = [];
    }
    this.excusesList = this.excusesList.map(it => {
      it['selected'] = status;
      return it;
    });
  }
  pushId(status, id) {
    if (status) {
      this.reqIds.push(id);
    } else {
      const idx = this.reqIds.findIndex(it => it == id);
      if (idx > -1) {
        this.reqIds = this.reqIds.filter(it => it != id);
      }
    }
  }
  getList() {
    this.isLoading = true;
    this.skillsCourseService.excuses_list(this.course_id).subscribe((response) => {
      if (response['status']) {
        this.excusesList = response['data'];
        this.excusesList = this.skillsCourseService.addFileURL(this.excusesList, 'EXCUSE_FILE');
        this.isLoading = false;
      } else {
        this.isLoading = false;
      }
    }, err => {
      this.skillsCourseService.tryagain();
      this.isLoading = false;
    });
  }

}
