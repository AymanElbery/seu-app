import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicStdsCertComponent } from './public-stds-cert.component';

describe('PublicStdsCertComponent', () => {
  let component: PublicStdsCertComponent;
  let fixture: ComponentFixture<PublicStdsCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicStdsCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicStdsCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
