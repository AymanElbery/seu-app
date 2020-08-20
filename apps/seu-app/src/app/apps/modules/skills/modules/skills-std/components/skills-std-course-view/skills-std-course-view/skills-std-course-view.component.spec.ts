import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdCourseViewComponent } from './skills-std-course-view.component';

describe('SkillsStdCourseViewComponent', () => {
  let component: SkillsStdCourseViewComponent;
  let fixture: ComponentFixture<SkillsStdCourseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdCourseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdCourseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
