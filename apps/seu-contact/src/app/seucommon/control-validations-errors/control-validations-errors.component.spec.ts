import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValidationsErrorsComponent } from './control-validations-errors.component';

describe('ControlValidationsErrorsComponent', () => {
  let component: ControlValidationsErrorsComponent;
  let fixture: ComponentFixture<ControlValidationsErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlValidationsErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlValidationsErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
