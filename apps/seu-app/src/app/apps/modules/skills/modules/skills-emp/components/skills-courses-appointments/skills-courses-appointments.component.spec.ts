import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCoursesAppointmentsComponent } from './skills-courses-appointments.component';

describe('SkillsCoursesAppointmentsComponent', () => {
  let component: SkillsCoursesAppointmentsComponent;
  let fixture: ComponentFixture<SkillsCoursesAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCoursesAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCoursesAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
