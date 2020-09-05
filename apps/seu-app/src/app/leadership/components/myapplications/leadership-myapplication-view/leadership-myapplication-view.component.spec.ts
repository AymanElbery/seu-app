import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipMyapplicationViewComponent } from './leadership-myapplication-view.component';

describe('LeadershipMyapplicationViewComponent', () => {
  let component: LeadershipMyapplicationViewComponent;
  let fixture: ComponentFixture<LeadershipMyapplicationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipMyapplicationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipMyapplicationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
