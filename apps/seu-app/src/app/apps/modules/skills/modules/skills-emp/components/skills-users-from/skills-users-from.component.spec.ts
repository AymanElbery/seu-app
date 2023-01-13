import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsUsersFromComponent } from './skills-users-from.component';

describe('SkillsUsersFromComponent', () => {
  let component: SkillsUsersFromComponent;
  let fixture: ComponentFixture<SkillsUsersFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsUsersFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsUsersFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
