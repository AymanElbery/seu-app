import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStaffCourseFilesComponent } from './skills-staff-course-files.component';

describe('SkillsStaffCourseFilesComponent', () => {
  let component: SkillsStaffCourseFilesComponent;
  let fixture: ComponentFixture<SkillsStaffCourseFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStaffCourseFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStaffCourseFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
