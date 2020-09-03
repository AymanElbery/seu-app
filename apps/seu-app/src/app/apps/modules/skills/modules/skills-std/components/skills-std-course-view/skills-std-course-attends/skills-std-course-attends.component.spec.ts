import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdCourseAttendsComponent } from './skills-std-course-attends.component';

describe('SkillsStdCourseAttendsComponent', () => {
  let component: SkillsStdCourseAttendsComponent;
  let fixture: ComponentFixture<SkillsStdCourseAttendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdCourseAttendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdCourseAttendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
