import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStaffMenuComponent } from './skills-staff-menu.component';

describe('SkillsStaffMenuComponent', () => {
  let component: SkillsStaffMenuComponent;
  let fixture: ComponentFixture<SkillsStaffMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStaffMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStaffMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
