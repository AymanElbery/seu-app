import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEnquireComponent } from './contact-enquire.component';

describe('ContactEnquireComponent', () => {
  let component: ContactEnquireComponent;
  let fixture: ComponentFixture<ContactEnquireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactEnquireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEnquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
