import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdCourseRatingComponent } from './skills-std-course-rating.component';

describe('SkillsStdCourseRatingComponent', () => {
  let component: SkillsStdCourseRatingComponent;
  let fixture: ComponentFixture<SkillsStdCourseRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdCourseRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdCourseRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
