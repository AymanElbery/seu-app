import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCoursesListComponent } from './skills-courses-list.component';

describe('SkillsCoursesListComponent', () => {
  let component: SkillsCoursesListComponent;
  let fixture: ComponentFixture<SkillsCoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCoursesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
