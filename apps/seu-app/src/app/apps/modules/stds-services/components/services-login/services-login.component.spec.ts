import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLoginComponent } from './services-login.component';

describe('ServicesLoginComponent', () => {
  let component: ServicesLoginComponent;
  let fixture: ComponentFixture<ServicesLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
