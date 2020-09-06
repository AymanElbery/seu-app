import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCourseViewComponent } from './skills-course-view.component';

describe('SkillsCourseViewComponent', () => {
  let component: SkillsCourseViewComponent;
  let fixture: ComponentFixture<SkillsCourseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCourseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCourseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
