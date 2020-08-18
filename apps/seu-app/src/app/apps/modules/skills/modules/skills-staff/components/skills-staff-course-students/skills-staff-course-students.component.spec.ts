import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStaffCourseStudentsComponent } from './skills-staff-course-students.component';

describe('SkillsStaffCourseStudentsComponent', () => {
  let component: SkillsStaffCourseStudentsComponent;
  let fixture: ComponentFixture<SkillsStaffCourseStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStaffCourseStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStaffCourseStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
