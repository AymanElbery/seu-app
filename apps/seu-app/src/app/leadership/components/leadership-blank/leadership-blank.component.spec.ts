import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipBlankComponent } from './leadership-blank.component';

describe('LeadershipBlankComponent', () => {
  let component: LeadershipBlankComponent;
  let fixture: ComponentFixture<LeadershipBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
