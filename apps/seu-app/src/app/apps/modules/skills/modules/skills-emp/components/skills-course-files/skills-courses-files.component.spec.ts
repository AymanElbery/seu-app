import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCoursesFilesComponent } from './skills-courses-files.component';

describe('SkillsCoursesFilesComponent', () => {
  let component: SkillsCoursesFilesComponent;
  let fixture: ComponentFixture<SkillsCoursesFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCoursesFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCoursesFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
