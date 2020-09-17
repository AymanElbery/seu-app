import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSmsVerifyComponent } from './std-sms-verify.component';

describe('StdSmsVerifyComponent', () => {
  let component: StdSmsVerifyComponent;
  let fixture: ComponentFixture<StdSmsVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdSmsVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdSmsVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
