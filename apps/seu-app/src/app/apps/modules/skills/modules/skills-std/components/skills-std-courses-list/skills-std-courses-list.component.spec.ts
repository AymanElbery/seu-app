import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdCoursesListComponent } from './skills-std-courses-list.component';

describe('SkillsStdCoursesListComponent', () => {
  let component: SkillsStdCoursesListComponent;
  let fixture: ComponentFixture<SkillsStdCoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdCoursesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
