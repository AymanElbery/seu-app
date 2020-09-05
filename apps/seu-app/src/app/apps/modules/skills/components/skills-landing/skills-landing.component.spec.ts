import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsLandingComponent } from './skills-landing.component';

describe('SkillsLandingComponent', () => {
  let component: SkillsLandingComponent;
  let fixture: ComponentFixture<SkillsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
