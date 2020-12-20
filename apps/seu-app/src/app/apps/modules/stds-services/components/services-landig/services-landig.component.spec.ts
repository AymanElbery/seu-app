import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLandigComponent } from './services-landig.component';

describe('ServicesLandigComponent', () => {
  let component: ServicesLandigComponent;
  let fixture: ComponentFixture<ServicesLandigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesLandigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLandigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
