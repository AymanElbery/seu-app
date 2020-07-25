import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHeaderComponent } from './skills-header.component';

describe('SkillsHeaderComponent', () => {
  let component: SkillsHeaderComponent;
  let fixture: ComponentFixture<SkillsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
