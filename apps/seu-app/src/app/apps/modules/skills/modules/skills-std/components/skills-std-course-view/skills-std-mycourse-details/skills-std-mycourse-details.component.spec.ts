import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdMycourseDetailsComponent } from './skills-std-mycourse-details.component';

describe('SkillsStdMycourseDetailsComponent', () => {
  let component: SkillsStdMycourseDetailsComponent;
  let fixture: ComponentFixture<SkillsStdMycourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdMycourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdMycourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
