import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycallbackComponent } from './paycallback.component';

describe('PaycallbackComponent', () => {
  let component: PaycallbackComponent;
  let fixture: ComponentFixture<PaycallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaycallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
