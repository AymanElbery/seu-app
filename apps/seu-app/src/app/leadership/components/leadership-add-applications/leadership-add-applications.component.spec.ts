import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipAddApplicationsComponent } from './leadership-add-applications.component';

describe('LeadershipAddApplicationsComponent', () => {
  let component: LeadershipAddApplicationsComponent;
  let fixture: ComponentFixture<LeadershipAddApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipAddApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipAddApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
