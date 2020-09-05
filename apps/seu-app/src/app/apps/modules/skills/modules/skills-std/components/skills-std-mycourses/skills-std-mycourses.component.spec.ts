import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdMycoursesComponent } from './skills-std-mycourses.component';

describe('SkillsStdMycoursesComponent', () => {
  let component: SkillsStdMycoursesComponent;
  let fixture: ComponentFixture<SkillsStdMycoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdMycoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdMycoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
