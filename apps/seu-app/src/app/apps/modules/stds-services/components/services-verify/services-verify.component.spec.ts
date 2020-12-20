import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesVerifyComponent } from './services-verify.component';

describe('ServicesVerifyComponent', () => {
  let component: ServicesVerifyComponent;
  let fixture: ComponentFixture<ServicesVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
