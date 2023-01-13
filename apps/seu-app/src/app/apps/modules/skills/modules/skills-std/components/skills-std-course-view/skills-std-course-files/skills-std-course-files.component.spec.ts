import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdCourseFilesComponent } from './skills-std-course-files.component';

describe('SkillsStdCourseFilesComponent', () => {
  let component: SkillsStdCourseFilesComponent;
  let fixture: ComponentFixture<SkillsStdCourseFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdCourseFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdCourseFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
