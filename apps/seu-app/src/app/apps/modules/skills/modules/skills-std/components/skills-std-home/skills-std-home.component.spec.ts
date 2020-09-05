import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdHomeComponent } from './skills-std-home.component';

describe('SkillsStdHomeComponent', () => {
  let component: SkillsStdHomeComponent;
  let fixture: ComponentFixture<SkillsStdHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
