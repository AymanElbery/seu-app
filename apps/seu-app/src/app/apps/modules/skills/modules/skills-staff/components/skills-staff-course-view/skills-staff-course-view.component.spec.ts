import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStaffCourseViewComponent } from './skills-staff-course-view.component';

describe('SkillsStaffCourseViewComponent', () => {
  let component: SkillsStaffCourseViewComponent;
  let fixture: ComponentFixture<SkillsStaffCourseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStaffCourseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStaffCourseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
