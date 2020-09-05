import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCoursesFromComponent } from './skills-courses-from.component';

describe('SkillsCoursesFromComponent', () => {
  let component: SkillsCoursesFromComponent;
  let fixture: ComponentFixture<SkillsCoursesFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCoursesFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCoursesFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
