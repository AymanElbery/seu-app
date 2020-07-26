import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStdMenuComponent } from './skills-std-menu.component';

describe('SkillsStdMenuComponent', () => {
  let component: SkillsStdMenuComponent;
  let fixture: ComponentFixture<SkillsStdMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStdMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStdMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
