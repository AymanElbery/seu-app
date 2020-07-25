import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFooterComponent } from './skills-footer.component';

describe('SkillsFooterComponent', () => {
  let component: SkillsFooterComponent;
  let fixture: ComponentFixture<SkillsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
