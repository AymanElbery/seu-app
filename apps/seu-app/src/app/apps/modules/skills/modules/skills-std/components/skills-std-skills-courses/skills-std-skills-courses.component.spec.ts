import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdSkillsCoursesComponent } from './skills-std-skills-courses.component';

describe('SkillsStdSkillsCoursesComponent', () => {
  let component: SkillsStdSkillsCoursesComponent;
  let fixture: ComponentFixture<SkillsStdSkillsCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdSkillsCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdSkillsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
