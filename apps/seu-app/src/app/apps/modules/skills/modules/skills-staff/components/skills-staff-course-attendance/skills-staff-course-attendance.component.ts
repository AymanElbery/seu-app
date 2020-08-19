import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffCoursesService } from '../../../../services/skill-staff-course';

@Component({
  selector: 'app-skills-staff-course-attendance',
  templateUrl: './skills-staff-course-attendance.component.html',
  styleUrls: ['./skills-staff-course-attendance.component.css']
})
export class SkillsStaffCourseAttendanceComponent implements OnInit {

  courseID;
  courseLects;
  lectAttendance;
  stdsList;
  isLoading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: StaffCoursesService) { }

  ngOnInit() {
    this.courseID = this.route.snapshot.params['id'];
    this.getCourseLects();
    this.getCourseStudents();
  }

  getCourseStudents() {
    this.coursesService.getCourseStudents(this.courseID).subscribe((response) => {
      this.stdsList = response['data'];
    });
  }

  getCourseLects() {
    if (!this.courseID) {
      this.gotoList();
    }
    this.isLoading = true;
    this.coursesService.getCourseLects(this.courseID).subscribe((response) => {
      if (response['status']) {
        this.courseLects = response['data'];
        this.isLoading = false;
      } else {
        this.gotoList();
      }
    });
  }

  gotoList() {
    this.router.navigate(['../../courses-list'], { relativeTo: this.route });
    return false;
  }
  loadAttends = false;
  firstSave = true;
  currentLec;
  lectAttends = [];
  attendDetails(lect) {
    if (this.lectAttends[lect['ID']]) {
      this.currentLec = lect;
      return false;
    }
    this.currentLec = null;
    this.loadAttends = true;
    this.coursesService.getCourseAttendance(lect['ID']).subscribe((response) => {
      if (response['status']) {
        this.loadAttends = false;
        const LECT_ID = lect['ID'];
        if (response['status']) {
          if (response['data'].length) {
            let alist = [];
            response['data'].forEach(element => {
              alist.push({ ATTND_ID: element['ATTND_ID'], STD_NAME: this.getStdName(element['STD_ID']), STD_ID: element['STD_ID'], LECT_ID: LECT_ID, STATUS: parseInt(element['STATUS']) });
            });
            this.lectAttends[lect['ID']] = alist;
            this.firstSave = false;
          } else {
            let alist = [];
            this.stdsList.forEach(element => {
              alist.push({ STD_ID: element['STD_ID'], STD_NAME: this.getStdName(element['STD_ID']), LECT_ID: LECT_ID, STATUS: 0 });
            });
            this.lectAttends[lect['ID']] = alist;
          }
          this.currentLec = lect;
        } else {
          this.coursesService.tryagain();
          this.currentLec = null;
          this.loadAttends = false;
          this.firstSave = true;
        }
      } else {
        this.currentLec = null;
        this.coursesService.tryagain();
        this.loadAttends = false;
        this.firstSave = true;
      }
    });
  }

  getStdName(sid) {
    const std = this.stdsList.find(itm => itm['STD_ID'] == sid);
    if (std) {
      return std['FULL_NAME' + this.coursesService.langPrefix]
    }
    return '';
  }

  check(status) {
    this.lectAttends[this.currentLec['ID']] = this.lectAttends[this.currentLec['ID']].map(el => {
      el['STATUS'] = status ? 1 : 0;
      return el;
    });
  }
  saveAttends() {
    this.loadAttends = true;
    this.coursesService.saveCourseAttendance({ attends: this.lectAttends[this.currentLec['ID']] }).subscribe(response => {
      if (response['status']) {
        this.coursesService.notifySucc(response['res_code']);
        if (this.firstSave) {
          delete this.lectAttends[this.currentLec['ID']];
        }
        this.currentLec = null;
      } else {
        this.coursesService.notifyError(response['res_code']);
      }
      this.loadAttends = false;
    }, err => {
      this.coursesService.tryagain();
      this.loadAttends = false;
    });
  }
}