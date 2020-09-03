import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdCourseDetailsComponent } from './skills-std-course-details.component';

describe('SkillsStdCourseDetailsComponent', () => {
  let component: SkillsStdCourseDetailsComponent;
  let fixture: ComponentFixture<SkillsStdCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
