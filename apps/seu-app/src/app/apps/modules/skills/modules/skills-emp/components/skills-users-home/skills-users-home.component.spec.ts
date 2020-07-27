import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsUsersHomeComponent } from './skills-users-home.component';

describe('SkillsUsersHomeComponent', () => {
  let component: SkillsUsersHomeComponent;
  let fixture: ComponentFixture<SkillsUsersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsUsersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsUsersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
