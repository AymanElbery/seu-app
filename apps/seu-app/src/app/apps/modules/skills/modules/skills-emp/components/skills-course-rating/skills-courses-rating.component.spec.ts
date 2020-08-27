import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCoursesRatingComponent } from './skills-courses-rating.component';

describe('SkillsCoursesRatingComponent', () => {
  let component: SkillsCoursesRatingComponent;
  let fixture: ComponentFixture<SkillsCoursesRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCoursesRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCoursesRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
