import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStaffMycoursesComponent } from './skills-staff-mycourses.component';

describe('SkillsStaffMycoursesComponent', () => {
  let component: SkillsStaffMycoursesComponent;
  let fixture: ComponentFixture<SkillsStaffMycoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStaffMycoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStaffMycoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
