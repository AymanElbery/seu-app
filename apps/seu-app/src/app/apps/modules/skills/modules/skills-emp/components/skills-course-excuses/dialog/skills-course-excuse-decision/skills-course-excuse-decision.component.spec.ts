import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCourseExcuseDecisionComponent } from './skills-course-excuse-decision.component';

describe('SkillsCourseExcuseDecisionComponent', () => {
  let component: SkillsCourseExcuseDecisionComponent;
  let fixture: ComponentFixture<SkillsCourseExcuseDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCourseExcuseDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCourseExcuseDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
