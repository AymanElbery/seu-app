import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStaffCourseAttendanceComponent } from './skills-staff-course-attendance.component';

describe('SkillsStaffCourseAttendanceComponent', () => {
  let component: SkillsStaffCourseAttendanceComponent;
  let fixture: ComponentFixture<SkillsStaffCourseAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStaffCourseAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStaffCourseAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
