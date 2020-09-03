import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCourseExcusesComponent } from './skills-course-excuses.component';

describe('SkillsCourseExcusesComponent', () => {
  let component: SkillsCourseExcusesComponent;
  let fixture: ComponentFixture<SkillsCourseExcusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCourseExcusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCourseExcusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
