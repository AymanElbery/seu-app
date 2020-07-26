import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsUsersListComponent } from './skills-users-list.component';

describe('SkillsUsersListComponent', () => {
  let component: SkillsUsersListComponent;
  let fixture: ComponentFixture<SkillsUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
