import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCoursesDetailsComponent } from './skills-courses-details.component';

describe('SkillsCoursesDetailsComponent', () => {
  let component: SkillsCoursesDetailsComponent;
  let fixture: ComponentFixture<SkillsCoursesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCoursesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCoursesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
