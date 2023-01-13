import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEmpMenuComponent } from './skills-emp-menu.component';

describe('SkillsEmpMenuComponent', () => {
  let component: SkillsEmpMenuComponent;
  let fixture: ComponentFixture<SkillsEmpMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsEmpMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsEmpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
