import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCoursesStdComponent } from './skills-courses-std.component';

describe('SkillsCoursesStdComponent', () => {
  let component: SkillsCoursesStdComponent;
  let fixture: ComponentFixture<SkillsCoursesStdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCoursesStdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCoursesStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
