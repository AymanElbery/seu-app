import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipMyapplicationsComponent } from './leadership-myapplications.component';

describe('LeadershipMyapplicationsComponent', () => {
  let component: LeadershipMyapplicationsComponent;
  let fixture: ComponentFixture<LeadershipMyapplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipMyapplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipMyapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
