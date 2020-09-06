import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdsAppointmentsComponent } from './stds-appointments.component';

describe('StdsAppointmentsComponent', () => {
  let component: StdsAppointmentsComponent;
  let fixture: ComponentFixture<StdsAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdsAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdsAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
