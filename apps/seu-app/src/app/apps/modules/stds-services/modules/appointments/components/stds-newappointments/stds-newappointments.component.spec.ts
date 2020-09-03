import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdsNewappointmentsComponent } from './stds-newappointments.component';

describe('StdsNewappointmentsComponent', () => {
  let component: StdsNewappointmentsComponent;
  let fixture: ComponentFixture<StdsNewappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdsNewappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdsNewappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
