import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdExcuseComponent } from './skills-std-excuse.component';

describe('SkillsStdExcuseComponent', () => {
  let component: SkillsStdExcuseComponent;
  let fixture: ComponentFixture<SkillsStdExcuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdExcuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdExcuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
