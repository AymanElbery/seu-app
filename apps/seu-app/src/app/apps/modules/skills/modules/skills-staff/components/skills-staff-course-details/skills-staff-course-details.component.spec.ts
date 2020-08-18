import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStaffCourseDetailsComponent } from './skills-staff-course-details.component';

describe('SkillsStaffCourseDetailsComponent', () => {
  let component: SkillsStaffCourseDetailsComponent;
  let fixture: ComponentFixture<SkillsStaffCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStaffCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStaffCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
