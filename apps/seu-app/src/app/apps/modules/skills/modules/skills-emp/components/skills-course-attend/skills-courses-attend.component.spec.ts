import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCoursesAttendComponent } from './skills-courses-attend.component';

describe('SkillsCoursesAttendComponent', () => {
  let component: SkillsCoursesAttendComponent;
  let fixture: ComponentFixture<SkillsCoursesAttendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCoursesAttendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCoursesAttendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
