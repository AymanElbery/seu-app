import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsLandingComponent } from './apps-landing.component';

describe('AppsLandingComponent', () => {
  let component: AppsLandingComponent;
  let fixture: ComponentFixture<AppsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
